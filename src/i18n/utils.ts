import type { JSX } from "astro/jsx-runtime";
import { contents } from "./ui";

const defaultLang = 'en';

export const useTranslations = (lang: keyof typeof contents) => {
    return function t(
        key: keyof typeof contents[typeof defaultLang],
        replacements: Record<string, string | JSX.Element> = {}
    ) {
        const text = contents[lang][key] || contents[defaultLang][key];

        return text.split(/({\w+})/g).map(part => {
            const match = part.match(/{(\w+)}/);

            return match && replacements[match[1]] !== undefined
            ? replacements[match[1]]
            : part;
        })
    }
}