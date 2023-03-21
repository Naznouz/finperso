import {html, css, GfBase} from './GfBase.js';

export default class GfSpacer extends GfBase {
  constructor() {
    super();
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-spacer.css">
      <div></div>
    `;
  }
}