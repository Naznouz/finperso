import { html, css, GfBase } from "./GfBase.js";

export default class GfFormCard extends GfBase {
  constructor() {
    super();
    this.shadowRoot.innerHTML = html`
      <link rel="stylesheet" href="./components/styles/gf-form-card.css" />
      <form id="form-card">
        <h2>Formulaire</h2>
        <label for="name">Nom :</label>
        <input type="text" id="name" name="name" /><br /><br />
        <label for="email">Email :</label>
        <input type="email" id="email" name="email" /><br /><br />
        <label for="card">Card</label>
        <input type="card" id="card" name="card" /><br /><br />
        <gf-button-card>Envoyer</gf-button-card>
      </form>
    `;
  }
}
