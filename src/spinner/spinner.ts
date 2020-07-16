import { customElement, LitElement, property } from "lit-element";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import styles from "./spinner.styles";

export enum SpinnerVariant {
  DARK = "DARK",
  BRIGHT = "BRIGHT",
}

@customElement("clinq-spinner")
export class Spinner extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  public variant: SpinnerVariant = SpinnerVariant.BRIGHT;

  render() {
    return html` <svg class="spinner" viewBox="0 0 50 50">
      <circle
        class="path ${classMap({
          bright: this.variant === SpinnerVariant.BRIGHT,
          dark: this.variant === SpinnerVariant.DARK,
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
