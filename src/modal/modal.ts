import { customElement, LitElement, property } from "lit-element";
import { html } from "lit-html";
import styles from "./modal.styles";

const HTML_TAG = "clinq-modal";

@customElement(HTML_TAG)
class ModalElement extends LitElement {
  static styles = styles;

  private handleClose() {
    this.dispatchEvent(new CustomEvent("close"))
  }

  public render() {
    return html`
      <div class="card">
        <div class="content">
          <button class="close-icon" @click=${this.handleClose}></button>
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: ModalElement;
  }
}
