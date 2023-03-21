import { html, css } from './GfBase.js';
import GfInput from './GfInput.js';

export default class GfNumberInput extends GfInput {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML += html`
    <div slot="input">
      <input
        type="number"
        name="${this.name}"
        value="${this.value}"
        min="0"
        step="any"
      /> EUR
    </div>
    `;
    const inputElem = this.shadowRoot;
    const event = new Event((e) => {
      console.log('focused');
      this.shadowRoot.querySelector("slot[name='aide']").style.visibility = "visible";
    });
    inputElem.addEventListener('focus', (e) => {e.dispatchEvent(event)});
  }

  observedAttributes() {
    return ["label", "name", "value"];
  }

  attributeChangeCallback(name, oldValue, newValue) {
    console.log("Attribute change:", name, oldVaue, newValue)
  }

  get label() {
    return this.getAttribute("label");
  }

  set label(val) {
    this.label = this.setAttribute("label", val)
  }

  get name() {
    const n = this.getAttribute("name");
    return !n ? `number-${('' + Math.floor(Math.random() * 10000)).padStart(5, '0')}` : n;
  }

  set name(val) {
    this.name = this.setAttribute("name", val);
  }

  get value() {
    const v = this.getAttribute("value");
    return !v ? 0 : Math.round(v * 100) / 100;
  }

  set value(val) {
    this.name = this.setAttribute("value", val);
  }
}