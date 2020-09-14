import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import styles from "./card.styles";

const HTML_TAG = "clinq-card";

@customElement(HTML_TAG)
class CardElement extends LitElement {
  static styles = styles;

  @property()
  public icon: string | null = null;

  public render() {
    const { icon } = this;

    return html`
      <div class="card">
        <slot name="header"></slot>
        <div class="content">
          ${icon ? html`<div class="icon"><img src=${icon} /></div>` : nothing}
          <div class="content-container">
            <slot name="content"></slot>
          </div>
        </div>
        <slot name="footer"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: CardElement;
  }
}
