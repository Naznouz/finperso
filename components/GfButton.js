import { html, css, GfBase } from "./GfBase.js";

export default class GfButton extends GfBase {
    static tag = "gf-button";

    constructor() {
        super();

        const btnText = this.getAttribute("btnText");
        const btnIcon = this.getAttribute("btnIcon");
        const classes = btnText && btnIcon ? "icon-text" : btnIcon ? "icon" : "";

        this.shadowRoot.innerHTML = html`
            <link rel="stylesheet" href="/components/styles/gf-button.css" />
            <button class="${classes}">
                ${btnIcon ? html`<span class="icon">${btnIcon}</span>` : ""} ${btnText ? html`<span class="text">${btnText}</span>` : ""}
            </button>
        `;
    }
}
