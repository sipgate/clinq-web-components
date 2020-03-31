import { css } from "lit-element";

export default css`
  :host {
    display: block;
    position: relative;
    width: 100%;
  }

  input {
    font-family: inherit;
    font-size: inherit;
    box-sizing: border-box;
    border: none;
    border-radius: var(--theme-input-radius);
    background: var(--theme-input);
    width: 100%;
    height: 100%;
    padding: 5px 40px 5px 10px;
    outline: none;
  }

  input::placeholder {
    color: var(--theme-placeholder);
  }

  img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    right: 15px;
  }
`;
