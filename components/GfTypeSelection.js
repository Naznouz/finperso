import { html, css } from './GfBase.js'
import GfInput from './GfInput.js'

export default class GfTypeSelection extends GfInput {
  static tag = 'gf-type-selection'
  constructor () {
    super()
  }

  connectedCallback () {
    const inputElem = this.shadowRoot.querySelector('#input')
    inputElem.innerHTML = html` <select name="type" id="type"></select> `

    const selectElem = inputElem.querySelector('select')
    const optionsElem = this.querySelectorAll('option')
    optionsElem.forEach((option) => {
      selectElem.appendChild(option)
    })

    selectElem.addEventListener('change', (e) => {
      this.setAttribute('value', e.target.value)
    })
  }
}
