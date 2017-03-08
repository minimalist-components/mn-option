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
    const isNatural = this.classList.contains('natural')
    if (type && !isNatural) {
      const customInput = document.createElement('div')
      customInput.className = 'input'
      customInput.classList.add(type)
      label.appendChild(customInput)
    } else {
      const background = document.createElement('div')
      background.classList.add('background')
      label.appendChild(background)
    }

    if (input.checked) {
      this.classList.add('checked')
    }

    input.addEventListener('change', () => {
      if (input.getAttribute('type') === 'radio') {
        const name = input.getAttribute('name')
        const lastChecked = document.querySelector(`mn-option.checked[name="${name}"]`)
        if (lastChecked) {
          lastChecked.classList.remove('checked')
        }
      }

      input.checked
        ? this.classList.add('checked')
        : this.classList.remove('checked')
    })

    element.appendChild(label)

    return self

    function setInputAttribute(attribute) {
      const isDefaultAttribute = attribute.hasOwnProperty('default')
      const attributeValue = element.getAttribute(attribute.name)

      if (isDefaultAttribute) {
        const isValidValue = attribute.hasOwnProperty('values')
          && attribute.values.indexOf(attributeValue) >= 0

        const value = isValidValue
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
