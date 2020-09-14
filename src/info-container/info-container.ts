import { customElement, LitElement } from "lit-element";
import { html } from "lit-html";
import styles from "./info-container.styles";

const HTML_TAG = "clinq-info-container";

@customElement(HTML_TAG)
class InfoContainerElement extends LitElement {
  static styles = styles;

  public render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: InfoContainerElement;
  }
}
