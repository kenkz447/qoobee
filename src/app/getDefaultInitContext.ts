import { createBrowserHistory } from 'history';

import { AppCoreContext } from '../Types';

export const getDefaultInitContext = (): AppCoreContext => {
    return {
        currentBreakpoint: 'lg',
        currentLanguage: 'en',
        currentRole: null,
        currentUser: null,
        history: createBrowserHistory(),
        menus: {},
        paths: {},
        policies: {}
    };
};