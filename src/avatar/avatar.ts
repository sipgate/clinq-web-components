import styles from "./avatar.styles";
import { LitElement, html, property, customElement } from "lit-element";
import { nothing } from "lit-html";

@customElement("clinq-avatar")
export class Avatar extends LitElement {
  static styles = styles;

  @property()
  public url?: string | null = "";

  @property()
  public alt?: string | null = "";

  public render() {
    const { url, alt } = this;

    if (!url) {
      return nothing;
    }

    return html` <img src=${url} alt=${alt || "Avatar"} /> `;
  }
}
