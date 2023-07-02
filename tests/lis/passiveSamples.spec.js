import { expect, test } from '@playwright/test'
import { authAdmin, openModule } from '../../functions'


test.describe(`Открытие и закрытие модальных окон`, () => {
  test.beforeEach(async ({ page }) => {

    await authAdmin(page)
    await openModule(page, `Лаборатория`)
  })
  
  test(`1.окно пассивных проб`, async ({ page }) => {
	
    await page.waitForSelector(`#LisReferralSearch`)
    await page.locator(`#LisReferralSearch`).fill(`юхта`);
    await page.locator(`#LisReferralSearch`).press(`Enter`);
    expect(page.locator(`text=Направление: Анализ мочи по Нечипоренко`))
	

    // кликаем по направлению первому из списка
    await page.locator(`#pane-all div.search-tab > div:nth-child(2) span`).click();
    await page.waitForTimeout(3000)
    
    // открыть окно пассивных проб
    await page.locator(`#LisFooterBtn_openSamples`).click()
    expect(page.locator(`#LisSamplesDialog`))

    // закрыть окно пассивных проб
    await page.locator(`#LisSamplesDialog div.laba-dialog-title > img`).click()
    expect(page.locator(`#pane-tab1`))
  })
  
 test(`2.проверка радиобаттонов в пассивных пробах`, async ({ page }) => {
	
    await page.waitForSelector(`#LisReferralSearch`)
    await page.locator(`#LisReferralSearch`).fill(`юхта`);
    await page.locator(`#LisReferralSearch`).press(`Enter`);
    expect(page.locator(`text=Направление: Анализ мочи по Нечипоренко`))
	

     //кликаем по направлению первому из списка
    await page.locator(`#pane-all div.search-tab > div:nth-child(2) span`).click();
    await page.waitForTimeout(3000)
     // открыть окно пассивных проб
    await page.locator(`#LisFooterBtn_openSamples`).click()
    expect(page.locator(`#LisSamplesDialog`))

    // кликаем на радиобаттон все
    await page.locator(`#LisSamplesSearchUsed > label:nth-child(1) > span.el-radio__input > span`).click()
   expect(page.locator(`#LisSamplesDialog`))

    
  })
  
 test(`3.окно динамики`, async ({ page }) => {
    await page.waitForSelector(`#LisReferralSearch`)
    await page.locator(`#LisReferralSearch`).fill(`юхта`);
    await page.locator(`#LisReferralSearch`).press(`Enter`);
    expect(page.locator(`text=Направление: Анализ мочи по Нечипоренко`))

    // кликаем по направлению первому из списка
    await page.locator(`#pane-all`).getByText(`Анализ мочи по Нечипоренко`).first().click();
    await page.waitForTimeout(3000)

    // открыть окно динамики
    await page.locator(`#LisFooterBtn_openDynamic`).click()
    expect(page.locator(`#LisRefDynamicTable`))

    // закрыть окно пассивных проб
    await page.locator(`#LisDynamicDialog > div > div.el-dialog__body > div > div.laba-dialog-title > img`).click()
    expect(page.locator(`#pane-tab1`))
  })
  
  test(`4.окно лейкоцитарной формы открывается -закрывается и еще раз открыть`, async ({ page }) => {
	  //Открыть любое направление
    await page.waitForSelector(`#LisReferralSearch`)
    await page.locator(`#LisReferralSearch`).fill(`юхта`);
    await page.locator(`#LisReferralSearch`).press(`Enter`);
   await page.locator(`#pane-all`).getByText(`Анализ мочи по Нечипоренко`).first().click();
	
	//Открыть окно лейкоцитарной формулы и убедиться, что дисплай заблокирован
	await page.waitForTimeout(1000)
	await page.locator(`#LisFooterBtn_openSubActions`).click()
	await page.locator(`#LisFooterBtn_openLeukocyte`).click()
	expect(page.locator(`.leukocyte-table-container`))
	//Закрыть окно через кнопку отменить
	await page.locator(`#LisLeukocyteFormulaCancelBtn`).click()
	//еще раз открыть
	await page.locator(`#LisFooterBtn_openSubActions`).click()
	await page.locator(`#LisFooterBtn_openLeukocyte`).click()
	expect(page.locator(`.leukocyte-table-container`))
  })

})