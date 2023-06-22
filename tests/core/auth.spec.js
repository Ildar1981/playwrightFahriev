import { expect, test } from '@playwright/test'
import { auth } from '../../functions'
import {
  _baseURL,
  _loginAdmin,
  _loginAdminWrong,
  _passwordAdmin,
  _passwordAdminWrong,
  _usernameAdmin
} from '../../const'

test.describe(`Админ`, () => {
  test(`Авторизация успешная`, async ({ page }) => {
    await auth(page, _baseURL, _loginAdmin, _passwordAdmin)
    await expect(page.locator(`.info-user div`)).toContainText(_usernameAdmin)
  })

  test(`Авторизация неудачная`, async ({ page }) => {
    await auth(page, _baseURL, _loginAdmin, _passwordAdminWrong)
    await expect(page.getByRole(`alert`)).toContainText(`Ошибка авторизации`)
  })

  test(`Авторизация неудачная c неверным логином`, async ({ page }) => {
    await auth(page, _baseURL, _loginAdminWrong, _passwordAdmin)
    await expect(page.getByRole(`alert`)).toContainText(`Ошибка авторизации`)
  })
})


