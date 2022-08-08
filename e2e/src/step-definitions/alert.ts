import { When } from '@cucumber/cucumber';
import { ScenarioWorld } from './setup/world';
import { logger } from '../logger';

When(/^I click (accept)?(dismiss)? on the alert dialog$/, async function (this: ScenarioWorld, acceptDialog: boolean, negateDialog: boolean) {
    const {
        screen: { page },
    } = this;

    logger.log(`I click ${acceptDialog ?? negateDialog} on the alert dialog`);

    if (negateDialog) {
        page.on('dialog', dialog => dialog.dismiss());
    } else {
        page.on('dialog', dialog => dialog.accept());
    }
});
