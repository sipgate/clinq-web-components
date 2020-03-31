import { html } from "lit-html";
import styles from "./spinner.styles";
import { component } from "haunted";

export type SpinnerProps = {
  image: string;
};

const Spinner = ({ image }: SpinnerProps) => {
  return html`
    ${styles}

    <img alt="Loading" src=${image} />
  `;
};

customElements.define("clinq-spinner", component<SpinnerProps>(Spinner));
