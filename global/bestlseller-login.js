export class Login{
    constructor(page) {
        this.page = page;
    }

    async gotoLoginPage(): Promise<void> {
        await this.page.goto( '/index,jsp');
    }

    async login(): Promise<void> {
        await this.page.goto('https://www.bestseller.md/');
        await page.getByLabel('Contul meu').click();
        await page.getByRole('link', { name: 'Conectare' }).click();
        await page.getByLabel('Email', { exact: true }).click();
        await page.getByLabel('Email', { exact: true }).fill('ticau97@gmail.com');
        await page.getByLabel('Email', { exact: true }).press('Tab');
        await page.getByRole('textbox', { name: 'Parolă' }).fill('Virtuoz1854');
        await page.getByRole('button', { name: 'Conectare' }).click();
    };
}