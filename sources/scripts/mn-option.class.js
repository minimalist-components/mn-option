class MnOption extends HTMLElement {
  constructor(self) {
    self = super(self)
    const element = this

    const inputAttributes = [
      {
        name: 'type',
        values: ['radio', 'checkbox'],
        default: 'checkbox',
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

    const type = this.getAttribute('type')
    if (type) {
      const customInput = document.createElement('div')
      customInput.className = 'input'
      customInput.classList.add(type)
      label.appendChild(customInput)
    } else {
      const background = document.createElement('div')
      background.classList.add('background')
      background.textContent = this.getAttribute('placeholder')
      label.appendChild(background)
    }

    element.appendChild(label)

    return self

    function setInputAttribute(attribute) {
      const isDefaultAttribute = attribute.hasOwnProperty('default')
      const attributeValue = element.getAttribute(attribute.name)

      console.log(attribute.name, isDefaultAttribute)

      if (isDefaultAttribute) {
        const isValidValue = attribute.hasOwnProperty('values')
          && attribute.values.indexOf(attributeValue) >= 0

        const value = isValidValue
          ? attributeValue
          : attribute.default
        console.log(value)

        input.setAttribute(attribute.name, value)
      } else if (attributeValue) {
        input.setAttribute(attribute.name, attributeValue)
      }
    }
  }
}

window.customElements.define('mn-option', MnOption)
window.MnOption = MnOption
