import { Then } from '@cucumber/cucumber';
import { ScenarioWorld } from '../setup/world';
import { ElementKey } from '../../env/global';
import { getElementLocator } from '../../support/web-element-helper';
import { waitFor, waitForSelector } from '../../support/wait-for-behavior';
import { getAttributeText, getElementText, getElementValue, elementEnabled, getElementTextAtIndex } from '../../support/html-behavior';
import { logger } from '../../logger';

Then(
    /^the "([^"]*)" should( not)? contain the text "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`The ${elementKey} should ${negate ? 'not' : ''} contain the text ${expectedElementText}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);

            if (elementStable) {
                const elementText = await getElementText(page, elementIdentifier);
                return elementText?.includes(expectedElementText) === !negate;
            } else {
                return elementStable;
            }
        });
    },
);

Then(
    /^the "([^"]*)" should( not)? equal the text "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`The ${elementKey} should ${negate ? 'not' : ''} equal the text ${expectedElementText}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);

            if (elementStable) {
                const elementText = await getElementText(page, elementIdentifier);
                return (elementText === expectedElementText) === !negate;
            } else {
                return elementStable;
            }
        });
    },
);

Then(
    /^the "([^"]*)" should( not)? contain the value "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, elementValue: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`The ${elementKey} should ${negate ? 'not' : ''} contain the value ${elementValue}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);

            if (elementStable) {
                const elementAttribute = await getElementValue(page, elementIdentifier);
                return elementAttribute?.includes(elementValue) === !negate;
            } else {
                return elementStable;
            }
        });
    },
);

Then(
    /^the "([^"]*)" should( not)? equal the value "([^"]*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, elementValue: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`The ${elementKey} should ${negate ? 'not' : ''} equal the value ${elementValue}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);

            if (elementStable) {
                const elementAttribute = await getElementValue(page, elementIdentifier);
                return (elementAttribute === elementValue) === !negate;
            } else {
                return elementStable;
            }
        });
    },
);

Then(/^the "([^"]*)" should( not)? be enabled$/, async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean) {
    const {
        screen: { page },
        globalConfig,
    } = this;

    logger.log(`The ${elementKey} should ${negate ? 'not' : ''} be enabled`);

    const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

    await waitFor(async () => {
        const elementStable = await waitForSelector(page, elementIdentifier);

        if (elementStable) {
            const isElementEnabled = await elementEnabled(page, elementIdentifier);
            return isElementEnabled === !negate;
        } else {
            return elementStable;
        }
    });
});

Then(
    /^the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" should( not)? contain the text "(.*)"$/,
    async function (this: ScenarioWorld, elementPosition: string, elementKey: ElementKey, negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`The ${elementPosition} ${elementKey} should ${negate ? 'not' : ''} contain the text ${expectedElementText}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);
        const index = Number(elementPosition.match(/\d/g)?.join('')) - 1;

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);

            if (elementStable) {
                const elementText = await getElementTextAtIndex(page, elementIdentifier, index);
                return elementText?.includes(expectedElementText) === !negate;
            } else {
                return elementStable;
            }
        });
    },
);

Then(
    /^the "([^"]*)" "([^"]*)" attribute should( not)? contain the text "(.*)"$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, attribute: string, negate: boolean, expectedElementText: string) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        logger.log(`The ${elementKey} ${attribute} attribute should ${negate ? 'not' : ''} contain the text ${expectedElementText}`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const elementStable = await waitForSelector(page, elementIdentifier);

            if (elementStable) {
                const attributeText = await getAttributeText(page, elementIdentifier, attribute);
                return attributeText?.includes(expectedElementText) === !negate;
            } else {
                return elementStable;
            }
        });
    },
);
