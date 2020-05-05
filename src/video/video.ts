import { html, LitElement, property, PropertyValues } from "lit-element";
import styles from "./video.styles";

class Video extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  public stream: MediaStream | null = null;

  public updated(props: PropertyValues) {
    if (!this.shadowRoot) {
      return;
    }
    if (
      props.has("stream") &&
      this.stream &&
      this.stream.getVideoTracks().length > 0
    ) {
      const videoElement = this.shadowRoot.querySelector<HTMLVideoElement>(
        "video"
      );
      if (videoElement) {
        videoElement.srcObject = this.stream;
      }
    }
  }

  public render() {
    return html` <video autoplay></video>`;
  }
}

customElements.define("clinq-video", Video);
