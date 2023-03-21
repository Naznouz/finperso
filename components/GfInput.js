import {html, css, GfBase} from './GfBase.js';

export default class GfInput extends GfBase {
  constructor() {
    super();
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-input.css">
      <slot name="label"></slot>
      <slot name="input"></slot>
      <slot name="aide"></slot>
      <slot name="erreur"></slot>
    `;
  }

  connectedCallback() {
    
  }

  disconnectCallback() {
    
  }

  observedAttributes() {
    return ['valid'];
  }

  attributeChangeCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue);
  }
}