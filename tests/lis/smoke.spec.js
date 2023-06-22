import { expect, test } from '@playwright/test'
import config from '../../const/config'
import { authAdmin, openModule } from '../../functions'
import LoginPage from '../pages/loginPages'

test.describe(`авторизация`, () => {
  test.beforeEach(async () => {
    await LoginPage.visit()
  })
  test(`Успешная авторизация`, async () => {
    await LoginPage.login({
      username: config.crendentials.user.username,
      password: config.crendentials.user.password
      })
    await LoginPage.submitForm()
    expect(page).toHaveTitle(/ПК Здравоохранение/)
  })
  test(`авторизация неуспешная с неверным паролем`, async () => {
    await LoginPage.login({
      username: config.crendentials.user.username,
      password: 'ddd'
      })
    await LoginPage.submitForm()
    expect(page.getByText('Ошибка авторизации')).toBeVisible();

  })
  test(`авторизация неуспешная с неверным логином`, async () => {
    await LoginPage.login({
      username: 'fff',
      password: config.crendentials.user.password
      })
    await LoginPage.submitForm()
    expect(LoginPage.getPasswordError().contains(`Ошибка авторизации`))

  })

})