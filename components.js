import GfSelect from './components/GfSelect.js';
import GfButton from './components/GfButton.js';
import GfListeTransactions from './components/GfListeTransactions.js';
import GfSpacer from './components/GfSpacer.js';
import GfNumberInput from './components/GfNumberInput.js';

window.customElements.define('gf-select', GfSelect);
window.customElements.define('gf-button', GfButton);
window.customElements.define('gf-liste-transactions', GfListeTransactions);
window.customElements.define('gf-spacer', GfSpacer);
window.customElements.define('gf-number-input', GfNumberInput);

// S'il s'agit d'une extension d'un élément HTML bien définie, par exemple, table
// il faut
// 1- la classe doit être come suite : class SampleComponent extend HTMLTableElement { ... }
// 2- window.customElements.define('sample-component', SampleComponent, {extends: 'table'})
// 3- Au niveau du HTML : <table is="sample-component"></table>

