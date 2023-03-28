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

  static get observedAttributes () {
    return ['valid', 'name', 'value']
  }

  attributeChangedCallback (name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
  }

  get name () {
    const n = this.getAttribute('name')
    return !n
      ? `number-${('' + Math.floor(Math.random() * 10000)).padStart(5, '0')}`
      : n
  }

  set name (val) {
    this.name = this.setAttribute('name', val)
  }

  get value () {
    return this.getAttribute('value')
  }

  set value (val) {
    this.name = this.setAttribute('value', val)
  }
}
