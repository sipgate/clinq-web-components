# CLINQ Web Components :art:

Basic UI elements as web components used in CLINQ apps.

**We will not provide support for this software. Use at your own risk.**

## Installation

```sh
npm i @clinq/web-components
```

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <style>
    body {
      margin: 0;
      background-color: black;
      --theme-text-dark: rgba(0, 0, 0, 1);
      --theme-input: rgba(255, 255, 255, 1);
      --theme-input-alpha: rgba(255, 255, 255, 0.8);
    }
  </style>

  <my-element></my-element>

  <script
    type="module"
    src="https://unpkg.com/@clinq/web-components/web-components.js"
  ></script>

  <script type="module">
    import { LitElement } from "https://unpkg.com/lit-element/lit-element.js";

    class MyElement extends LitElement {
      disabled = false;

      handleClick() {
        alert("Hello, World!");
      }

      render() {
        return html`
          <clinq-button
            variant="bright"
            ?disabled=${this.disabled}
            @click=${this.handleClick}
          >
            Click me!
          </clinq-button>
        `;
      }
    }

    customElements.define("my-element", MyElement);
  </script>
</html>
```

## Development

**Do not export anything!** Otherwise `npm link` of other packages using this package will result in multiple registration of components. This is a pure component library.

## License

[MIT](LICENSE)
