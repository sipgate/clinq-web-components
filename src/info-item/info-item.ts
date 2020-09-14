import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import styles from "./info-item.styles";

const HTML_TAG = "clinq-info-item";

@customElement(HTML_TAG)
class InfoItemElement extends LitElement {
  static styles = styles;

  @property()
  public label: string | null = null;

  @property()
  public value: string | null = null;

  public render() {
    const { label, value } = this;

    return html`
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

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: InfoItemElement;
  }
}
