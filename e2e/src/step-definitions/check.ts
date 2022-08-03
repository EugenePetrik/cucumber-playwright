import { Then } from '@cucumber/cucumber';
import { ScenarioWorld } from './setup/world';
import { checkElement } from '../support/html-behavior';
import { waitFor } from '../support/wait-for-behavior';
import { getElementLocator } from '../support/web-element-helper';
import { ElementKey } from '../env/global';

Then(
    /^I (check)?(uncheck)? the "([^"]*)" (?:check box|radio button)$/,
    async function (this: ScenarioWorld, checked: boolean, uncheck: boolean, elementKey: ElementKey) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`I ${uncheck ? 'uncheck' : 'check'} the ${elementKey} check box|radio button`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const result = await page.waitForSelector(elementIdentifier, {
                state: 'visible',
            });
            if (result) {
                await checkElement(page, elementIdentifier);
            }
            return result;
        });
    },
);
