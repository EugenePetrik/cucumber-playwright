import { When, DataTable } from '@cucumber/cucumber';
import { ScenarioWorld } from '../setup/world';
import { getElementLocator } from '../../support/web-element-helper';
import { ElementKey } from '../../env/global';
import { waitFor } from '../../support/wait-for-behavior';

When(
    /^the "([^"]*)" table should( not)? equal the following:$/,
    async function (this: ScenarioWorld, elementKey: ElementKey, negate: boolean, dataTable: DataTable) {
        const {
            screen: { page },
            globalConfig,
        } = this;

        console.log(`The ${elementKey} table should ${negate ? 'not' : ''} equal the following:`);

        const elementIdentifier = getElementLocator(page, elementKey, globalConfig);

        await waitFor(async () => {
            const dataBefore = await page.$$eval(elementIdentifier + ' tbody tr', rows => {
                return rows.map(row => {
                    const cells = row.querySelectorAll('td');
                    return Array.from(cells).map(cell => cell.textContent);
                });
            });

            console.log('HTML table ', JSON.stringify(dataBefore));
            console.log('Cucumber table ', JSON.stringify(dataTable.raw()));

            return (JSON.stringify(dataBefore) === JSON.stringify(dataTable.raw())) === !negate;
        });
    },
);
