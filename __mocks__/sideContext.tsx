import * as React from 'react';

import { SideContext } from '../src/Types';
import { WithContextProps } from '../src/libs';

interface GlobalModalContext {
    readonly title: string;
    readonly description?: string;
    readonly visible?: boolean;
}

type GlobalModalProps = WithContextProps<GlobalModalContext>;

class GlobalModal extends React.Component<GlobalModalProps> {
    render() {
        return null;
    }
}

export const sideContext: SideContext<GlobalModalContext> = {
    name: 'sideContext',
    contextType: React.createContext({
        title: 'Global modal'
    }),
    mount: GlobalModal
};