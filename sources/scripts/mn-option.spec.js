import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import {Selector} from 'testcafe'

chai.use(chaiAsPromised)

fixture `mn-option[type=radio]`
  .page('http://localhost:8080/docs/demo.html')

test('value is undefined', async page => {
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

test('checkbox value is array', async () => {
  const list2 = await Selector('mn-option[name="list2"]')
  await expect(list2.value).to.eventually.be.an('array')
  await expect(list2.value).to.eventually.be.empty
})


