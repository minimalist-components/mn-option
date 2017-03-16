import {Selector} from 'testcafe'

module.exports = PageObject

function PageObject(name, page) {
  const options = Selector(`mn-option[name="${name}"]`)

  return {
    options,

    option,
    clickOnOptionWithValue,
  }

  function option(value) {
    const option = Selector(`mn-option[name="${name}"][value="${value}"]`)
    return option
  }

  async function clickOnOptionWithValue(value) {
    const option = await Selector(`mn-option[name="${name}"][value="${value}"]`)
    await page.click(option.find('label'))
  }
}
