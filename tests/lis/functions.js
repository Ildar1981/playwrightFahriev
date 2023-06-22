export async function createReferralNew(page, patient, analysis) {


  await page.locator(`#LisFooterBtn_openSubActions`).click()
  await page.locator(`#LisFooterBtn_createReferral`).click()
  await page.getByRole(`row`).getByText(`Заполнить`).first().click()
  await page.locator(`#LisFieldSelectPatient`).fill(patient)
  await page.locator(`.el-select-dropdown__list`).getByRole(`listitem`).first().click()
  await page.getByRole(`row`).getByText(`Заполнить`).first().click()
  await page.getByPlaceholder(`Выбрать исследование`).fill(analysis)
  await page.locator(`.el-select-dropdown__list`).getByRole(`listitem`).first().click()
  await page.getByRole(`button`, { name: `Сохранить` }).click()
}

export async function 