import { css } from "lit-element";

export default css`
  :host {
    position: fixed;
    z-index: 1;
    left: 0px;
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
  }

  .close-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    outline: none;
    background-image: none;
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    border: none;
    cursor: pointer;
    padding: 4px;
    width: 16px;
    height: 16px;
    background-color: var(--theme-danger);
    border-radius: 50%;
  }

  .close-icon:hover::after {
    content: "x";
    color: white;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    font-size: 13px;
  }

  .card {
    font-weight: 700;
    box-sizing: border-box;
    width: 100%;
  }

  .content {
    font-weight: 700;
    background: rgb(50, 50, 57);
    margin: 50px auto;
    padding: 40px 20px;
    border-radius: 8px;
    max-width: 800px;
    position: relative;
  }
`;
