import { html, nothing } from "lit-html";
import styles from "./input.styles";
import { LitElement, property } from "lit-element";

class Input extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  private value = "";

  @property({ attribute: false })
  private placeholder = "";

  @property({ attribute: false })
  private icon?: string;

  private handleInput(event: InputEvent) {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      this.dispatchEvent(
        new CustomEvent("change", { detail: { value: target.value } })
      );
    }
  }

  render() {
    return html`
      <input
        placeholder=${this.placeholder}
        .value=${this.value}
        @input=${this.handleInput}
      />
      ${this.icon
        ? html`
            <img src=${this.icon} />
          `
        : nothing}
    `;
  }
}

customElements.define("clinq-input", Input);
