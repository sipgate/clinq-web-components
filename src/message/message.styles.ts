import { css } from "lit-element";

export default css`
  :host {
    display: block;
    box-sizing: border-box;
    margin-bottom: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .container.user {
    text-align: right;
    padding-left: 50px;
  }

  .container.other {
    text-align: left;
    padding-right: 50px;
  }

  .text {
    font-size: 16px;
    font-weight: 700;
  }

  .time {
    font-size: 12px;
    margin: 5px 0px;
    color: var(--theme-highlight);
  }
`;
