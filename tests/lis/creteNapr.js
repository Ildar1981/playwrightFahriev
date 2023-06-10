import { test } from '../../fixtures/default'
import { expect } from '@playwright/test'
import { authAdmin, openModule } from '../../functions'
import { _patient } from '../../const'

test.describe(`Создание направления`, () => {
  test.beforeEach(async ({ page }) => {

    await authAdmin(page)
    await openModule(page, `Лаборатория`)
  })

const TODO_ITEMS = [
  'Работа с направлениями',
  'нарыкова',
  '13270252',
  '13699949',
  'Исследование мочи методом Нечипоренко',
  '1000',
  'Лаборатория'
];


  test('1.Создать направление ', async ({ page }) => {

  
    await page.waitForSelector(`#LisReferralSearch`);
    await page.locator(`#LisFooterBtn_openSubActions`).click();
    await page.locator(`#LisFooterBtn_createReferral`).click();
	
	//Находим пациента
    await page.getByRole(`row`).getByText(`Заполнить`).first().click()
    await page.getByPlaceholder(`Выбрать пациента`).fill(TODO_ITEMS[1])
    await page.locator(`.el-select-dropdown__list`).getByRole(`listitem`).first().click()
    await page.getByRole(`row`).getByText(`Заполнить`).first().click()
    await page.getByPlaceholder(`Выбрать исследование`).fill(TODO_ITEMS[4])
    await page.locator(`.el-select-dropdown__list`).getByRole(`listitem`).first().click()
    await page.getByRole(`row`).getByText(`Заполнить`).first().click()
    await page.getByPlaceholder(`Выбрать срочность`).fill(`-`)
    await page.getByRole(`button`, { name: `Сохранить` }).click()
	
	});
  
}); 

// test.describe(`Подгрузка направления`, () => {
//   test('2.Подгрузить направление', async ({ page }) => {
//     await login(page)

//     //TODO Проверка создание и сохранение направления
// 	//await page.waitForSelector(`text=Выберите нужный Вам модуль`);
// 	//await page.dblclick(`.cell >> text=Лаборатория`);
//     await page.waitForSelector(`#LisReferralSearch`)
//     await page.fill(`#LisReferralSearch`, TODO_ITEMS[3])
//     await page.press(`#LisReferralSearch`,`Enter`);
//     await page.waitForSelector('text=Общий (клинический) анализ крови')
// 	await page.waitForSelector(`//*[@id="LisRefDetailsTableRef"]/div[3]/table/tbody/tr[1]/td[2]/div/div/div/div/span`)
// 	const  inputFieldNumber = page.locator (`//*[@id="LisRefDetailsTableRef"]/div[3]/table/tbody/tr[1]/td[2]/div/div/div/div/span`)
// 	await page.waitForSelector
// 	await page.waitForTimeout(2000)
// 	await inputFieldNumber.dblclick
// 	});
  
// }); 

// test.describe(`Модуль лаборатория`, () => {
//   test(`3.Создать направление с признаком срочность`, async ({ page }) => {
//     await login(page)

//     //TODO Проверка создание и сохранение направления
// 	//await page.waitForSelector(`text=Выберите нужный Вам модуль`);
// 	//await page.dblclick(`.cell >> text=Лаборатория`);
//     await page.waitForSelector(`#LisReferralSearch`);
//     await page.locator(`#LisFooterBtn_openSubActions`).click();
//     await page.locator(`#LisFooterBtn_createReferral`).click();
// 	await page.waitForTimeout(1000);
// 	//Находим пациента
// 	await page.waitForSelector(`//*[@id="pane-tab1"]/div/div/div[2]/div[2]/div/div[2]/div[3]/table/tbody/tr/td[2]/div/div/div/span`)
// 	await page.waitForTimeout(1000);
// 	await page.locator(`//*[@id="pane-tab1"]/div/div/div[2]/div[2]/div/div[2]/div[3]/table/tbody/tr/td[2]/div/div/div/span`).dblclick();
// 	await page.waitForTimeout(1000);
//     await page.waitForSelector(`#LisFieldSelectPatient`)
// 	await page.locator(`#LisFieldSelectPatient`).fill('юхта');
// 	await page.locator(`text=ЮХТА ЕЛЕНА МИХАЙЛОВНА`).click();
// 	//Находим исследование
// 	await page.locator(`//*[@id="pane-tab1"]/div/div/div[2]/div[2]/div/div[2]/div[3]/table/tbody/tr/td[6]/div/div/div/span`).dblclick();
// 	await page.waitForSelector(`#LisFieldSelectRecearch`)
// 	await page.fill(`#LisFieldSelectRecearch`,TODO_ITEMS[4],{delay : 5000} )
// 	await page.waitForTimeout(3000)
// 	await page.waitForSelector(`//body/div[2]/div[1]/div[1]/ul/li`)
// 	await page.locator(`//body/div[2]/div[1]/div[1]/ul/li`).click()
// 	//Выбираем срочнось
// 	await page.locator(`//*[@id="pane-tab1"]/div/div/div[2]/div[2]/div[1]/div[2]/div[3]/table/tbody/tr/td[7]/div/div/div/span`).click()
// 	await page.waitForTimeout(1000)
// 	await page.click(`.el-select-dropdown__item >> text=Срочно`)
// 	//Создаем направление
// 	await page.waitForTimeout(1000)
// 	const buttonSave = await page.waitForSelector(`.el-button.btn-save.el-button--primary.el-button--medium`)
// 	await buttonSave.click();
// 	await page.waitForSelector(`text=Направление: Исследование мочи методом Нечипоренко`)
// 	//Проверка что признак срочности отображен в созданном направлении
// 	await page.click(`//*[@id="LisRefDetailsTableData"]/div[4]/div[1]/table/thead/tr/th[9]/div/span/span/img`)
//     await page.waitForTimeout(1000)
// 	const checkUrgency = await page.waitForSelector(`//body/div[2]/div[1]/div[1]/label[10]`)
// 	await checkUrgency.click()
// 	await page.waitForTimeout(1000)
// 	await page.locator(`//body/div[2]/div[1]/div[2]/button[1]`).click()
// 	await page.waitForTimeout(1000)
// 	await page.waitForSelector(`//*[@id="LisRefDetailsTableData"]/div[3]/table/tbody/tr/td[7]/div/div`)
	
// 	});
  
  
// }); 
