import { LitElement, property, customElement } from "lit-element";
import { html, nothing } from "lit-html";
import styles from "./info-item.styles";

export type InfoItemProps = {
  label: string;
  value: string;
};

@customElement("clinq-info-item")
export class InfoItem extends LitElement {
  @property()
  public label: string | null = null;

  @property()
  public value: string | null = null;

  public render() {
    const { label, value } = this;

    return html`
      ${styles}

      <clinq-info-container>
        <div class="content">
          ${label ? html`<div class="label">${label}</div>` : nothing}
          ${value ? html`<div class="value">${value}</div>` : nothing}
        </div>
        <slot></slot>
      </clinq-info-container>
    `;
  }
}
