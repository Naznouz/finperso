import { html, css, GfBase } from './GfBase.js'
import { useState } from '../state.js'

const choices = {
  alimentation: { text: "Alimentation", icon: "pizza-slice"},
  vetements: { text: "Vêtements", icon: "tshirt"},
  loisirs: {text: "Loisirs", icon: "futbol"},
  loyer: {text: "Loyer", icon: "home"},
}

export default class GfListeTransactions extends GfBase {
  constructor () {
    super()

    this.shadowRoot.innerHTML = html`
      <link
        rel="stylesheet"
        href="/components/styles/gf-liste-transactions.css"
      />
      <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
      <h2>Liste des transactions</h2>
      <ul></ul>
    `
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
  connectedCallback () {
    useState().addListener(() => this._updateList());
    // add eventlistener on state change
    this._updateList()
  }

  _updateList () {
    const appState = useState()
    const elemListe = this.shadowRoot.querySelector('ul')
    const data = appState.state.data
    elemListe.innerHTML = "";
    data.forEach((transact, index) => {
      const elemItem = document.createElement('li')
      elemItem.innerHTML = html`
        <div id="typeIcon">
        <i class="fa fa-solid fa-${choices[transact.type].icon}"></i>
        </div>
        <div id="info">
          <gf-spacer></gf-spacer>
          <div id="typeLabel">${choices[transact.type].text}</div>
          <div id="date">${transact.date}</div>
        </div>
        <div id="montant">${transact.montant} €</div>
        <gf-button icon="trash" onclick="deleteData(${index})"></gf-button>
      `
      elemListe.appendChild(elemItem)
    })
  }
}

