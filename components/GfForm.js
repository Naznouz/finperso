import { html, css, GfBase } from './GfBase.js'

export default class GfForm extends GfBase {
  constructor () {
    super()
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-form.css" />
      <details class="description">
      <summary> 
        <i class="fa fa-solid fa-plus closed"></i> 
        <i class="fa fa-solid fa-minus opened"></i>
      </summary>
      <form>
        <slot></slot>
      </form>
      </details>
    `
  }
}