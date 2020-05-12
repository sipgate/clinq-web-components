import { html } from "lit-html";

export default html`
  <style>
    :host {
      display: flex;
      flex-direction: column;
    }

    .card {
      font-weight: 700;
      background: var(--theme-background-light);
      box-sizing: border-box;
      width: 100%;
      border: none;
      border-radius: 8px;
      overflow: hidden;
    }

    .content {
      display: flex;
      flex-direction: row;
      padding: 10px;
      align-items: center;
    }

    .icon {
      margin: 10px 0px;
      padding: 10px;
      border-right: 1px solid var(--theme-border-light);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .text {
      padding: 10px;
    }

    .footer {
      padding: 10px;
    }
  </style>
`;
