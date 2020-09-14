import { customElement, LitElement, property } from "lit-element";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import styles from "./spinner.styles";

type SpinnerVariant = "dark" | "bright";

const HTML_TAG = "clinq-spinner";

@customElement(HTML_TAG)
class SpinnerElement extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  public variant: SpinnerVariant = "bright";

  render() {
    return html` <svg class="spinner" viewBox="0 0 50 50">
      <circle
        class="path ${classMap({
          bright: this.variant === "bright",
          dark: this.variant === "dark",
        })}"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="5"
      ></circle>
    </svg>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: SpinnerElement;
  }
}
