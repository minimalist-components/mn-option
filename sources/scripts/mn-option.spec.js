import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import chaiDom from 'chai-dom'
import {Selector} from 'testcafe'
import demo from '../../test/e2e/demo/demo.po.js'

chai
  .use(chaiDom)
  .use(chaiAsPromised)

fixture `type radio`
  .page(demo.url)

  test('value is a undefined by default', async page => {
    const {radioList} = demo.radio

    await expect(radioList.value).to.be.eventually.undefined
    await expect(radioList.hasClass('checked')).to.be.eventually.false
  })

  test('change value by click', async page => {
    const {optionStark, optionLannister} = demo.radio

    await page.click(optionStark.find('label'))
    await expect(optionStark.value).to.be.eventually.equal('stark')
    await expect(optionStark.hasClass('checked')).to.be.eventually.true
    await expect(optionLannister.hasClass('checked')).to.be.eventually.false

    await page.click(optionLannister.find('label'))
    await expect(optionStark.value).to.be.eventually.equal('lannister')
    await expect(optionStark.hasClass('checked')).to.be.eventually.false
    await expect(optionLannister.hasClass('checked')).to.be.eventually.true
  })

fixture `type checkbox`
  .page(demo.url)

  test('value is an array by default', async () => {
    const {checkboxList} = demo.checkbox

    await expect(checkboxList.value).to.be.eventually.an('array')
    await expect(checkboxList.value).to.have.eventually.lengthOf(0)
    // await expect(checkboxList.value).to.be.eventually.empty
  })

  test('change value by click', async page => {
    const {optionNed, optionDaenerys} = demo.checkbox

    await page.click(optionNed.find('label'))
    await expect(optionNed.value).to.deep.eventually.equal(['ned'])
    await expect(optionNed.hasClass('checked')).to.be.eventually.true
    await expect(optionDaenerys.hasClass('checked')).to.be.eventually.false

    await page.click(optionDaenerys.find('label'))
    await expect(optionNed.value).to.deep.eventually.equal(['ned', 'daenerys'])
    await expect(optionNed.hasClass('checked')).to.be.eventually.true
    await expect(optionDaenerys.hasClass('checked')).to.be.eventually.true
  })


