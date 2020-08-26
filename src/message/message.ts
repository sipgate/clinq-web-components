import { customElement, LitElement, property } from "lit-element";
import { html, nothing } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import styles from "./message.styles";

type MessageType = "user" | "other";

type Message = {
  type: MessageType;
  text: string;
  time: string;
};

@customElement("clinq-message")
export class MessageElement extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  public value: Message | null = null;

  public render() {
    const { value } = this;

    if (!value) {
      return nothing;
    }

    const { type, text, time } = value;

    const containerStyles = classMap({
      user: type === "user",
      other: type === "other",
    });

    return html`
      <div class="container ${containerStyles}">
        <div class="text">${text}</div>
        <div class="time">${time}</div>
      </div>
    `;
  }
}
