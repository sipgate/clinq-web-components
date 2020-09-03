import { customElement, LitElement } from "lit-element";
import { html } from "lit-html";
import styles from "./modal.styles";

@customElement("clinq-modal")
export class Input extends LitElement {
  static styles = styles;

  private handleClose() {
    this.dispatchEvent(new CustomEvent("close"));
  }

  public handleOutsideClick(e: any) {
    if(e.target.classList && e.target.classList.contains("modal")) {
        this.handleClose();
    }
  }

  public render() {
    return html`
      <div class="modal" @click=${this.handleOutsideClick}>
        <div class="content">
          <button class="close-icon" @click=${this.handleClose}></button>
          <slot name="content"> </slot>
        </div>
      </div>
    `;
  }
}
