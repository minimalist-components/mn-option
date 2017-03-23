import {Selector as querySelector} from 'testcafe'

import {ClientFunction} from 'testcafe'
import jsdom from 'jsdom'

module.exports = PageObject

function PageObject(name, page) {
  const options = querySelector(`mn-option[name="${name}"]`)

  return {
    options,

    option,
    clickOnOptionWithValue,
    html,
  }

  async function html() {
    console.log(jsdom.defaultDocumentFeatures)
    const markup = await ClientFunction(() => document.documentElement.outerHTML)()
    global.document = jsdom.jsdom(markup)
    global.window = document.defaultView
    return markup

  }

  function option(value) {
    const option = querySelector(`mn-option[name="${name}"][value="${value}"]`)
    return option
  }

  async function clickOnOptionWithValue(value) {
    const option = await querySelector(`mn-option[name="${name}"][value="${value}"]`)
    await page.click(option.find('label'))
  }
}
