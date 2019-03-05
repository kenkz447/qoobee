"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swRegistration = (props) => {
    const serviceWorkerEnabled = 'serviceWorker' in navigator;
    if (!serviceWorkerEnabled) {
        return;
    }
    const { onUpdateFound, workerUrl = '/static/service-worker.js', workerOptions = { scope: '/' } } = props;
    const loadServiceWorker = () => __awaiter(this, void 0, void 0, function* () {
        try {
            const registration = yield navigator.serviceWorker.register(workerUrl, workerOptions);
            console.info('SW registered: ', registration);
            registration.onupdatefound = onUpdateFound;
        }
        catch (registrationError) {
            console.info('SW registration failed: ', registrationError);
        }
    });
    window.addEventListener('load', loadServiceWorker);
};
