import { Frame, Page } from 'playwright';
import { ElementLocator } from '../env/global';
import { ElementHandle } from '@playwright/test';

export const clickElement = async (page: Page, elementIdentifier: ElementLocator): Promise<void> => {
    await page.click(elementIdentifier);
};

export const clickElementAtIndex = async (page: Page, elementIdentifier: ElementLocator, elementPosition: number): Promise<void> => {
    const element = await page.$(`${elementIdentifier}>>nth=${elementPosition}`);
    await element?.click();
};

export const inputElementValue = async (page: Page, elementIdentifier: ElementLocator, input: string): Promise<void> => {
    await page.focus(elementIdentifier);
    await page.fill(elementIdentifier, input);
};

export const selectElementValue = async (page: Page, elementIdentifier: ElementLocator, option: string): Promise<void> => {
    await page.focus(elementIdentifier);
    await page.selectOption(elementIdentifier, option);
};

export const checkElement = async (page: Page, elementIdentifier: ElementLocator): Promise<void> => {
    await page.check(elementIdentifier);
};

export const uncheckElement = async (page: Page, elementIdentifier: ElementLocator): Promise<void> => {
    await page.uncheck(elementIdentifier);
};

export const inputValueOnIframe = async (elementIframe: Frame, elementIdentifier: ElementLocator, inputValue: string): Promise<void> => {
    await elementIframe.fill(elementIdentifier, inputValue);
};

export const inputValueOnPage = async (
    pages: Array<Page>,
    pageIndex: number,
    elementIdentifier: ElementLocator,
    inputValue: string,
): Promise<void> => {
    await pages[pageIndex].focus(elementIdentifier);
    await pages[pageIndex].fill(elementIdentifier, inputValue);
};

export const scrollElementIntoView = async (page: Page, elementIdentifier: ElementLocator): Promise<void> => {
    const element = page.locator(elementIdentifier);
    await element.scrollIntoViewIfNeeded();
};

export const getElement = async (page: Page, elementIdentifier: ElementLocator): Promise<ElementHandle<SVGElement | HTMLElement> | null> => {
    return page.$(elementIdentifier);
};

export const getElements = async (page: Page, elementIdentifier: ElementLocator): Promise<ElementHandle<SVGElement | HTMLElement>[]> => {
    return page.$$(elementIdentifier);
};

export const getElementAtIndex = async (
    page: Page,
    elementIdentifier: ElementLocator,
    index: number,
): Promise<ElementHandle<SVGElement | HTMLElement> | null> => {
    return page.$(`${elementIdentifier}>>nth=${index}`);
};

export const getElementValue = async (page: Page, elementIdentifier: ElementLocator): Promise<string | null> => {
    return page.$eval<string, HTMLSelectElement>(elementIdentifier, el => {
        return el.value;
    });
};

export const getIframeElement = async (page: Page, iframeIdentifier: ElementLocator): Promise<Frame | undefined | null> => {
    const elementHandle = await page.$(iframeIdentifier);
    return elementHandle?.contentFrame();
};

export const getElementWithinIframe = async (
    elementIframe: Frame,
    elementIdentifier: ElementLocator,
): Promise<ElementHandle<SVGElement | HTMLElement> | null> => {
    return elementIframe?.$(elementIdentifier);
};

export const getTextWithinIframeElement = async (elementIframe: Frame, elementIdentifier: ElementLocator): Promise<string | null> => {
    return elementIframe?.textContent(elementIdentifier);
};

export const getTitleWithinPage = async (page: Page, pages: Array<Page>, pageIndex: number): Promise<string | null> => {
    return pages[pageIndex].title();
};

export const getElementOnPage = async (
    page: Page,
    elementIdentifier: ElementLocator,
    pages: Array<Page>,
    pageIndex: number,
): Promise<ElementHandle<SVGElement | HTMLElement> | null> => {
    return pages[pageIndex].$(elementIdentifier);
};

export const getElementTextWithinPage = async (
    page: Page,
    elementIdentifier: ElementLocator,
    pages: Array<Page>,
    pageIndex: number,
): Promise<string | null> => {
    return pages[pageIndex].textContent(elementIdentifier);
};

export const getAttributeText = async (page: Page, elementIdentifier: ElementLocator, attribute: string): Promise<string | null> => {
    return page.locator(elementIdentifier).getAttribute(attribute);
};

export const getElementText = async (page: Page, elementIdentifier: ElementLocator): Promise<string | null> => {
    return page.textContent(elementIdentifier);
};

export const getElementTextAtIndex = async (page: Page, elementIdentifier: ElementLocator, index: number): Promise<string | null> => {
    return page.textContent(`${elementIdentifier}>>nth=${index}`);
};

export const getTableData = async (page: Page, elementIdentifier: ElementLocator): Promise<string> => {
    const table = await page.$$eval(elementIdentifier + ' tbody tr', rows => {
        return rows.map(row => {
            const cells = row.querySelectorAll('td');
            return Array.from(cells).map(cell => cell.textContent);
        });
    });
    return JSON.stringify(table);
};

export const elementEnabled = async (page: Page, elementIdentifier: ElementLocator): Promise<boolean | null> => {
    return page.isEnabled(elementIdentifier);
};

export const elementChecked = async (page: Page, elementIdentifier: ElementLocator): Promise<boolean | null> => {
    return page.isChecked(elementIdentifier);
};
