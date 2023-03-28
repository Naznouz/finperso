import { html, css, GfBase } from './GfBase.js'

export default class GfNavbar extends GfBase {
  constructor() {
    super()

    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-navbar.css" />
      <nav>
        <ul>
          <slot></slot>
        </ul>
      </nav>
    `
  }
}
