import {actionTypes} from "./actionTypes";

export const setToggledAction = (isToggled) => {
    return {
        type: actionTypes.SET_NAVBAR_TOGGLED,
        navbarToggled: isToggled
    };
};
