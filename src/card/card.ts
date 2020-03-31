import { html } from "lit-html";
import styles from "./card.styles";
import { component } from "haunted";

function Card() {
  return html`
    ${styles}

    <div class="card">
      <slot name="header"></slot>
      <div class="content">
        <div class="icon"><slot name="icon"></slot></div>
        <div class="text"><slot name="content"></slot></div>
      </div>
    </div>
    <div class="footnote"><slot name="footnote"></slot></div>
  `;
}

customElements.define("clinq-card", component(Card));
