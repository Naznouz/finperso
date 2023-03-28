import { html, css, GfBase } from "./GfBase.js";

export default class GfNavBar extends GfBase {
    static tag = "gf-navbar";

    constructor() {
        super();

        this.shadowRoot.innerHTML = html`
            <link rel="stylesheet" href="/components/styles/gf-navbar.css" />
            <nav>
                <ul>
                    <slot></slot>
                </ul>
            </nav>
        `;
    }
}
