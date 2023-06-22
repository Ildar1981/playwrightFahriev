const LoginPage = {
    async visit(){
        await page.goto(`http://192.168.2.45:3000`)
        expect(page.getByText(`Войти`))
    },
    async fillUserName(username){
        await page.locator(`input[type=text]`).fill(username)

    },
    async fillPassword(password){
        await page.locator(`input[type=password]`).fill(password)
    },
    async submitForm(){
        await page.locator(`button`).click({ force: true })
    },
    async getPasswordError(){
        return expect(page.getByText('Ошибка авторизации'))
    },
    login({username, password}){
        this.fillPassword(password)
        this.fillUserName(username)
        this.submitForm()
    }
}

export default {
    LoginPage
}