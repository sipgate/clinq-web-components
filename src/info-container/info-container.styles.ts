import { html } from "lit-html";

export default html`
  <style>
    :host {
      padding: 0 0 0 25px;
      height: 60px;
      display: flex;
      align-items: center;
    }

    :host .container {
      border-bottom: 1px solid var(--theme-border-light);
    }

    :host(:last-child) .container {
      border-bottom: none;
    }

    .container {
      padding-right: 20px;
      height: 60px;
      display: flex;
      align-items: center;
      flex-grow: 1;
      font-size: 12px;
    }
  </style>
`;
