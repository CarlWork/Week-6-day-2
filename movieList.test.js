

const {Builder, By, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/Week_6/day_2/automation/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


test('Check for crossed off movie', async() => {
    await driver.findElement(By.css('input')).sendKeys(`interstellar\n`)
    let listitem = await driver.findElement(By.css('span'))
    listitem.click()
    await driver.sleep(5000)
    expect(await listitem.getAttribute('class')).toContain('checked')
})

test('Check to remove crossed off movie', async () => {
    let listitem = await driver.findElement(By.css('span'))
    listitem.click()
    expect(await listitem.getAttribute("class")).not.toContain('checked')
})

test('Check to see if movie was deleted', async () => {
    let listitem = await driver.findElement(By.css(''))
})