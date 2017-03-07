class MnOption extends HTMLElement {
  constructor(self) {
    self = super(self)
    const element = this

    const inputAttributes = [
      {
        name: 'type',
        // default: 'radio',
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
      {
        name: 'id',
      },
    ]

    const label = document.createElement('label')

    // input element
    const input = document.createElement('input')
    inputAttributes.map(setInputAttribute)
    this.removeAttribute('id')
    label.appendChild(input)

    this.addEventListener('mouseleave', () => {
      input.blur()
    })

    const radio = document.createElement('div')
    radio.className = 'input'
    const type = this.getAttribute('type')
    radio.classList.add(type)
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

window.customElements.define('mn-option', MnOption)
window.MnOption = MnOption
