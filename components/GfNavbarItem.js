import { html, css, GfBase } from './GfBase.js'

export default class GfNavbarItem extends GfBase {
  constructor() {
    super()

    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-navbar-item.css" />
      <li><slot></slot></li>
    `
  }
}
