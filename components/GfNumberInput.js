import { html, css } from './GfBase.js'
import GfInput from './GfInput.js'

export default class GfNumberInput extends GfInput {
  constructor () {
    super()
  }

  connectedCallback () {
    const inputHostElem = this.shadowRoot.querySelector('#input')
    inputHostElem.innerHTML = html`
      <input
        type="number"
        name="${this.name}"
        value="${this.value}"
        min="0"
        step="any"
      />
      EUR
    `

    const inputElem = inputHostElem.querySelector('input')
    inputElem.addEventListener('input', (e) => {
      this.setAttribute('value', e.target.value)
    })

    inputElem.addEventListener('focus', (e) => {
      console.log('focused 1')
      this.shadowRoot.querySelector("slot[name='aide']").style.visibility =
        'visible'
    })

    inputElem.addEventListener('blur', (e) => {
      console.log('blurred 1')
      this.shadowRoot.querySelector("slot[name='aide']").style.visibility =
        'hidden'
    })

    const event = new Event((e) => {
      console.log('focused 2')
      this.shadowRoot.querySelector("slot[name='aide']").style.visibility =
        'visible'
    })
    inputHostElem.addEventListener('focus', (e) => {
      e.dispatchEvent(event)
    })
  }

  static get observedAttributes () {
    return super.observedAttributes.concat(['label'])
  }

  attributeChangedCallback (name, oldValue, newValue) {
    // pass
  }

  get label () {
    return this.getAttribute('label')
  }

  set label (val) {
    this.label = this.setAttribute('label', val)
  }

  get value () {
    const v = this.getAttribute('value')
    return !v ? 0 : Math.round(v * 100) / 100
  }
}
