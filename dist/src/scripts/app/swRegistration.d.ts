export interface ServiceWorkerRegistrationProps {
    readonly workerUrl?: string;
    readonly workerOptions?: RegistrationOptions;
    readonly onUpdateFound: ServiceWorkerRegistration['onupdatefound'];
}
export declare const swRegistration: (props: ServiceWorkerRegistrationProps) => void;
