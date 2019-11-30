import { SideContext } from '../Types';
export declare const createSideContext: <C = {}>(props: Partial<SideContext<C>> & Pick<SideContext<C>, "name"> & Pick<SideContext<C>, "mount">) => SideContext<C>;
