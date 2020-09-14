import { customElement, html, LitElement, property } from "lit-element";
import { nothing } from "lit-html";
import styles from "./avatar.styles";

const HTML_TAG = "clinq-avatar";

@customElement(HTML_TAG)
class AvatarElement extends LitElement {
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

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: AvatarElement;
  }
}
