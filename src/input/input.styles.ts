import { css } from "lit-element";

export default css`
  :host {
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
    padding: 5px 10px;
    outline: none;
  }

  input::placeholder {
    color: var(--theme-placeholder);
  }
`;
