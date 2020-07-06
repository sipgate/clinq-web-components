import { html, nothing } from "lit-html";
import styles from "./card.styles";
import { component } from "haunted";

type CardProps = {
  icon?: string;
};

function Card({ icon }: CardProps) {
  return html`
    ${styles}

    <div class="card">
      <slot name="header"></slot>
      <div class="content">
        ${icon ? html`<div class="icon"><img src=${icon} /></div>` : nothing}
        <div class="text"><slot name="content"></slot></div>
      </div>
      <slot name="footer"></slot>
    </div>
  `;
}

customElements.define("clinq-card", component<CardProps>(Card));
