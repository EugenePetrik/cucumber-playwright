export type PageId = string;
export type ElementKey = string;
export type ElementLocator = string;
export type WaitForTargetType = string;
export type WaitForTarget = PageId | ElementKey;
export type PageElementMappings = Record<PageId, Record<ElementKey, ElementLocator>>;
export type PagesConfig = Record<PageId, Record<string, string>>;
export type HostsConfig = Record<string, string>;
export type ErrorsConfig = ErrorConfig[];
export type GlobalVariables = { [key: string]: string };
export type EmailsConfig = Record<string, string>;

export type ErrorConfig = {
    originalErrMsgRegexString: string;
    parsedErrMsg: string;
};

export type GlobalConfig = {
    pageElementMappings: PageElementMappings;
    hostsConfig: HostsConfig;
    pagesConfig: PagesConfig;
    errorsConfig: ErrorsConfig;
    emailsConfig: EmailsConfig;
};
