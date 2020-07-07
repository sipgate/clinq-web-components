import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import { StyleInfo, styleMap } from "lit-html/directives/style-map";
import styles from "./popover.styles";

@customElement("clinq-popover")
export class Popover extends LitElement {
  @property({ attribute: true })
  private placement: "bottom-left" | "bottom-right" = "bottom-right";

  @property({ attribute: true })
  private open = false;

  private handleToggle() {
    this.dispatchEvent(new CustomEvent("toggle"));
  }

  private getContentPosition() {
    const baseStyles: StyleInfo = { top: "calc(100% + 5px)" };
    if (this.placement === "bottom-left") {
      return styleMap({ ...baseStyles, left: "0" });
    }
    if (this.placement === "bottom-right") {
      return styleMap({ ...baseStyles, right: "0" });
    }
    return styleMap(baseStyles);
  }

  public render() {
    return html`
      ${styles}

      <div class="container">
        <slot name="button" @click=${this.handleToggle}></slot>
        ${this.open
          ? html`
              <div class="content" style=${this.getContentPosition()}>
                <slot name="content"></slot>
              </div>
            `
          : nothing}
      </div>
    `;
  }
}
