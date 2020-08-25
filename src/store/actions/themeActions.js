import {actionTypes} from "./actionTypes";

export const changeToLightTheme = () => {
    return {
        type: actionTypes.SET_LIGHT_THEME
    };
};

export const changeToDarkTheme = () => {
    return {
        type: actionTypes.SET_DARK_THEME
    };
};
