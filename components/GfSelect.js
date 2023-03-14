import { html, css, GfBase } from './GfBase.js';

export default class GfSelect extends GfBase {
  constructor() {
    super();

    this.shadowRoot.innerHTML = html`
    <div>
      <label for="select-${this.getAttribute('id')}">Choix</label>
      <select id="select-${this.getAttribute('id')}"></select>
    </div>
    <style>
      div {
        /*
        border: 1px solid #80808020;
        border-radius: 0.5rem;
        */
        background-color: #00808020;
        padding: 0.5rem;
        border: 1px solid;
      }
      
      label {
        display: block;
        padding-bottom: 0.5rem;
      }
    </style>
    `
  }

  connectedCallback() {
    const select = this.shadowRoot.querySelector('select');
    const options = this.children;
    select.replaceChildren(...options);
    this.replaceChildren();
  }
}
