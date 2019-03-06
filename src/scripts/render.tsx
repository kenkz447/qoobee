import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Root, RootProps } from './containers';

export const render = (rootElement: HTMLElement, rootProps: RootProps) => {
    ReactDOM.render(<Root {...rootProps} />, rootElement);
};