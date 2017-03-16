import {Selector} from 'testcafe'

module.exports = new PageObject()

function PageObject() {
  const url = 'http://localhost:8080/docs/demo.html'

  return {url}
}
