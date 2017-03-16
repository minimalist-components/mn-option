import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiDom from 'chai-dom'
import {Selector} from 'testcafe'
import MnOptionPageObject from './mn-option.po.js'

chai
  .use(chaiDom)
  .use(chaiAsPromised)

let radio
let checkbox

fixture `type radio`
  .page('http://localhost:8080/docs/demo.html')
  .beforeEach(page => {
    radio = new MnOptionPageObject('list', page)
  })

  test('value is a undefined by default', async page => {
    await expect(radio.options.value).to.be.eventually.undefined
    await expect(radio.options.hasClass('checked')).to.be.eventually.false
  })

  test('change value by click', async page => {
    await radio.clickOnOptionWithValue('stark')
    await expect(radio.options.value).to.be.eventually.equal('stark')
    await expect(radio.option('stark').hasClass('checked')).to.be.eventually.true
    await expect(radio.option('lannister').hasClass('checked')).to.be.eventually.false

    await radio.clickOnOptionWithValue('lannister')
    await expect(radio.options.value).to.be.eventually.equal('lannister')
    await expect(radio.option('stark').hasClass('checked')).to.be.eventually.false
    await expect(radio.option('lannister').hasClass('checked')).to.be.eventually.true
  })

fixture `type checkbox`
  .page('http://localhost:8080/docs/demo.html')
  .beforeEach(page => {
    checkbox = new MnOptionPageObject('list2', page)
  })

  test('value is an array by default', async () => {
    await expect(checkbox.options.value).to.be.eventually.an('array')
    await expect(checkbox.options.value).to.have.eventually.lengthOf(0)
    // await expect(checkboxList.value).to.be.eventually.empty
  })

  test('change value by click', async page => {
    await checkbox.clickOnOptionWithValue('ned')
    await expect(checkbox.options.value).to.deep.eventually.equal(['ned'])
    await expect(checkbox.option('ned').hasClass('checked')).to.be.eventually.true
    await expect(checkbox.option('daenerys').hasClass('checked')).to.be.eventually.false

    await checkbox.clickOnOptionWithValue('daenerys')
    await expect(checkbox.options.value).to.deep.eventually.equal(['ned', 'daenerys'])
    await expect(checkbox.option('ned').hasClass('checked')).to.be.eventually.true
    await expect(checkbox.option('daenerys').hasClass('checked')).to.be.eventually.true
  })


