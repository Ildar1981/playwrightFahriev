export async function createReferralNew(page, patient, analysis) {


  await page.locator(`#LisFooterBtn_openSubActions`).click()
  await page.locator(`#LisFooterBtn_createReferral`).click()
  await page.getByRole(`row`).getByText(`Заполнить`).first().click()
  await page.waitForTimeout(1000)
  await page.locator(`#LisFieldSelectPatient`).fill(patient, { delay: 1000 })
  await page.waitForTimeout(1000)
  await page.locator(`.el-select-dropdown__list`).getByRole(`listitem`).first().click()
  await page.getByRole(`row`).getByText(`Заполнить`).first().click()
  await page.getByPlaceholder(`Выбрать исследование`).fill(analysis, { delay: 1000 })
  await page.waitForTimeout(1000)
  await page.locator(`.el-select-dropdown__list`).getByRole(`listitem`).first().click()
  await page.getByRole(`button`, { name: `Сохранить` }).click()
}

export async function createReferralNewWithDoctor(page, patient, analysis, doctor) {


  await page.locator(`#LisFooterBtn_openSubActions`).click()
  await page.locator(`#LisFooterBtn_createReferral`).click()
  await page.getByRole(`row`).getByText(`Заполнить`).first().click()
  await page.waitForTimeout(1000)
  await page.locator(`#LisFieldSelectPatient`).fill(patient, { delay: 1000 })
  await page.waitForTimeout(1000)
  await page.locator(`.el-select-dropdown__list`).getByRole(`listitem`).first().click()
  await page.getByRole(`row`).getByText(`Заполнить`).first().click()
  await page.getByPlaceholder(`Выбрать исследование`).fill(analysis, { delay: 1000 })
  await page.waitForTimeout(1000)
  await page.locator(`.el-select-dropdown__list`).getByRole(`listitem`).first().click()
  await page.getByRole(`row`).getByText(`КОМТЕК АДМИНИСТРАТОР`).click()
  await page.waitForTimeout(1000)
  await page.getByPlaceholder(`Выбрать врача`).fill(doctor, { delay: 1000 })
  await page.waitForTimeout(1000)
  await page.locator(`.el-select-dropdown__list`).getByRole(`listitem`).first().click()
  await page.getByRole(`button`, { name: `Сохранить` }).click()
}
