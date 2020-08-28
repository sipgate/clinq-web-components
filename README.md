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
  <!-- Import clinq web components as JS module -->
  <script
    type="module"
    src="https://unpkg.com/@clinq/web-components/web-components.js"
  ></script>

  <!-- Your custom element -->
  <my-element></my-element>

  <!-- CSS Variables for clinq-button -->
  <style>
    body {
      background-color: black;
      --theme-text-dark: rgba(0, 0, 0, 1);
      --theme-input: rgba(255, 255, 255, 1);
      --theme-input-alpha: rgba(255, 255, 255, 0.8);
    }
  </style>

  <!-- my-element component implementation -->
  <script type="module">
    import { LitElement, html } from "https://unpkg.com/lit-element?module";

    class MyElement extends LitElement {
      handleClick() {
        alert("Hello, World!");
      }

      render() {
        return html`
          <clinq-button @click=${this.handleClick} variant="bright">
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
