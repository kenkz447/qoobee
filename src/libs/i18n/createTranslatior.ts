interface CreateTranslatiorProps {
    readonly resources: { readonly [langkey: string]: {} };
    readonly defaultLangue?: string;
}

export const createTranslatior = ({
    resources,
    defaultLangue
}: CreateTranslatiorProps) => {
    const lang = localStorage.getItem('lang') ?? defaultLangue;
    
    return (source: string) => {
        if (!lang) {
            return source;
        }

        if (resources[lang]) {
            return resources[lang][source] || source;
        }

        return source;
    };
};