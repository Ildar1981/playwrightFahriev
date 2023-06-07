import { test } from '../../fixtures/default'
import { expect } from '@playwright/test'
import { authAdmin, openModule } from '../../functions'

test.describe(`Модуль лаборатория`, () => {
  test.beforeEach(async ({ page }) => {
   
    await authAdmin(page)
    await openModule(page, `Лаборатория`)
  })
  test(``, async ({ page }) => {
    await page.waitForSelector(`#LisReferralSearch`)
    await page.locator(`#LisReferralSearch`).fill(`юхта`);
    await page.locator(`#LisReferralSearch`).press(`Enter`);

    await page.waitForSelector(`text=Направление: Анализ мочи по Нечипоренко `)
    await page.locator(`#pane-all div.search-tab > div:nth-child(2) span`).click();
    
    // открыть окно пассивных проб
    await page.locator(`#LisFooterBtn_openSamples`).click()
    expect(page.locator(`#LisSamplesDialog`))

    // закрыть окно пассивных проб
    await page.locator(`#LisSamplesDialog div.laba-dialog-title > img`).click()
    expect(page.locator(`#pane-tab1`))
  })
})