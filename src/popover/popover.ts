import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import { StyleInfo, styleMap } from "lit-html/directives/style-map";
import styles from "./popover.styles";

const HTML_TAG = "clinq-popover";

@customElement(HTML_TAG)
class PopoverElement extends LitElement {
  static styles = styles;

  @property({ attribute: true })
  private placement: "bottom-left" | "bottom-right" = "bottom-right";

  @property({ type: Boolean, attribute: true })
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

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: PopoverElement;
  }
}
