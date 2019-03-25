export interface ServiceWorkerRegistrationProps {
    readonly workerUrl?: string;
    readonly workerOptions?: RegistrationOptions;
    readonly onUpdateFound: ServiceWorkerRegistration['onupdatefound'];
}

export const swRegistration = (props: ServiceWorkerRegistrationProps) => {
    const serviceWorkerEnabled = 'serviceWorker' in navigator;

    if (!serviceWorkerEnabled) {
        return;
    }
    
    const {
        onUpdateFound,
        workerUrl = '/static/service-worker.js',
        workerOptions = { scope: '/' }
    } = props;

    const loadServiceWorker = async () => {
        try {
            const registration = await navigator.serviceWorker.register(workerUrl, workerOptions);
            console.info('SW registered: ', registration);

            registration.onupdatefound = onUpdateFound;

        } catch (registrationError) {
            console.info('SW registration failed: ', registrationError);
        }
    };

    window.addEventListener('load', loadServiceWorker);
};