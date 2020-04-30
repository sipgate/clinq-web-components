import { component } from "haunted";
import { html, nothing } from "lit-html";
import styles from "./avatar.styles";

export type AvatarProps = {
  url?: string | null;
  alt?: string | null;
};

const Avatar = ({ url, alt }: AvatarProps) => {
  if (!url) {
    return nothing;
  }
  return html`
    ${styles}
    <img src=${url} alt=${alt || "Avatar"} />
  `;
};

customElements.define("clinq-avatar", component<AvatarProps>(Avatar));
