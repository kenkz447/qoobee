interface CreateTranslatiorProps {
    readonly resources: {
        readonly [langkey: string]: {};
    };
    readonly defaultLangue?: string;
}
export declare const createTranslatior: ({ resources, defaultLangue }: CreateTranslatiorProps) => (source: string) => any;
export {};
