import { html } from "lit-html";

export default html`
  <style>
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    img {
      width: 128px;
      height: 128px;
    }

    .fill {
      flex: 1;
    }
  </style>
`;
