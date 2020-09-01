import { customElement, LitElement, property } from "lit-element";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import styles from "./button.styles";

type ButtonVariant =
  | "default"
  | "bright"
  | "product"
  | "danger"
  | "link"
  | "cta";

type ButtonType = "button" | "submit" | "reset" | "menu";

@customElement("clinq-button")
export class Button extends LitElement {
  static styles = styles;

  @property()
  private type: ButtonType = "button";

  @property()
  public variant: ButtonVariant = "default";

  @property({ type: Boolean })
  public disabled: boolean = false;

  @property({ type: Boolean })
  public round: boolean = false;

  @property({ type: Boolean })
  public loading: boolean = false;

  private handleClick(event: MouseEvent) {
    event.stopPropagation();
    if (!this.disabled) {
      this.click();
    }
  }

  render() {
    const { disabled, round, variant, loading } = this;
    return html`
      <button
        type=${this.type}
        @click=${this.handleClick}
        class=${classMap({
          round,
          disabled,
          default: variant === "default",
          product: variant === "product",
          bright: variant === "bright",
          danger: variant === "danger",
          link: variant === "link",
          cta: variant === "cta",
        })}
      >
        ${loading
          ? html`<clinq-spinner
              .variant=${variant === "bright" ? "dark" : "bright"}
            ></clinq-spinner>`
          : html`<slot></slot>`}
      </button>
    `;
  }
}
