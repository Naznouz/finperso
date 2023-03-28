import GfSelect from "./components/GfSelect.js";
import GfButton from "./components/GfButton.js";
import GfFormCard from "./components/GfFormCard.js";
import GfNavBar from "./components/GfNavBar.js";
import GfNavbarItem from "./components/GfNavbarItem.js";
import GfListeTransactions from "./components/GfListeTransactions.js";
import GfSpacer from "./components/GfSpacer.js";
import GfNumberInput from "./components/GfNumberInput.js";
import GfTypeSelection from "./components/GfTypeSelection.js";
import { State, useState } from "./state.js";

window.customElements.define(GfTypeSelection.tag, GfTypeSelection);
window.customElements.define(GfButton.tag, GfButton);
window.customElements.define(GfFormCard.tag, GfFormCard);
window.customElements.define(GfNavBar.tag, GfNavBar);
window.customElements.define(GfNavbarItem.tag, GfNavbarItem);
window.customElements.define("gf-liste-transactions", GfListeTransactions);
window.customElements.define("gf-spacer", GfSpacer);
window.customElements.define("gf-number-input", GfNumberInput);
window.State = State;
window.useState = useState;

const appState = useState();

window.afficheData = function () {
    const data = appState.state.data;
    const tbodyElem = document.querySelector("#depenses > tbody");
    tbodyElem.innerHTML = "";

    data.forEach((depense, index) => {
        tbodyElem.appendChild(rowFrom(depense, index));
    });
};

window.initData = function () {
    const data = appState.state.data;
    if (!data) {
        appState.state.data = [];
    }
    afficheData();
    return data;
};

initData();

// S'il s'agit d'une extension d'un élément HTML bien définie, par exemple, table
// il faut
// 1- la classe doit être come suite : class SampleComponent extend HTMLTableElement { ... }
// 2- window.customElements.define('sample-component', SampleComponent, {extends: 'table'})
// 3- Au niveau du HTML : <table is="sample-component"></table>
