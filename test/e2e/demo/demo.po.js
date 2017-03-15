import {Selector} from 'testcafe'

module.exports = new PageObject()

function PageObject(page) {
  const radioList = Selector('mn-option[name="list"]')
  const optionStark = Selector('mn-option[name="list"][value="stark"]')
  const optionLannister = Selector('mn-option[name="list"][value="lannister"]')

  return {
    radioList,
    optionStark,
    optionLannister,
  }
}
