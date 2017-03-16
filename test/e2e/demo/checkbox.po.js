import {Selector} from 'testcafe'

module.exports = new PageObject()

function PageObject() {
  const checkboxList = Selector('mn-option[name="list2"]')
  const optionNed = Selector('mn-option[name="list2"][value="ned"]')
  const optionDaenerys = Selector('mn-option[name="list2"][value="daenerys"]')

  return {
    checkboxList,
    optionNed,
    optionDaenerys,
  }
}
