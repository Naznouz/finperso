import { html, css, GfBase } from "./GfBase.js";

export class GfButton extends GfBase {
    constructor() {
        super();

        this.id = this.getAttribute("id");
        this.type = this.getAttribute("type");
        this.value = this.getAttribute("value");

        this.balise = this.type === "a" ? "a" : "button";

        this.shadowRoot.innerHTML = html`
			<link rel="stylesheet" href="./components/style/GfInput.css" />
			<${this.balise} id="${this.id}" class="btn btn-primary" value="${this.value}">
			</${this.balise}>	
		`;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;

        if (name === "value") {
            this.shadowRoot.querySelector("button").innerHTML = newValue;
        }
    }
}

customElements.define("gf-button", GfButton);
