import { html } from "lit-html";
import styles from "./input.styles";
import { LitElement, property } from "lit-element";

class Input extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  private value = "";

  @property({ attribute: false })
  private placeholder = "";

  private handleInput(event: InputEvent) {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      this.dispatchEvent(new CustomEvent("change", { detail: target.value }));
    }
  }

  render() {
    return html`
      <input
        placeholder=${this.placeholder}
        .value=${this.value}
        @input=${this.handleInput}
      />
    `;
  }
}

customElements.define("clinq-input", Input);
