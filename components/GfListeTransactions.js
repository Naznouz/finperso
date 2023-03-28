import { html, css, GfBase } from "./GfBase.js";
import { useState } from "../state.js";

export default class GfListeTransactions extends GfBase {
    constructor() {
        super();
        this.shadowRoot.innerHTML = html`
            <link rel="stylesheet" href="/components/styles/gf-liste-transactions.css" />
            <h2>Liste des transactions</h2>
            <ul></ul>
        `;
    }

    /*
  data = [
    {
      type,
      montant,
      date
    },
    ...
  ]
  */
    connectedCallback() {
        // add eventlistener on state change
        this._updateList();
    }

    _updateList() {
        const appState = useState();
        const elemListe = this.shadowRoot.querySelector("ul");
        const data = appState.state.data;
        data.forEach((transact, index) => {
            const elemItem = document.createElement("li");
            elemItem.innerHTML = html`
                <div id="typeIcon"></div>
                <div id="info">
                    <gf-spacer></gf-spacer>
                    <div id="typeLabel">${transact.type}</div>
                    <div id="date">${transact.date}</div>
                </div>
                <div id="montant">${transact.montant}</div>
                <gf-button btnIcon="<i class='fa fa-solid fa-minus'></i>"></gf-button>
            `;
            elemListe.appendChild(elemItem);
        });
    }
}
