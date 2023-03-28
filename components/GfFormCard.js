import { html, css, GfBase } from './GfBase.js'

export default class GfFormCard extends GfBase {
    static tag = 'gf-form-card'
    constructor () {
        super()
        this.shadowRoot.innerHTML = html`
        <link rel="stylesheet" href="/components/styles/gf-form-card.css" />
        <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <details class="description">
        <summary>
            <i class="fa fa-solid fa-plus closed"></i> 
            <i class="fa fa-solid fa-minus opened"></i>
        </summary>
            <form>
                <slot></slot>
            </form>
        </details>
        `
    }
}