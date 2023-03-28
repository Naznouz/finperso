import { html, css, GfBase } from "./GfBase.js";

export default class GfFormCard extends GfBase {
  constructor() {
    super();
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-form-card.css" />
      <details>
        <form>
          <slot></slot>
        </form>
      </details>
    `;
  }
}
