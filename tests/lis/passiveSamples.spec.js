import { test } from '../../fixtures/default'
import { expect } from '@playwright/test'
import { authAdmin, openModule } from '../../functions'

test.describe(`Пассивные пробы`, async () => {

   
      test.beforeEach(async ({ page }) => {
      test.skip(process.env.TEST_TYPE == `smoke`)
      await authAdmin(page)
      await openModule(page, `Лаборатория`)
    })
    
  test(`Открыть окно пассивных проб и закрыть когда открыто направление`, async ({ page }) => {

    // получить существующие данные: имя пациента, наименование исследования
    const data = await getExistingData(page)
    data.barcode = barcode
    
    // создать направление с полученными данными и рандомным штрих-кодом
    await createReferral(page, data)

    // открыть окно пассивных проб
    await page.locator(`#LisFooterBtn_openSamples`).click()
    expect(page.locator(`#LisSamplesDialog`))

    // закрыть окно пассивных проб
    await page.locator(`#LisSamplesDialog div.laba-dialog-title > img`).click()
    expect(page.locator(`#pane-tab1`))
  })
})