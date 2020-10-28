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

const HTML_TAG = "clinq-message";

@customElement(HTML_TAG)
class MessageElement extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  public value: Message | null = null;

  @property({ attribute: false })
  public highlights: string[] = [];

  private getHighlightedText(text: string, highlight: string) {
    const [before, after] = text.split(highlight);

    if (after) {
      return `${before}<b>${highlight}</b>${after}`;
    }

    return before;
  }

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

    let highlightedText = text;

    for (const highlight of this.highlights) {
      highlightedText = this.getHighlightedText(highlightedText, highlight);
    }

    return html`
      <div class="container ${containerStyles}">
        <div class="text" .innerHTML=${highlightedText}></div>
        <div class="time">${time}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [HTML_TAG]: MessageElement;
  }
}
