import { test, expect } from '@playwright/test';
import { Login } from '../global/bestseller-login.js';

test('test-bestseller', async ({ page }) => {
    const loginPage = new Login(page);
   // await loginPage.gotoLoginPage();
    await loginPage.login();

    await page.goto('https://www.bestseller.md/');
    const pageTitle = await page.title();

    await page.getByRole('link', { name: 'Retorică în fața morții.' }).first().click();
    await page.getByTitle('Adaugă în coș').click();
    await page.getByLabel('Cantitate').click();
    await page.getByLabel('Cantitate').fill('22');
    await page.getByRole('link', { name: 'Finalizați comanda' }).click();
    await page.getByRole('textbox', { name: 'Adresa Email *' }).click();
    await page.getByRole('textbox', { name: 'Adresa Email *' }).fill('ticau97@gmail.com');
    const EmailFill = await page.getByRole('textbox', { name: 'Adresa Email *' }).inputValue();

    await page.getByLabel('Prenume').fill('j');
    await page.getByLabel('Prenume').click();
    await page.getByLabel('Prenume').fill('Lilian');
    await page.getByLabel('Nume', { exact: true }).click();
    await page.getByLabel('Nume', { exact: true }).fill('TIcau');
    await page.getByText('Prenume Nume Companie Adresă').click();
    await page.getByText('Adresă stradă: Line 2').click();
    await page.getByLabel('Adresă stradă: Line 1').click();
    await page.getByLabel('Adresă stradă: Line 1').fill('mm');
    await page.getByLabel('Adresă stradă: Line 2').fill('m');
    await page.getByLabel('Adresă stradă: Line 2').click();
    await page.getByLabel('Adresă stradă: Line 2').fill('mkkk');
    await page.getByLabel('Oraș').click();
    await page.getByLabel('Oraș').fill('kmkm');
    await page.getByLabel('Cod poștal').click();
    await page.getByLabel('Cod poștal').fill('1234');
    await page.getByLabel('Număr de telefon').click();
    await page.getByLabel('Număr de telefon').fill('k');
    await page.locator('#checkout-step-shipping').click();

    const CodP = await page.getByLabel('Cod poștal').inputValue();

    expect(pageTitle).toBe('Bestseller.md - Librărie online cu Livrare Rapidă în Chișinau și Moldova - Bestseller.md');

    expect(EmailFill).toBe(`ticau97@gmail.com`);
    expect(EmailFill).toMatch(`ticau`);
    expect(EmailFill).toBeTruthy();

    expect(CodP).toBe(`1234`);
    expect(CodP).toMatch(`12`);
    expect(CodP).toBeTruthy();
});