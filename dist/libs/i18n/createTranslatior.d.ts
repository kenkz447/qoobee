interface CreateTranslatiorProps {
    readonly resources: {
        readonly [langkey: string]: {};
    };
}
export declare const createTranslatior: ({ resources }: CreateTranslatiorProps) => (source: string) => any;
export {};
