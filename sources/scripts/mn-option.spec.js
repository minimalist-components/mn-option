import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import {Selector} from 'testcafe'

chai.use(chaiAsPromised)

fixture `type radio`
  .page('http://localhost:8080/docs/demo.html')

  test('value is a undefined by default', async page => {
    const radio = await Selector('mn-option[name="list"]')
    await expect(radio.value).to.eventually.be.undefined
    await expect(radio.hasClass('checked')).to.eventually.be.false
  })

  test('change value by click', async page => {
    const stark = await Selector('mn-option[name="list"][value="stark"]')
    const lannister = await Selector('mn-option[name="list"][value="lannister"]')

    await page.click(stark.find('label'))
    await expect(stark.value).to.eventually.be.equal('stark')
    await expect(stark.hasClass('checked')).to.eventually.be.true
    await expect(lannister.hasClass('checked')).to.eventually.be.false

    await page.click(lannister.find('label'))
    await expect(stark.value).to.eventually.be.equal('lannister')
    await expect(stark.hasClass('checked')).to.eventually.be.false
    await expect(lannister.hasClass('checked')).to.eventually.be.true
  })

fixture `type checkbox`
  .page('http://localhost:8080/docs/demo.html')

  test('value is an array by default', async () => {
    const list2 = await Selector('mn-option[name="list2"]')
    await expect(list2.value).to.eventually.be.an('array')
    await expect(list2.value).to.eventually.be.empty
  })

  test('change value by click', async page => {
    const ned = await Selector('mn-option[name="list2"][value="ned"]')
    const daenerys = await Selector('mn-option[name="list2"][value="daenerys"]')

    await page.click(ned.find('label'))
    await expect(ned.value).to.eventually.deep.equal(['ned'])
    await expect(ned.hasClass('checked')).to.eventually.be.true
    await expect(daenerys.hasClass('checked')).to.eventually.be.false

    await page.click(daenerys.find('label'))
    await expect(ned.value).to.eventually.deep.equal(['ned', 'daenerys'])
    await expect(ned.hasClass('checked')).to.eventually.be.true
    await expect(daenerys.hasClass('checked')).to.eventually.be.true
  })


