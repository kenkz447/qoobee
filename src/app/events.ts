import EventEmitter from 'eventemitter3';

export const ON_HISTORY_PUSH = 'ON_HISTORY_PUSH';
export const ON_HISTORY_REPLACE = 'ON_HISTORY_REPLACE';

export const events = new EventEmitter();