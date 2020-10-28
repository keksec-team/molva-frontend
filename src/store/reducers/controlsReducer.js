import {actionTypes} from "../actions/actionTypes";

const initialState = {
    navbarToggled: false,
    loginPageActive: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_NAVBAR_TOGGLED: {
            return {
                ...state,
                navbarToggled: action.navbarToggled
            }
        }
        case actionTypes.SET_LOGIN_PAGE_ACTIVE: {
            return {
                ...state,
                loginPageActive: action.loginPageActive
            }
        }
        default:
            return state;
    }
}
