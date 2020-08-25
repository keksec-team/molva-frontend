import {actions} from "../actions";
import {locales} from "../../resources/languages";

const initialState = {
    locale: locales.RUSSIAN_LOCALE,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_RUSSIAN_LOCALE:
            return {
                locale: locales.RUSSIAN_LOCALE
            }
        case actions.SET_ENGLISH_LOCALE:
            return {
                locale: locales.ENGLISH_LOCALE
            }
        default:
            return state;
    }
}