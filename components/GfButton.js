import { html, css, GfBase } from './GfBase.js'

export default class GfButton extends GfBase {
  constructor() {
    super()

    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="/components/styles/gf-button.css" />
      <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
      <button><slot></slot></button>
    `
  }

  static get observedAttributes () {
    return ['icon'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'icon') {
      const buttonElem = this.shadowRoot.querySelector('button');
      let iconElem = buttonElem.querySelector('i');
      if (iconElem) {
        iconElem.classList.remove("fa-" + oldValue);
        iconElem.classList.add("fa-" + newValue);
      } else {
        iconElem = document.createElement('i');
        iconElem.classList.add("fa");
        iconElem.classList.add("fa-solid");
        iconElem.classList.add("fa-" + newValue);
        buttonElem.prepend(iconElem);
      }
    }
  }

  get icon () {
    return this.getAttribute('icon');
  }

  set icon(value) {
    this.setAttribute('icon', value);
  }
}
