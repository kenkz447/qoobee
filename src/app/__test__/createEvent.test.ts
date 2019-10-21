import { events } from '../events';
import { createEvent } from '../createEvent';

interface TestEventPayload {
    readonly name: string;
    readonly message: string;
}

describe('createEvent', () => {
    const event = createEvent<TestEventPayload>('SOME_EVENT');
    const payload: TestEventPayload = {
        message: 'abc',
        name: 'abc'
    };

    const listener = jest.fn();
    const unListen = event.listen(listener);

    afterEach(() => {
        listener.mockClear();
    });

    it('should listen', () => {
        event.emit(payload);

        expect(listener).toBeCalledTimes(1);
        expect(listener).toBeCalledWith(payload);
    });

    it('should unListen', () => {
        unListen();
        event.emit(payload);

        const listenCount = events.listenerCount(event.name);
        expect(listenCount).toBe(0);
        expect(listener).not.toBeCalled();
    });
});