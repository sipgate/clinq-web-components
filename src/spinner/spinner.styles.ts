import { css } from "lit-element";

export default css`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items:center;
  }

  .spinner {
    animation: rotate 2s linear infinite;
    width: 15px;
    height: 15px;
  }

  .path {
    stroke: rgba(255, 255, 255, 0.5);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
