import { LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import { SpinnerVariant } from "../spinner/spinner";
import styles from "./button.styles";

export enum ButtonVariant {
  DEFAULT = "DEFAULT",
  BRIGHT = "BRIGHT",
  PRODUCT = "PRODUCT",
  DANGER = "DANGER",
  LINK = "LINK",
  CTA = "CTA",
}

type ButtonType = "button" | "submit" | "reset" | "menu";

class Button extends LitElement {
  static styles = styles;

  @property({ attribute: true })
  private type: ButtonType = "button";

  @property({ type: Boolean, attribute: true })
  public disabled: boolean = false;

  @property({ type: Boolean })
  public round: boolean = false;

  @property({ type: Boolean, attribute: true })
  public loading: boolean = false;

  @property({ attribute: false })
  public variant: ButtonVariant = ButtonVariant.DEFAULT;

  private handleClick(event: MouseEvent) {
    event.stopPropagation();
    this.click();
  }

  render() {
    const { disabled, round, variant, loading } = this;
    return html`
      <button
        type=${this.type}
        ?disabled=${disabled}
        @click=${this.handleClick}
        class=${classMap({
          round,
          default: variant === ButtonVariant.DEFAULT,
          product: variant === ButtonVariant.PRODUCT,
          bright: variant === ButtonVariant.BRIGHT,
          danger: variant === ButtonVariant.DANGER,
          link: variant === ButtonVariant.LINK,
          cta: variant === ButtonVariant.CTA,
        })}
      >
        ${loading
          ? html`<clinq-spinner
              .variant=${variant === ButtonVariant.BRIGHT
                ? SpinnerVariant.DARK
                : SpinnerVariant.BRIGHT}
            ></clinq-spinner>`
          : html`<slot></slot>`}
      </button>
    `;
  }
}

customElements.define("clinq-button", Button);
