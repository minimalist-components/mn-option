import {Selector} from 'testcafe'

module.exports = new PageObject()

function PageObject(page) {
  const radioList = Selector('mn-option[name="list"]')
  const optionStark = Selector('mn-option[name="list"][value="stark"]')
  const optionLannister = Selector('mn-option[name="list"][value="lannister"]')

  const radio = {
    radioList,
    optionStark,
    optionLannister,
  }

  const checkboxList = Selector('mn-option[name="list2"]')
  const optionNed = Selector('mn-option[name="list2"][value="ned"]')
  const optionDaenerys = Selector('mn-option[name="list2"][value="daenerys"]')

  const checkbox = {
    checkboxList,
    optionNed,
    optionDaenerys,
  }

  return {
    radio,
    checkbox,
  }
}
