import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.goto('https://www.bestseller.md/');
    const pageTitle = await page.title();
    const pageDescrition = await page.getAttribute('meta[name="description"]', 'content');
    //const pagekeyword = await page.getAttribute('meta[name="keywords"]', 'content');

    console.log('Titlul paginii este', pageTitle);
    console.log('Descrierea paginii este', pageDescrition);
    //console.log('pagekeyword paginii sunt', pagekeyword);


    await page.getByLabel('Contul meu').click();
    await page.getByRole('link', { name: 'Conectare' }).click();
    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('ticau97@gmail.co');
    await page.getByLabel('Email', { exact: true }).press('Tab');
    await page.getByRole('textbox', { name: 'Parolă' }).fill('Virtuoz1954');
    await page.getByRole('button', { name: 'Conectare' }).click();

    await page.getByLabel('Email', { exact: true }).click();
    await page.getByLabel('Email', { exact: true }).fill('ticau97@gmail.com');

    const EmailFill = await page.getByLabel('Email', { exact: true }).inputValue();
    console.log('Valoarea Email este:', EmailFill);

    await page.getByLabel('Email', { exact: true }).press('Tab');
    await page.getByRole('textbox', { name: 'Parolă' }).fill('Virtuoz1854');
    await page.getByRole('textbox', { name: 'Parolă' }).press('Enter');
    await page.getByLabel('Contul meu').click();
    await page.getByRole('link', { name: 'Deconectare' }).click();
    await page.waitForTimeout(1000);


    await page.goto('https://www.bestseller.md/');
    await page.getByRole('link', { name: 'Retorică în fața morții.' }).first().click();
    await page.getByTitle('Adaugă în coș').click();
    await page.getByLabel('Cantitate').click();
    await page.getByLabel('Cantitate').fill('22');
    await page.getByRole('link', { name: 'Finalizați comanda' }).click();
    await page.getByRole('textbox', { name: 'Adresa Email *' }).click();
    await page.getByRole('textbox', { name: 'Adresa Email *' }).fill('dddj');
    await page.getByLabel('Prenume').fill('j');
    await page.getByLabel('Prenume').click();
    await page.getByLabel('Prenume').fill('jjj');
    await page.getByLabel('Nume', { exact: true }).click();
    await page.getByLabel('Nume', { exact: true }).fill('kk');
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
    console.log('Valoarea CodP este:', CodP);

    expect(pageTitle).toBe('Bestseller.md - Librărie online cu Livrare Rapidă în Chișinau și Moldova - Bestseller.md');

    expect(EmailFill).toBe(`ticau97@gmail.com`);
    expect(EmailFill).toMatch(`ticau`);
    expect(EmailFill).toBeTruthy();

    expect(CodP).toBe(`1234`);
    expect(CodP).toMatch(`12`);
    expect(CodP).toBeTruthy();
});