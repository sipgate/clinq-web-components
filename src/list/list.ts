import { property, LitElement } from "lit-element";
import { html, nothing } from "lit-html";
import { ListItemEntry } from "../list-item/list-item";
import styles from "./list.styles";

class List extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  public items = new Map<string, ListItemEntry[]>();

  @property({ attribute: false })
  public change: (id: string) => void = () => null;

  @property({ attribute: false })
  favorites: ListItemEntry[] = [];

  @property({ attribute: false })
  favoritesHeadline: string = "Favorites";

  @property({ type: Boolean })
  sort: boolean = false;

  private handleListItemSelect(id: string) {
    return () => {
      this.dispatchEvent(new CustomEvent("change", { detail: { id } }));
    };
  }

  render() {
    const keys = this.sort
      ? Array.from(this.items.keys()).sort()
      : Array.from(this.items.keys());

    return html`
      <div class="list">
        ${this.favorites.length > 0
          ? html`
              <div class="headline">
                ${this.favoritesHeadline}
              </div>
              <div>
                ${this.favorites.map(
                  (item) => html`
                    <clinq-list-item
                      @click=${this.handleListItemSelect(item.id)}
                      .value=${item}
                    ></clinq-list-item>
                  `
                )}
              </div>
            `
          : nothing}
        ${keys.map((key) => {
          const entries = this.items.get(key) || [];
          return html`
            <div class="headline">${key.toUpperCase()}</div>
            <div>
              ${entries.map(
                (entry) => html`
                  <clinq-list-item
                    @click=${this.handleListItemSelect(entry.id)}
                    .value=${entry}
                  ></clinq-list-item>
                `
              )}
            </div>
          `;
        })}
      </div>
    `;
  }
}

customElements.define("clinq-list", List);
