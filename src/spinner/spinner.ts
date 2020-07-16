import { customElement, LitElement } from "lit-element";
import { html } from "lit-html";
import styles from "./spinner.styles";

@customElement("clinq-spinner")
export class Spinner extends LitElement {
  static styles = styles;

  render() {
    return html`
        <svg class="spinner" viewBox="0 0 50 50">
          <circle
            class="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="5"
          ></circle>
        </svg>`;
  }
}
