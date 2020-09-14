import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import styles from "./list-item.styles";

type ListItemEntry = {
  id: string;
  image?: string | null;
  name?: string | null;
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

  public render() {
    const { value } = this;

    if (!value) {
      return nothing;
    }

    const { image, name, description, annotation, icon } = value;

    return html`
      <div class="container">
        ${icon
          ? html` <div class="icon"><img src=${icon} alt="Icon" /></div> `
          : nothing}
        <clinq-avatar class="avatar" .url=${image} .alt=${name}></clinq-avatar>
        <div class="content">
          ${name ? html` <div class="title">${name}</div> ` : nothing}
          ${description
            ? html` <div class="description">${description}</div> `
            : nothing}
        </div>
        ${annotation
          ? html` <div class="annotation">${annotation}</div> `
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
