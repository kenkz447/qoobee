import { View } from '../View';
import { Root } from '../Root';

describe('containers/View', () => {
    it('View.contextType is reference of Root.contextType', () => {
        expect(View.contextType).toEqual(Root.contextType);
    });
});