import { Then } from '@cucumber/cucumber';
import { getElementLocator } from '../../support/web-element-helper';
import { ScenarioWorld } from '../setup/world';
import { waitFor } from '../../support/wait-for-behavior';

Then(/^the "([^"]*)" should( not)? be displayed$/, async function (this: ScenarioWorld, elementKey: string, negate: boolean) {
    const {
        screen: { page },
        globalConfig,
    } = this;

    console.log(`The ${elementKey} should ${negate ? 'not' : ''} be displayed`);

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor(async () => {
        const isElementVisible = (await page.$(elementIdentifier)) != null;
        return isElementVisible === !negate;
    });
});
