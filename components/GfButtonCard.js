import { html, css, GfBase } from "./GfBase.js";

export default class GfButtonCard extends GfBase {
  constructor() {
    super();

    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-button-card.css" />
      <button><slot></slot></button>
    `;
  }
}
