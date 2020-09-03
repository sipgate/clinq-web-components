import { css } from "lit-element";

export default css`

  .modal {
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

  .content {
    font-weight: 700;
    background: #323239;
    margin: 50px auto;
    padding: 40px 20px;
    border-radius: 8px;
    max-width: 800px;
    position: relative;
  }

  .close-icon {
    position: absolute;
    top: 16px;
    right: 16px;
    outline: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    width: 16px;
    height: 16px;
    background-color: var(--theme-danger);
    border-radius: 50%;
  }

  .close-icon:hover:after {
    content: "x";
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 13px;
  }
`;
