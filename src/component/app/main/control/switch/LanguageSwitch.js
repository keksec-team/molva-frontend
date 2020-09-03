import {connect} from "react-redux";
import React from "react";
import {Slide} from '@material-ui/core';
import Locales from "./locales/Locales";
import useWindowSize from "../helpers/useWindowSize";
import styles from "./LanguageSwitch.module.css";

function LanguageSwitch(props) {
    let {width} = useWindowSize();
    return (
        <div className={styles.localesContainer}>
            {(width <= 600)
                ? (
                    <Slide direction="up" in={props.isToggled} mountOnEnter unmountOnExit>
                        <div><Locales/></div>
                    </Slide>)
                : <Locales/>}
        </div>
    );
}

const mapStateToProps = state => ({
    isToggled: state.controls.navbarToggled
})

export default connect(mapStateToProps)(LanguageSwitch);