interface CreateTranslatiorProps {
    readonly resources: { readonly [langkey: string]: {} };
}

export const createTranslatior = ({
    resources
}: CreateTranslatiorProps) => {
    const lang = localStorage.getItem('lang');
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