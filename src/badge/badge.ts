import { customElement, html, LitElement } from "lit-element";
import styles from "./badge.styles";

const HTML_TAG = "clinq-badge";

@customElement(HTML_TAG)
class BadgeElement extends LitElement {
  static styles = styles;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: BadgeElement;
  }
}
