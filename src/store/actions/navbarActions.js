import {actionTypes} from "./actionTypes";

export const setToggledAction = (isToggled) => {
    return {
        type: actionTypes.SET_NAVBAR_TOGGLED,
        navbarToggled: isToggled
    };
};

export const setLoginPageActive = (isActive) => {
    return {
        type: actionTypes.SET_LOGIN_PAGE_ACTIVE,
        loginPageActive: isActive
    }
}
