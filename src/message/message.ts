import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import styles from "./message.styles";
import { component } from "haunted";

export type MessageProps = {
  value: Message;
};

export interface Message {
  type: MessageType;
  text: string;
  time: string;
}

export enum MessageType {
  USER,
  OTHER
}

function Message({ value: { type, text, time } }: MessageProps) {
  const containerStyles = classMap({
    user: type === MessageType.USER,
    other: type === MessageType.OTHER
  });

  return html`
    ${styles}

    <div class="container ${containerStyles}">
      <div class="text">${text}</div>
      <div class="time">${time}</div>
    </div>
  `;
}

customElements.define("clinq-message", component<MessageProps>(Message));
