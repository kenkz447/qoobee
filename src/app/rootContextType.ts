import * as React from 'react';
import { AppCoreContext } from '../Types';
import { getDefaultInitContext } from './getDefaultInitContext';

export const rootContextType = React.createContext<AppCoreContext>(getDefaultInitContext());
rootContextType.displayName = 'RootContextType';
