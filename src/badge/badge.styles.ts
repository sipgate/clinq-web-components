import { css } from "lit-element";

export default css`
  :host {
    padding: 5px 10px;
    background: var(--theme-background-invert);
    border-radius: 12px;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    color: var(--theme-text-dark);
    font-size: 14px;
    margin: 5px 2.5px;
  }
`;
