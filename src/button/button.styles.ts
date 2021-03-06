import { css } from "lit-element";

export default css`
  :host {
    display: inline-block;
    overflow: hidden;
    height: 35px;
    font-size: 14px;
    flex-shrink: 0;
  }

  button {
    color: inherit;
    background: var(--theme-highlight);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    color: inherit;
    border: none;
    box-sizing: border-box;
    padding: 0 15px;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
  }

  .round {
    padding: 0px;
    border-radius: 50%;
  }

  button.disabled {
    cursor: default;
    opacity: 0.5;
  }

  button.default:hover {
    background: var(--theme-highlight-alt);
  }

  button.default:not(.disabled):hover {
    opacity: 0.5;
    background: var(--theme-highlight);
  }

  button.product {
    background: var(--theme-product);
    color: var(--theme-text-light);
    text-shadow: 0 0.5px 1px #057c76;
  }

  button:not(.disabled).product:hover {
    background: var(--theme-product-alt);
  }

  button.danger {
    color: var(--theme-text-light);
    background: var(--theme-danger);
  }

  button:not(.disabled).danger:hover {
    background: var(--theme-danger-alt);
  }

  button.bright {
    color: var(--theme-text-dark);
    background: var(--theme-input);
  }

  button.bright:not(.disabled):hover {
    background: var(--theme-input-alpha);
  }

  button.link {
    background: transparent;
    box-shadow: none;
    color: var(--theme-product);
  }

  button.cta {
    background: var(--theme-cta);
    color: var(--theme-text-light);
    text-shadow: 0 0.5px 1px var(--theme-cta-alt);
  }

  button:not(.disabled).link:hover {
    background: transparent;
    color: var(--theme-product-alt);
  }
`;
