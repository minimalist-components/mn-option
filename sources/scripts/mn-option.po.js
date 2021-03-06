import {Selector as querySelector} from 'testcafe'

module.exports = PageObject

function PageObject(name, page) {
  const options = querySelector(`mn-option[name="${name}"]`)

  return {
    options,

    option,
    clickOnOptionWithValue,
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
