import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import {Selector} from 'testcafe'
import demo from '../../test/e2e/demo/demo.po.js'

chai.use(chaiAsPromised)

fixture `type radio`
  .page('http://localhost:8080/docs/demo.html')

  test('value is a undefined by default', async page => {
    const {radioList} = demo.radio

    await expect(radioList.value).to.eventually.be.undefined
    await expect(radioList.hasClass('checked')).to.eventually.be.false
  })

  test('change value by click', async page => {
    const {optionStark, optionLannister} = demo.radio

    await page.click(optionStark.find('label'))
    await expect(optionStark.value).to.eventually.be.equal('stark')
    await expect(optionStark.hasClass('checked')).to.eventually.be.true
    await expect(optionLannister.hasClass('checked')).to.eventually.be.false

    await page.click(optionLannister.find('label'))
    await expect(optionStark.value).to.eventually.be.equal('lannister')
    await expect(optionStark.hasClass('checked')).to.eventually.be.false
    await expect(optionLannister.hasClass('checked')).to.eventually.be.true
  })

fixture `type checkbox`
  .page('http://localhost:8080/docs/demo.html')

  test('value is an array by default', async () => {
    const {checkboxList} = demo.checkbox

    await expect(checkboxList.value).to.eventually.be.an('array')
    await expect(checkboxList.value).to.eventually.be.empty
  })

  test('change value by click', async page => {
    const {optionNed, optionDaenerys} = demo.checkbox

    await page.click(optionNed.find('label'))
    await expect(optionNed.value).to.eventually.deep.equal(['ned'])
    await expect(optionNed.hasClass('checked')).to.eventually.be.true
    await expect(optionDaenerys.hasClass('checked')).to.eventually.be.false

    await page.click(optionDaenerys.find('label'))
    await expect(optionNed.value).to.eventually.deep.equal(['ned', 'daenerys'])
    await expect(optionNed.hasClass('checked')).to.eventually.be.true
    await expect(optionDaenerys.hasClass('checked')).to.eventually.be.true
  })


