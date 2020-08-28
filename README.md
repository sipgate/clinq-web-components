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
  <!-- Your custom element -->
  <my-element></my-element>

  <!-- "my-element" component implementation -->
  <script type="module">
    import "https://unpkg.com/@clinq/web-components@0.15.2?module";
    import {
      LitElement,
      html,
    } from "https://unpkg.com/lit-element@2.4.0?module";

    class MyElement extends LitElement {
      handleClick() {
        alert("Hello, World!");
      }

      render() {
        return html`
          <clinq-button @click=${this.handleClick} variant="link">
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
