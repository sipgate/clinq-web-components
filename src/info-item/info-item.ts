import { component } from "haunted";
import { html } from "lit-html";
import styles from "./info-item.styles";

export type InfoItemProps = {
  label: string;
  value: string;
};

function InfoItem({ label, value }: InfoItemProps) {
  return html`
    ${styles}

    <clinq-info-container>
      <div class="content">
        <div class="label">${label}</div>
        <div class="value">${value}</div>
      </div>
      <slot></slot>
    </clinq-info-container>
  `;
}

customElements.define("clinq-info-item", component<InfoItemProps>(InfoItem));
