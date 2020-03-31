import { html, nothing } from "lit-html";
import styles from "./list-item.styles";
import { component } from "haunted";

export type ListItemEntry = {
  id: string;
  image?: string | null;
  name?: string | null;
  description?: string | null;
  annotation?: string | null;
  icon?: string | null;
};

export type ListItemProps = { value: ListItemEntry };

function ListItem({
  value: { image, name, description, annotation, icon }
}: ListItemProps) {
  return html`
    ${styles}

    <div class="container">
      ${icon
        ? html`
            <div class="icon"><img src=${icon} alt="Icon" /></div>
          `
        : nothing}
      <div class="avatar">
        ${image
          ? html`
              <img src=${image} alt=${name || "Image"} />
            `
          : nothing}
      </div>
      <div class="content">
        ${name
          ? html`
              <div class="title">${name}</div>
            `
          : nothing}
        ${description
          ? html`
              <div class="description">${description}</div>
            `
          : nothing}
      </div>
      ${annotation
        ? html`
            <div class="annotation">${annotation}</div>
          `
        : nothing}
    </div>
  `;
}

customElements.define("clinq-list-item", component<ListItemProps>(ListItem));
