export interface ServiceWorkerRegistrationProps {
    readonly workerUrl?: string;
    readonly workerOptions?: RegistrationOptions;
    readonly onUpdateFound: () => Promise<void>;
}
export declare const swRegistration: (props: ServiceWorkerRegistrationProps) => void;
