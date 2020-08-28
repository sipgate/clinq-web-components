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
  <script
    type="module"
    src="https://unpkg.com/@clinq/web-components/web-components.js"
  ></script>

  <style>
    body {
      background-color: black;
      --theme-text-dark: rgba(0, 0, 0, 1);
      --theme-input: rgba(255, 255, 255, 1);
      --theme-input-alpha: rgba(255, 255, 255, 0.8);
    }
  </style>

  <script type="module">
    import { html, render } from "https://unpkg.com/lit-html/lit-html.js";

    const renderButton = ({ onClick, title }) =>
      html`
        <clinq-button @click=${onClick} variant="bright">
          ${title}
        </clinq-button>
      `;

    render(
      renderButton({ title: "Click me!", onClick: () => alert("hello world") }),
      document.body
    );
  </script>
</html>
```

## Development

**Do not export anything!** Otherwise `npm link` of other packages using this package will result in multiple registration of components. This is a pure component library.

## License

[MIT](LICENSE)
