const {test, expect} = require('@playwright/test');

test.only('Browser context Playwright test', async ({browser})=>
{
    //chrome - plugins/cookies
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator("#username");
    const signIn = page.locator("#signInBtn");
    const cardTitles = page.locator(".card-body a");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    //css locator/ entering wrong details, capturing error message and assert
    await page.locator("#username").type("rahulshetty");
    await page.locator("[type ='password']").type("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    //type - fill-to clear and enter correct text in a text box
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await signIn.click();
    console.log(await cardTitles.nth(0).textContent());
    console.log(await cardTitles.nth(1).textContent());

    //to grab all card titles on the page
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);
   //End of test
});

test('Page Playwright test', async ({page})=>
{

    await page.goto("https://google.com");

    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");
//TODO:
});