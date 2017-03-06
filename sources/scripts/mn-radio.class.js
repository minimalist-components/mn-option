class MnRadio extends HTMLElement {
  constructor(self) {
    self = super(self)
    const element = this

    const inputAttributes = [
      {
        name: 'type',
        default: 'radio',
      },
      {
        name: 'name',
      },
      {
        name: 'autofocus',
      },
      {
        name: 'checked',
      },
      {
        name: 'disabled',
      },
      {
        name: 'value',
      },
    ]

    const label = document.createElement('label')

    // input element
    const input = document.createElement('input')
    inputAttributes.map(setInputAttribute)
    label.appendChild(input)

    const radio = document.createElement('div')
    radio.className = 'radio'
    label.appendChild(radio)
    element.appendChild(label)

    return self

    function setInputAttribute(attribute) {
      let isDefaultAttribute = attribute.hasOwnProperty('default')
      let attributeValue = element.getAttribute(attribute.name)

      if (isDefaultAttribute) {
        let isValidValue = attribute.hasOwnProperty('values')
          && attribute.values.indexOf(attributeValue) >= 0

        let value = isValidValue
          ? attributeValue
          : attribute.default

        input.setAttribute(attribute.name, value)
      } else if (attributeValue) {
        input.setAttribute(attribute.name, attributeValue)
      }
    }
  }
}

window.customElements.define('mn-radio', MnRadio)
window.MnRadio = MnRadio
