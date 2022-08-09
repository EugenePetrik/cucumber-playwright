import { Then } from '@cucumber/cucumber';
import { waitFor, waitForResult, waitForSelectorOnPage } from '../support/wait-for-behavior';
import { inputValueOnPage } from '../support/html-behavior';
import { getElementLocator } from '../support/web-element-helper';
import { ScenarioWorld } from './setup/world';
import { ElementKey } from '../env/global';
import { logger } from '../logger';

Then(
    /^I fill in the "([^"]*)" input on the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" (?:tab|window) with "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, elementPosition: string, inputValue: string) {
        const {
            screen: { page, context },
            globalConfig,
        } = this;

        logger.log(`I fill in the ${elementKey} input on the ${elementPosition} window|tab with ${inputValue}`);

        const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(
            async () => {
                let pages = context.pages();

                const elementStable = await waitForSelectorOnPage(page, elementIdentifier, pages, pageIndex);

                if (elementStable) {
                    await inputValueOnPage(pages, pageIndex, elementIdentifier, inputValue);
                    return waitForResult.PASS;
                }

                return waitForResult.ELEMENT_NOT_AVAILABLE;
            },
            globalConfig,
            { target: elementKey },
        );
    },
);
