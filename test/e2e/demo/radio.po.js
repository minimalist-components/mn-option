import {Selector} from 'testcafe'

module.exports = PageObject

function PageObject(page) {
  const url = 'http://localhost:8080/docs/demo.html'
  const radioList = Selector('mn-option[name="list"]')
  const optionStark = Selector('mn-option[name="list"][value="stark"]')
  const optionLannister = Selector('mn-option[name="list"][value="lannister"]')

  return {
    radioList,

    option,
    clickOnOptionWithValue,
  }

  function option(value) {
    const option = Selector(`mn-option[name="list"][value="${value}"]`)
    return option
  }

  async function clickOnOptionWithValue(value) {
    const option = await Selector(`mn-option[name="list"][value="${value}"]`)
    await page.click(optionStark.find('label'))
  }
}
