import { expect, test } from '@playwright/test'
import { authAdmin, openModule } from '../../functions'
import { createReferralNew, createReferralNewWithDoctor } from './functions'
test.describe(`Создание направления и прочие элементы на вкладке`, () => {
	
    test.beforeEach(async ({ page }) => {

    await authAdmin(page)
    await openModule(page, `Лаборатория`)
  })
test(`Переход стрелками вперед и назад после перехода на вкладку Список направлений`, async ({ page }) => {
	await login(page) 
	//Переходим к списку направлений
	await page.waitForSelector(`#LisReferralSearch`)
	await page.locator(`#LisFooterBtn_openSubActions`).click()
	await page.locator(`#LisFooterBtn_openReferrals`).click()
	// Проверка переходов по стрелочкам браузера
	await page.goBack()
	await page.waitForTimeout(2000)
	
	await page.goForward()
	await page.waitForTimeout(2000)
	expect(page.waitForSelector(`text=Работа с направлениями`))
	})
})