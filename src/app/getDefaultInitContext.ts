import { createBrowserHistory } from 'history';

import { AppCoreContext } from '../Types';

const defaultInitContext: AppCoreContext = {
    currentBreakpoint: 'lg',
    currentLanguage: 'en',
    currentRole: null,
    currentUser: null,
    history: createBrowserHistory(),
    menus: {},
    paths: {},
    policies: {}
};

export const getDefaultInitContext = (): AppCoreContext => {
    return defaultInitContext;
};