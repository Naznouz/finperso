export const html = (strings, ...values) => String.raw({ raw: strings }, ...values);
export const css = (strings, ...values) => String.raw({ raw: strings }, ...values);

export class GfBase extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "borderColor") {
            console.log(newValue);
            this.borderColor = newValue;
        }
    }

    get borderColor() {
        return this.getAttribute("borderColor");
    }

    set borderColor(value) {
        this.setAttribute("borderColor", value);
        this.style.borderColor = value;
    }
}
