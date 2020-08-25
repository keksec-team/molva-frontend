import {themes} from "../../resources/themes";
import {actionTypes} from "../actions/actionTypes";

const initialState = {
    theme: themes.DARK_THEME
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_DARK_THEME:
            return {
                theme: themes.DARK_THEME
            }
        case actionTypes.SET_LIGHT_THEME:
            return {
                theme: themes.LIGHT_THEME
            }
        default:
            return state;
    }
}