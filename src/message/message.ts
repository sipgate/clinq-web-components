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

function onlyUnique(value: string, index: number, self: string[]) {
  return self.indexOf(value) === index;
}

function replaceAt(
  text: string,
  index: number,
  word: string,
  replacement: string
) {
  return text.substr(0, index) + replacement + text.substr(index + word.length);
}

@customElement(HTML_TAG)
class MessageElement extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  public value: Message | null = null;

  @property({ attribute: false })
  public highlights: string[] = [];

  private getHighlightedText(text: string, highlight: string) {
    const regex = new RegExp(highlight, "gi");
    const match = regex.exec(text);
    if (match) {
      const { index } = match;
      return replaceAt(text, index, highlight, `<b>${match}</b>`);
    }
    return text;
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

    for (const highlight of this.highlights.filter(onlyUnique)) {
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
