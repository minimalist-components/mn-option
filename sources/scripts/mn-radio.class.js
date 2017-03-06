class MnRadio extends HTMLElement {
  constructor(self) {
    self = super(self)
    let element = this

    let inputAttributes = [
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

    // label element
    let labelText = element.getAttribute('label')
    let label = document.createElement('label')
    let text = document.createElement('span')
    if (labelText) {
      text.textContent = element.getAttribute('disabled')
        ? `${labelText} disabled`
        : labelText
    }
    label.appendChild(text)

    // input element
    let input = document.createElement('input')
    inputAttributes.map(setInputAttribute)
    label.appendChild(input)

    let radio = document.createElement('div')
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
