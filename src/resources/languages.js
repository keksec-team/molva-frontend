import { strings } from "./strings";
import {LocaleException} from "./exceptions/LocaleException";

export let locales = {
    RUSSIAN_LOCALE: "RU",
    ENGLISH_LOCALE: "EN"
}

export function getStringsByLocale(locale) {
    switch (locale) {
        case locales.RUSSIAN_LOCALE: return strings.russian;
        case locales.ENGLISH_LOCALE: return strings.english;
        default: throw new LocaleException("This locale does not exist!")
    }
}
