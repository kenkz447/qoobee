// jsdom: Error: Not implemented: window.scrollTo
const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });