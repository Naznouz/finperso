import { html, css } from './GfBase.js';
import GfInput from './GfInput.js';

export default class GfDateSelection extends GfInput {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML += html`
    <div slot="input">
      <input
        type="date"
        name="${this.name}"
        value="${this.value}"
      />
    </div>
    `;
  }

  observedAttributes() {
    return ['name', 'value'];
  }

  attributeChangeCallback(name, oldValue, newValue) {
    console.log("Attribute change:", name, oldValue, newValue)
  }

  get label() {
    return this.getAttribute("label");
  }

  set label(val) {
    this.label = this.setAttribute("label", val)
  }

  get name() {
    const n = this.getAttribute("name");
    return !n ? `date-${('' + Math.floor(Math.random() * 10000)).padStart(5, '0')}` : n;
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