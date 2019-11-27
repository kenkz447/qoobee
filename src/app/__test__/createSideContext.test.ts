import { createSideContext } from '../createSideContext';

interface SideContext {
    readonly foo: number;
    readonly bar: number;
}

describe('createSideContext', () => {
    it('should work correctly', () => {
        var name = 'a_context';
        var mount = () => null;

        const sideContext = createSideContext<SideContext>({
            name,
            mount
        });

        expect(sideContext.contextType).toBeDefined();
        expect(sideContext.event).toBeDefined();
        expect(sideContext.setValue).toEqual(sideContext.event.emit);
    });
});