import { html } from "lit-html";
import styles from "./info-container.styles";
import { component } from "haunted";

function InfoContainer() {
  return html`
    ${styles}

    <div class="container">
      <slot></slot>
    </div>
  `;
}

customElements.define("clinq-info-container", component(InfoContainer));
