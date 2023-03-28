import { html, css, GfBase } from "./GfBase.js";

export default class GfFormCard extends GfBase {
    static tag = "gf-form-card";

    constructor() {
        super();

        this.shadowRoot.innerHTML = html`
            <link rel="stylesheet" href="/components/styles/gf-form-card.css" />
            <div class="gf-form-card">
                <div class="button">
                    <gf-button slot="button" btnIcon="<i class='fa fa-solid fa-plus'></i>"></gf-button>
                </div>
                <div class="content">
                    <div class="inner">
                        <slot></slot>
                    </div>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        const button = this.shadowRoot.querySelector(".button");

        button.addEventListener("click", () => {
            this.toggleContent();
        });
    }

    toggleContent() {
        const content = this.shadowRoot.querySelector(".content");
        content.classList.toggle("active");
    }
}
