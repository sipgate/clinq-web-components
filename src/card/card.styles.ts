import { css } from "lit-element";

export default css`
  :host {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
  }

  .card {
    font-weight: 700;
    background: var(--theme-background-light);
    box-sizing: border-box;
    width: 100%;
  }

  .content {
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
  }

  .icon {
    margin-right: 10px;
    padding: 10px;
    border-right: 1px solid var(--theme-border-light);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-container {
    flex-grow: 1;
    width: 0;
  }
`;
