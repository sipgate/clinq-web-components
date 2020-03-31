import { html } from "lit-html";

export default html`
  <style>
    :host {
      display: flex;
      padding: 0 0 0 25px;
      flex-direction: row;
      width: 100%;
      cursor: pointer;
      box-sizing: border-box;
    }

    :host .container {
      width: 100%;
      padding: 10px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-bottom: 1px solid var(--theme-border-light);
    }

    :host(:last-child) .container {
      border-bottom: none;
    }

    :host(:hover) {
      background: var(--theme-highlight);
    }

    .icon {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      height: 35px;
      width: 35px;
      padding: 10px;
      flex-shrink: 0;
      overflow: hidden;
      box-sizing: border-box;
    }

    .icon img {
      width: 100%;
      height: 100%;
    }

    .avatar {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background: var(--theme-highlight);
      border: none;
      border-radius: 50%;
      height: 40px;
      width: 40px;
      flex-shrink: 0;
      overflow: hidden;
    }

    .avatar img {
      width: 100%;
      height: 100%;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      overflow: hidden;
      width: 0;
      flex-grow: 1;
    }

    .title {
      color: var(--theme-ui-invert);
      font-size: 12px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .description {
      font-size: 12px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      opacity: 0.5;
    }

    .timestamp {
      font-size: 10px;
      padding: 0 15px;
      opacity: 0.5;
    }
  </style>
`;
