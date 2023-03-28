import { html, css, GfBase } from './GfBase.js'

export default class GfButton extends GfBase {
  constructor() {
    super()
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-button.css">
      <button
        text=${this.text}
        icon=${this.icon}
      >
      </button>
    `;
  }

  static get observedAttributes() {
    return ['text', 'icon']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
  }

  get text() {
    return this.getAttribute('text')
  }

  set text(val) {
    this.name = this.setAttribute('text', val)
  }

  get icon() {
    return this.getAttribute('icon')
  }

  set icon(val) {
    this.name = this.setAttribute('icon', val)
  }
}

 