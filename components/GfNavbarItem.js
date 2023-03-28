import { html, css, GfBase } from "./GfBase.js";

export default class GfNavbarItem extends GfBase {
    static tag = "gf-navbar-item";

    constructor() {
        super();

        this.shadowRoot.innerHTML = html`
            <link rel="stylesheet" href="/components/styles/gf-navbar-item.css" />
            <li>
                <a href="${this.getAttribute("href")}"> <slot></slot> </a>
            </li>
        `;
    }
}
