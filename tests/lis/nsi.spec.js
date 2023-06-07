import { test } from '../../fixtures/default'
import { expect } from '@playwright/test'
import { authAdmin, openModule } from '../../functions'

test.describe(`Проверка справочников`, () => {
  test.beforeEach(async ({ page }) => {

    await authAdmin(page)
    await openModule(page, `Лаборатория`)
  })
  test(`справочник статусов`, async ({ page }) => {
    // нажимаем на кнопку Действие и к списку через выпадающее окно
    await page.waitForSelector(`#LisFooterBtn_openSubActions`)
    //ожидаем увидеть иконку кнопки Ксписку
    expect(page.locator(`#dropdown-menu-2922 > li:nth-child(8) > span > img`))
    //кликаем на кнопку к списку
    await page.locator(`#LisFooterBtn_openReferrals`).click();
    expect(page.locator(`text=Список направлений`))
    //кликаем на статус
    await page.locator(`//*[@id="pane-list-referrals3"]/div/div/div[2]/div/div[1]/ul/li[5]`).click();
    //ожидаем увидеть первый из справочника статус-Отменен
    expect(page.locator(`text=Отменен`))
  })
})