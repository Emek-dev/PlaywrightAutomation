const {test, expect} = require('@playwright/test');

test('Browser context Playwright test', async ({browser})=>
{
    //chrome - plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractice/");


});

test.only('Page Playwright test', async ({page})=>
{

    await page.goto("https://google.com");

    //get title - assertion
    console.log(await page.title());
    expect(page).toHaveTitle("Google");



});