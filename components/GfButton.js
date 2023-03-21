import { html, css, GfBase } from './GfBase.js'

export default class GfButton extends GfBase {
  constructor () {
    super()

    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-button.css" />
      <button><slot></slot></button>
    `
  }
}
