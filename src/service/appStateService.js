import {changeToDarkTheme, changeToLightTheme} from "../store/actions/themeActions";
import {locales} from "../resources/languages";
import {changeToEnglishLanguage, changeToRussianLanguage} from "../store/actions/languageActions";
import {themes} from "../resources/themes";
import {setToggledAction} from "../store/actions/navbarActions";

export const changeTheme = (changeTo, dispatch) => {
    switch (changeTo) {
        case themes.LIGHT_THEME:
            return dispatch(changeToLightTheme());
        case themes.DARK_THEME:
            return dispatch(changeToDarkTheme());
        default:
            return dispatch(changeToLightTheme());
    }
};

export const changeLanguage = (locale, dispatch) => {
    switch (locale) {
        case locales.RUSSIAN_LOCALE:
            return dispatch(changeToRussianLanguage());
        case locales.ENGLISH_LOCALE:
            return dispatch(changeToEnglishLanguage());
        default:
            return dispatch(changeToRussianLanguage());
    }
}

export const changeNavbarToggled = (isToggled, dispatch) => {
    return dispatch(setToggledAction(isToggled))
}
