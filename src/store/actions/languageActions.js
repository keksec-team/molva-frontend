import {actionTypes} from "./actionTypes";

export const changeToEnglishLanguage = () => {
    return {
        type: actionTypes.SET_ENGLISH_LOCALE
    };
};

export const changeToRussianLanguage = () => {
    return {
        type: actionTypes.SET_RUSSIAN_LOCALE
    };
};
