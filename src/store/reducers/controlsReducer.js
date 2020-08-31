import {actionTypes} from "../actions/actionTypes";

const initialState = {
    navbarToggled: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_NAVBAR_TOGGLED: {
            return {
                navbarToggled: action.navbarToggled
            }
        }
        default:
            return state;
    }
}
