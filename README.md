# CLINQ Web Components :art:

Basic UI elements as web components used in CLINQ apps.

**We will not provide support for this software. Use at your own risk.**

## Installation

```sh
npm i @clinq/web-components
```

## Example

```ts
// Import this package once in an early entry point in your project
import "@clinq/web-components";

import { html, render } from "lit-html";

const example = ({ disabled, onClick }) => html`
  <clinq-button round variant="bright" ?disabled=${disabled} @click=${onClick}>
    <img src="./images/image.svg" />
  </clinq-button>
`;

render(
  example({ disabled: true, onClick: () => alert("Hello World") }),
  document.body
);
```

## Development

**Do not export anything!** Otherwise `npm link` of other packages using this package will result in multiple registration of components. This is a pure component library.

## License

[MIT](LICENSE)
