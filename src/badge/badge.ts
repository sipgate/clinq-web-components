import { customElement, html, LitElement } from "lit-element";
import styles from "./badge.styles";

@customElement("clinq-badge")
export class Badge extends LitElement {
  static styles = styles;

  render() {
    return html`<slot></slot>`;
  }
}
