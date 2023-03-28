import { html, GfBase } from './GfBase.js'

export default class GfButton extends GfBase {
  constructor() {
    super()

    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-button.css" />
      <button>
      </button>
    `
  }

  static get observedAttributes() {
    return ['icon'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'icon') {
      this.shadowRoot.querySelector('button').innerHTML = html`
      <i class="fa fa-solid fa-${newValue}"></i><slot></slot>
      `
    }
  }


  get icon() {
    return this.getAttribute('icon')
  }

}
