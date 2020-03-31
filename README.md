# CLINQ Web Components

Basic UI elements as web components used in CLINQ apps.

**We will not provide support for this software. Use at your own risk.**

## Installation

```sh
npm i @clinq/web-components
```

## Example

```ts
import { html, render } from "lit-html";

const example = ({ disabled, onClick }) => html`
  <clinq-button
    round
    .variant=${ButtonVariant.PRODUCT}
    ?disabled=${disabled}
    @on-click=${onClick}
  >
    <img src="./images/image.svg" />
  </clinq-button>
`;

render(
  example({ disabled: true, onClick: () => alert("Hello World") }),
  document.body
);
```
