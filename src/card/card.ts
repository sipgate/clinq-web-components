import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import styles from "./card.styles";

@customElement("clinq-card")
export class Card extends LitElement {
  @property()
  public icon: string | null = null;

  public render() {
    const { icon } = this;

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
}
