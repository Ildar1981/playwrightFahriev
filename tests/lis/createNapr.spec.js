import { expect, test } from '@playwright/test'
import { authAdmin, openModule } from '../../functions'
import { createReferralNew, createReferralNewWithDoctor } from './functions'


test.describe(`Создание направления и прочие элементы на вкладке`, () => {
	
	const patient = 'тест'
	const analysis = 'коагулограмма'
    const doctor = 'алдушина'
	
  test.beforeEach(async ({ page }) => {

    await authAdmin(page)
    await openModule(page, `Лаборатория`)
  })

   test('1.Создать направление через функцию', async ({ page }) => {
 
     
      // создать направление 
  await createReferralNew(page, patient, analysis)
	
	
   //статус направления "Новый"
  await page.waitForTimeout(3000)
  expect(page.locator(`#LisRefDetailsTableData .reject-status`).first()).toContainText(`Новый`)
  })
	
	test('2.Дефолтный врач при создании направления', async ({ page }) => {
 
     
      // При создании направления видим, что дефолтный врач отображается
  await page.locator(`#LisFooterBtn_openSubActions`).click()
  await page.locator(`#LisFooterBtn_createReferral`).click()
	
	
  // врач дефолтный отображается
  await page.waitForTimeout(3000)
  expect (page.getByRole(`span`).filter({ hasText: `КОМТЕК АДМИНИСТРАТОР` }));
  })
  
  test('3.Направление создается с врачем недефолтным', async ({ page }) => {
 
	  // создать направление 
  await createReferralNewWithDoctor(page, patient, analysis, doctor)
	
  // врач отображен
  await page.waitForTimeout(3000)
  expect(page.getByRole(`cell`, { name: 'АЛДУШИНА ТАТЬЯНА ИЛЬИНИЧНА' }).getByText('АЛДУШИНА ТАТЬЯНА ИЛЬИНИЧНА'))
  })
})