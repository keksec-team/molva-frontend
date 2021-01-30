import {connect} from "react-redux";
import React from "react";
import Locales from "./locales/Locales";
import useWindowSize from "../helpers/useWindowSize";
import styles from "./LanguageSwitch.module.css";

function LanguageSwitch(props) {
    const {visible} = props;
    let {width} = useWindowSize();
    return (
        <div className={styles.localesContainer} style={(width <= 650) ? {} : { bottom: visible ? '0' : '-10vmin' }}>
            <Locales/>
        </div>
    );
}

const mapStateToProps = state => ({
    isToggled: state.controls.navbarToggled
})

export default connect(mapStateToProps)(LanguageSwitch);