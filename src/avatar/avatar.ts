import styles from "./avatar.styles";
import { LitElement, html, property, customElement } from "lit-element";
import { nothing } from "lit-html";

@customElement("clinq-avatar")
export class Avatar extends LitElement {
  @property()
  public url: string | null = null;

  @property()
  public alt: string | null = null;

  public render() {
    const { url, alt } = this;

    if (!url) {
      return nothing;
    }

    return html`
      ${styles}
      <img src=${url} alt=${alt || "Avatar"} />
    `;
  }
}
