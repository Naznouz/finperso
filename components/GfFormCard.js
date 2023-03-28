import { html, css, GfBase } from './GfBase.js'

export default class GfFormCard extends GfBase {
  constructor() {
    super()

    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-form-card.css" />
      <div class="card">
        <gf-button onclick="this.getRootNode().host.open();" icon="plus"></gf-button>
        <form>
          <slot></slot>
        </form>
      </div>
    `
  }

  open () {
    const formElem = this.shadowRoot.querySelector('form');
    const buttonElem = this.shadowRoot.querySelector('gf-button');

    if (formElem.classList.contains('reveal')){
      formElem.classList.remove('reveal');
      buttonElem.icon = "plus";
      return;
    }

    formElem.classList.add('reveal');
    buttonElem.icon = "minus";
  }

  get icon () {
    return this.getAttribute('icon');
  }
}
