import { html, GfBase } from './GfBase.js'

export default class GfFormCard extends GfBase {
    static get observedAttributes() {
        return ['expanded'];
    }

    constructor() {
        super()

        this.shadowRoot.innerHTML = html`
        <link rel="stylesheet" href="/components/styles/gf-form-card.css" />
        <gf-button class="toggle-button" icon="plus"></gf-button>
        <div class="card-body">
            <slot></slot>
        </div>
    `
        this.toggleButton = this.shadowRoot.querySelector('.toggle-button');
        this.toggleButton.addEventListener('click', this.toggleExpanded.bind(this));
    }
    toggleExpanded() {
        console.log('toggleExpanded');
        const currentExpanded = this.getAttribute('expanded') === 'true';
        this.setAttribute('expanded', String(!currentExpanded));
    }

    connectedCallback() {
        if (!this.hasAttribute('expanded')) {
            this.setAttribute('expanded', 'true');
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'expanded' && oldValue !== newValue) {
            if (newValue === 'true') {
                this.toggleButton.setAttribute('icon', 'minus');
                this.shadowRoot.querySelector('.card-body').style.display = 'block';
            } else {
                this.toggleButton.setAttribute('icon', 'plus');
                this.shadowRoot.querySelector('.card-body').style.display = 'none';
            }
        }
    }


}

