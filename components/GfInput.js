import { html, css, GfBase } from "./GfBase.js";

export default class GfInput extends GfBase {
    constructor() {
        super();

        // Variables :
        this.id = this.getAttribute("id");
        this.type = this.getAttribute("type");
        this.label = this.getAttribute("label");
        this.value = this.getAttribute("value");
        this.placeholder = this.getAttribute("placeholder");

        this.shadowRoot.innerHTML = html`
            <link rel="stylesheet" href="./style/components/GfInput.css" />
            <div class="gf-input">
                <label for="input-${this.id}">${this.label}</label>
                <input
                    id="input-${this.id}"
                    type="${this.type}"
                    ${this.type === "number" ? "min='0'" : ""}
                    ${this.placeholder !== null ? `placeholder="${this.placeholder}"` : ""}
                    ${this.value !== null ? `value="${this.value}"` : ""}
                />
            </div>
        `;
    }
}

customElements.define("gf-input", GfInput);
