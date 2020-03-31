import { LitElement, property } from "lit-element";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import styles from "./button.styles";

export enum ButtonVariant {
  DEFAULT = "DEFAULT",
  BRIGHT = "BRIGHT",
  PRODUCT = "PRODUCT",
  DANGER = "DANGER",
  LINK = "LINK",
}

class Button extends LitElement {
  static styles = styles;

  @property({ type: Boolean })
  public disabled: boolean = false;

  @property({ type: Boolean })
  public round: boolean = false;

  @property({ attribute: false })
  public variant: ButtonVariant = ButtonVariant.DEFAULT;

  private handleClick() {
    this.dispatchEvent(new CustomEvent("on-click"));
  }

  render() {
    const { disabled, round, handleClick, variant } = this;
    return html`
      <button
        ?disabled=${disabled}
        @click=${handleClick}
        class=${classMap({
          round,
          default: variant === ButtonVariant.DEFAULT,
          product: variant === ButtonVariant.PRODUCT,
          bright: variant === ButtonVariant.BRIGHT,
          danger: variant === ButtonVariant.DANGER,
          link: variant === ButtonVariant.LINK,
        })}
      >
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("clinq-button", Button);
