class MnOption extends HTMLElement {
  constructor(self) {
    self = super(self)
    const element = this

    if (!this.hasAttribute('value')) {
      const name = this.hasAttribute('name')
        ? `[name="${this.getAttribute('name')}"]`
        : ''

      console.error(`missing value in mn-option${name}`)
    } else {
      const evaluatedValue = evaluated(this.getAttribute('value'))

      if (isObject(evaluatedValue)) {
        this.setAttribute('value', JSON.stringify(evaluatedValue))
      }
    }

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

    // custom input
    const type = this.getAttribute('type')
    const isNatural = this.classList.contains('natural')
    if (type && !isNatural) {
      const customInput = document.createElement('div')
      customInput.className = 'input'
      customInput.classList.add(type)
      label.appendChild(customInput)

      if (type === 'checkbox') {
        const vector = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        vector.setAttribute('width', '16px')
        vector.setAttribute('height', '16px')
        vector.innerHTML = `<g
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
          stroke-linecap="round"
          stroke-linejoin="round">
            <g
              transform="translate(2.000000, 3.000000)"
              stroke-width="2"
              stroke="#000000">
                <polyline
                  points="12.3825 0.581533333 3.653 10.3935333 0.273722222 6.7386"></polyline>
            </g>
        </g>`
        customInput.appendChild(vector)
      }
    } else {
      const background = document.createElement('div')
      background.classList.add('background')
      label.appendChild(background)
    }

    // placeholder text
    const placeholderText = document.createElement('span')
    placeholderText.classList.add('text')
    placeholderText.textContent = this.getAttribute('placeholder') || this.getAttribute('value')
    label.appendChild(placeholderText)

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

      // element.value = input.value
      // console.log('change')
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

  get value() {
    const form = this.closest('form') || document
    const name = this.getAttribute('name')
      ? `[name="${this.getAttribute('name')}"]`
      : ':not([name])'
    const options = form.querySelectorAll(`mn-option${name}`)
    const type = this.getAttribute('type')

    const value = Array
      .from(options)
      .map(item => item.querySelector('input'))
      .filter(item => item.checked)
      .map(item => evaluated(item.value))

    const isRadio = type === 'radio'
    const isSingleOption = options.length === 1
    const isBoolean = typeof evaluated(options[0].getAttribute('value')) === 'boolean'

    return isRadio || (isSingleOption && isBoolean)
      ? isSingleOption && isBoolean
        ? Boolean(value[0])
        : value[0]
      : value
  }

  set value(value) {
    const form = this.closest('form') || document
    const name = this.getAttribute('name')
      ? `[name="${this.getAttribute('name')}"]`
      : ':not([name])'
    const options = form.querySelectorAll(`mn-option${name}`)
    const type = options[0].getAttribute('type')
    const values = Array.isArray(value)
      ? value
      : [value]

    Array
      .from(options)
      .forEach(option => {
        option.checked = false
      })

    if (type === 'radio') {
      const value = values[0]
      const stringifiedValue = typeof value === 'string'
        ? value.replace(/"/g, '\\"')
        : JSON.stringify(value).replace(/"/g, '\\"')

      // console.log('try', `mn-option${name}[value="${stringifiedValue}"]`)
      const option = form.querySelector(`mn-option${name}[value="${stringifiedValue}"]`)
      if (option) {
        option.checked = true
      } else {
        setById(value)
      }
    } else {
      values
        .forEach(value => {
          const stringifiedValue = typeof value === 'string'
            ? value.replace(/"/g, '\\"')
            : JSON.stringify(value).replace(/"/g, '\\"')

          const option = form.querySelector(`mn-option${name}[value="${stringifiedValue}"]`)
          if (option) {
            option.checked = true
          } else {
            setById(value)
            console.error(`${JSON.stringify(value)} is a invalid value to mn-option${name}`)
          }
        })
    }

    function setById(value) {
      value = evaluated(value)
      try {
        let options = form.querySelectorAll(`mn-option${name}`)
        // let mnOption =

        options = Array
          .from(options)
          .filter(option => {
            const evaluatedValue = evaluated(option.getAttribute('value'))
            const id = value.id || value._id
            const idEqual = id
              && (
                id === evaluatedValue.id
                || id === evaluatedValue._id
              )

            return idEqual
          })

        if (options.length) {
          options[0].classList.add('checked')
          options[0].querySelector('input').checked = true
        } else {
          console.error(`${JSON.stringify(value)} is a invalid value to mn-option${name}`)
        }

      } catch (e) {
        console.error(`${JSON.stringify(value)} is a invalid value to mn-option${name}`)
      }
      // console.error(`${JSON.stringify(value)} is a invalid value to mn-option${name}`)
    }
  }

  get checked() {
    return this.hasAttribute('checked')
  }

  set checked(checked) {
    if (checked) {
      this.setAttribute('checked', 'true')
      this.classList.add('checked')
    } else {
      this.removeAttribute('checked')
      this.classList.remove('checked')
    }

    this.querySelector('input').checked = checked
  }
}

function evaluated(value) {
  try {
    const isVariable = !value.startsWith('[')
      && !value.startsWith('{')
      && !value.startsWith('\'')
      && !value.startsWith('"')
      && !value.startsWith('`')
      && value !== 'true'
      && value !== 'false'
      && isNaN(value)

    return isVariable
        ? eval(`'${value}'`) // convert to string
        : eval(`(${value})`) // evaluate
  } catch (e) {
    return value
  }
}

function isObject(obj) {
  return obj !== null
    && typeof obj === 'object'
    && !Array.isArray(obj)
}

window.customElements.define('mn-option', MnOption)
window.MnOption = MnOption
