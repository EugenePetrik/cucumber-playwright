import { Page } from 'playwright';
import { GlobalConfig, PageId } from '../env/global';

export const navigateToPage = async (page: Page, pageId: PageId, { pagesConfig, hostsConfig }: GlobalConfig): Promise<void> => {
    const { UI_AUTOMATION_HOST: hostName = 'localhost' } = process.env;

    const hostPath = hostsConfig[`${hostName}`];

    const url = new URL(hostPath);
    const pagesConfigItem = pagesConfig[pageId];

    url.pathname = pagesConfigItem.route;

    await page.goto(url.href);
};

const pathMatchesPageId = (path: string, pageId: PageId, { pagesConfig }: GlobalConfig): boolean => {
    const pageRegexString = pagesConfig[pageId].regex;
    const pageRegex = new RegExp(pageRegexString);
    return pageRegex.test(path); // "^/$" expect to equal "/"
};

export const currentPathMatchesPageId = (page: Page, pageId: PageId, globalConfig: GlobalConfig): boolean => {
    const { pathname: currentPath } = new URL(page.url());
    // logger.log('currentPath', currentPath);
    return pathMatchesPageId(currentPath, pageId, globalConfig);
};

export const getCurrentPageId = (page: Page, globalConfig: GlobalConfig): PageId => {
    const { pagesConfig } = globalConfig;
    // logger.log('pagesConfig', pagesConfig);

    const pageConfigPageIds = Object.keys(pagesConfig);
    // logger.log('pageConfigPageIds', pageConfigPageIds);

    const { pathname: currentPath } = new URL(page.url());

    const currentPageId = pageConfigPageIds.find(pageId => {
        return pathMatchesPageId(currentPath, pageId, globalConfig);
    });

    // logger.log('currentPageId', currentPageId);

    if (!currentPageId) {
        throw new Error(`Failed to get page name from current route ${currentPath}, possible pages: ${JSON.stringify(pagesConfig)}`);
    }

    return currentPageId;
};

export const reloadPage = async (page: Page): Promise<void> => {
    await page.reload();
};
