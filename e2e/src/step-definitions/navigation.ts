import {Given} from '@cucumber/cucumber'
import {ScenarioWorld} from './setup/world';

Given(
    /^I am on the "([^"]*)" page$/,
    async function (this: ScenarioWorld, pageId: string) {
        const {
            screen: {page},
        } = this;

        console.log(`I am on the ${pageId} page`);

        await page.goto("http://localhost:3000/")

    }
)
