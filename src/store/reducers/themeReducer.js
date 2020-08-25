import {themes} from "../../resources/themes";
import {actions} from "../actions";

const initialState = {
    theme: themes.DARK_THEME
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.SET_DARK_THEME:
            return {
                theme: themes.DARK_THEME
            }
        case actions.SET_LIGHT_THEME:
            return {
                theme: themes.LIGHT_THEME
            }
        default:
            return state;
    }
}