import { SideContext } from '../Types';
export declare const createSideContext: <C = {}>(props: Partial<SideContext<C>> & Pick<SideContext<{}>, "name"> & Pick<SideContext<{}>, "mount">) => SideContext<C>;
