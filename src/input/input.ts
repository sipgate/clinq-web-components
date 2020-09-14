import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import styles from "./input.styles";

type InputType =
  | "hidden"
  | "text"
  | "search"
  | "tel"
  | "url"
  | "email"
  | "password"
  | "datetime"
  | "date"
  | "month"
  | "week"
  | "time"
  | "datetime-local"
  | "number"
  | "range"
  | "color"
  | "checkbox"
  | "radio"
  | "file"
  | "submit"
  | "image"
  | "reset"
  | "button";

const HTML_TAG = "clinq-input";

@customElement(HTML_TAG)
class InputElement extends LitElement {
  static styles = styles;

  @property({ attribute: true })
  private type: InputType = "text";

  @property({ attribute: false })
  private value = "";

  @property({ attribute: true })
  private placeholder = "";

  @property({ attribute: false })
  private icon?: string;

  @property({ type: Boolean })
  public required = false;

  private handleInput(event: InputEvent) {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      this.dispatchEvent(
        new CustomEvent("change", {
          detail:
            this.type === "checkbox"
              ? { value: target.checked }
              : { value: target.value },
        })
      );
    }
  }

  public render() {
    return html`
      <input
        placeholder=${this.placeholder}
        .value=${this.value}
        type=${this.type}
        @input=${this.handleInput}
        ?required=${this.required}
      />
      ${this.icon ? html` <img src=${this.icon} /> ` : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: InputElement;
  }
}
