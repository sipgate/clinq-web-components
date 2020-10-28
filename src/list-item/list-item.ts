import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import styles from "./list-item.styles";

type ListItemEntry = {
  id: string;
  image?: string | null;
  title?: string | null;
  description?: string | null;
  annotation?: string | null;
  icon?: string | null;
};

const HTML_TAG = "clinq-list-item";

@customElement(HTML_TAG)
class ListItemElement extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  public value: ListItemEntry | null = null;

  @property({ type: Boolean })
  public active: boolean = false;

  public render() {
    const { value } = this;

    if (!value) {
      return nothing;
    }

    const { image, title, description, annotation, icon } = value;

    return html`
      <div class="container ${classMap({ active: this.active })}">
        ${icon
          ? html`<div class="icon"><img src=${icon} alt="Icon" /></div>`
          : nothing}
        <clinq-avatar class="avatar" .url=${image} .alt=${title}></clinq-avatar>
        <div class="content">
          ${title ? html`<div class="title">${title}</div>` : title}
          ${description
            ? html`<div class="description">${description}</div>`
            : nothing}
        </div>
        ${annotation
          ? html`<div class="annotation">${annotation}</div>`
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: ListItemElement;
  }
}
