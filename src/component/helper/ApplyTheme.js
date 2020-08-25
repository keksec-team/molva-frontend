
import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import {getColorsByTheme} from "../../resources/themes";

const ApplyTheme = ({ theme, children }) => {
    const colors = getColorsByTheme(theme);
    //Update the CSS Variables
    const updateCSSVariables = colors => {
        const arrayOfVariableKeys = Object.keys(colors);
        const arrayOfVariableValues = Object.values(colors);

        //Loop through each array key and set the CSS Variables
        arrayOfVariableKeys.forEach((cssVariableKey, index) => {
            //Based on our snippet from MDN
            document.documentElement.style.setProperty(
                cssVariableKey,
                arrayOfVariableValues[index]
            );
        });
    };

    //On Component Mount and Component Update
    useEffect(() => {
        updateCSSVariables(colors);
    }, [colors]);

    return <Fragment>{children}</Fragment>;
};

//Connect State To Props
const mapStateToProps = state => ({
    theme: state.style.theme
});
const connectedApplyTheme = connect(mapStateToProps)(ApplyTheme);

export default connectedApplyTheme;