export class Login {
    constructor(page) {
        this.page = page;
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.bestseller.md/');
    }

    async login() {
        await this.gotoLoginPage();
        await this.page.goto('https://www.bestseller.md/');
        await this.page.getByLabel('Contul meu').click();
        await this.page.getByRole('link', {name: 'Conectare'}).click();
        await this.page.getByLabel('Email', {exact: true}).click();
        await this.page.getByLabel('Email', {exact: true}).fill('ticau97@gmail.com');
        await this.page.getByLabel('Email', {exact: true}).press('Tab');
        await this.page.getByRole('textbox', {name: 'Parolă'}).fill('Virtuoz1854');
        await this.page.getByRole('button', {name: 'Conectare'}).click();
    }
}