import { customElement, LitElement } from "lit-element";
import { html } from "lit-html";
import styles from "./info-container.styles";

@customElement("clinq-info-container")
export class InfoContainer extends LitElement {
  static styles = styles;

  public render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }
}
