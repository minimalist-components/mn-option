import chai from 'chai'
import {expect} from 'chai'
import chaiAsPromised from 'chai-as-promised'
import {Selector} from 'testcafe'

chai.use(chaiAsPromised)

fixture `undefined values`
  .page('http://localhost:8080/docs/demo.html')


test('radio value is undefined', async page => {
  const list = await Selector('mn-option[name="list"]')
  await expect(list.value).to.eventually.be.undefined
})

test('checkbox value is array', async () => {
  const list2 = await Selector('mn-option[name="list2"]')
  await expect(list2.value).to.eventually.be.an('array')
  await expect(list2.value).to.eventually.be.empty
})

test.skip('change value in radio', async () => {
  const list = await Selector('mn-option[name="list"]')
  await page.click(list)
  await expect(list.value).to.eventually.be.equal('stark')
})


