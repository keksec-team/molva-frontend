import {getStringsByLocale, locales} from "../../../../../resources/languages";
import styles from "./LanguageSwitch.module.css";
import {connect} from "react-redux";
import React from "react";
import {changeLanguage} from "../../../../../service/appStateService";
import {Slide} from '@material-ui/core';

function LanguageSwitch(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <Slide direction="up" in={props.isToggled} mountOnEnter unmountOnExit>
            <div className={styles.localesContainer}>
                <ul className={styles.switch}>
                    <li className={styles.languageListElement}
                        onClick={() => changeLanguage(locales.ENGLISH_LOCALE, dispatch)}>
                        {strings.englishLocale}
                    </li>
                    <span className={styles.languageListElement}>|</span>
                    <li className={styles.languageListElement}
                        onClick={() => changeLanguage(locales.RUSSIAN_LOCALE, dispatch)}>
                        {strings.russianLocale}
                    </li>
                </ul>
            </div>
        </Slide>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale,
    isToggled: state.controls.navbarToggled
})

export default connect(mapStateToProps)(LanguageSwitch);