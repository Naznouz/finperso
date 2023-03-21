export const html = (strings, ...values) =>
  String.raw({ raw: strings }, ...values)
export const css = (strings, ...values) =>
  String.raw({ raw: strings }, ...values)
export const GfTheme = new CSSStyleSheet().replaceSync(css`
  :root {
    --gf-primary: #3b46f1;
    --gf-secondary: #fdc92e;
    --gf-tertiary: #9b9eb2;
    --gf-main: #161616;
    --gf-surface: #fafafa;
    --gf-background: #f5f5f5;
    --gf-on-primary: #ffffff;
    --gf-on-secondary: #161616;
    --gf-on-tertiary: #161616;
  }
`)

export class GfBase extends HTMLElement {
  constructor () {
    super()
    const shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallBack () {}

  disconnectedCallback () {}

  attributeChangedCallback (name, oldValue, newValue) {
    if (name === 'borderColor') {
      console.log(newValue)
      this.shadowRoot.style.borderColor = newValue
    }
  }

  get borderColor () {
    return this.getAttribute('borderColor')
  }

  set borderColor (value) {
    this.setAttribute('borderColor', value)
    this.style.borderColor = value
  }
}
