import {Then} from '@cucumber/cucumber'
import {expect} from '@playwright/test'
import {ScenarioWorld} from "../setup/world";

Then(
    /^the "([^"]*)" should be displayed$/,
    async function (this: ScenarioWorld, elementKey: string) {
        const {
            screen: {page},
        } = this;

        console.log(`the ${elementKey} should be displayed`);

        const locator = page.locator("[data-id='header-logo']")
        await expect(locator).toBeVisible();
    }
);

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: string, expectedElementText: string) {
        const {
            screen: {page},
        } = this;

        console.log(`the ${elementKey} should contain the text ${expectedElementText}`)

        const content = await page.textContent("[data-id='contacts']")

        expect(content).toBe(expectedElementText)

    }
)
