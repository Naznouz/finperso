import { html, css, GfBase } from './GfBase.js'

export default class GfButton extends GfBase {
  constructor() {
    super()
    console.log(this.icon)
    this.shadowRoot.innerHTML = html`
      <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
      <link rel="stylesheet" href="/components/styles/gf-button.css" />
      <button><slot></slot></button>
    `
  }

  // add icon next to the text
  static get observedAttributes() {
    return ['icon']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'icon') {
      const buttonElem = this.shadowRoot.querySelector('button')

      if(newValue === "plus") {
        buttonElem.innerHTML = html`<i class="fa fa-plus"></i> <slot></slot>`
      } else if (newValue === "minus") {
        buttonElem.innerHTML = html`<i class="fa fa-minus"></i> <slot></slot>`
      } else if (newValue === "triangle") {
        buttonElem.innerHTML = html`<i class="fa fa-exclamation-triangle"></i> <slot></slot>`
      } else {
        buttonElem.innerHTML = html`<slot></slot>`
      }
    }
  }

  get icon() {
    return this.getAttribute('icon')
  }

  set icon(value) {
    this.setAttribute('icon', value)
  }
}
