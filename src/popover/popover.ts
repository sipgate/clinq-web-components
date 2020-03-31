import { html, nothing } from "lit-html";
import { StyleInfo, styleMap } from "lit-html/directives/style-map";
import styles from "./popover.styles";
import { useState, useEffect, component } from "haunted";

export type PopoverProps = {
  placement?: "bottom-left" | "bottom-right";
};

function Popover({ placement = "bottom-right" }: PopoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener("click", listener);
    return () => document.body.removeEventListener("click", listener);
  });

  const toggleIsOpen = (event: MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleContentClick = (event: MouseEvent) => event.stopPropagation();

  const getContentPosition = () => {
    const baseStyles: StyleInfo = { top: "calc(100% + 5px)" };
    if (placement === "bottom-left") {
      return styleMap({ ...baseStyles, left: "0" });
    }
    if (placement === "bottom-right") {
      return styleMap({ ...baseStyles, right: "0" });
    }
    return styleMap(baseStyles);
  };

  return html`
    ${styles}

    <div class="container">
      <slot name="button" @click=${toggleIsOpen}></slot>
      ${isOpen
        ? html`
            <div
              class="content"
              @click=${handleContentClick}
              style=${getContentPosition()}
            >
              <slot name="content"></slot>
            </div>
          `
        : nothing}
    </div>
  `;
}

customElements.define("clinq-popover", component<PopoverProps>(Popover));
