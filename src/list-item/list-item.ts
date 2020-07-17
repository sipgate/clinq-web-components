import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import styles from "./list-item.styles";

export type ListItemEntry = {
  id: string;
  image?: string | null;
  name?: string | null;
  description?: string | null;
  annotation?: string | null;
  icon?: string | null;
};

@customElement("clinq-list-item")
export class ListItem extends LitElement {
  @property({ attribute: false })
  public value: ListItemEntry | null = null;

  public render() {
    const { value } = this;

    if (!value) {
      return nothing;
    }

    const { id, image, name, description, annotation, icon } = value;

    return html`
      ${styles}

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
