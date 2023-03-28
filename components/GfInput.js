import { html, css, GfBase } from './GfBase.js'

export default class GfInput extends GfBase {
  constructor () {
    super()
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-input.css" />
      <div id="label"><slot name="label"></slot></div>
      <div id="input"></div>
      <div id="aide"><slot name="aide"></slot></div>
      <div id="erreur"><slot name="erreur"></slot></div>
    `
  }

  connectedCallback () {}

  disconnectCallback () {}

  observedAttributes () {
    return ['valid']
  }

  attributeChangeCallback (name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
  }
}

