import {getStringsByLocale, locales} from "../../../../../resources/languages";
import styles from "./LanguageSwitch.module.css";
import {connect} from "react-redux";
import React from "react";
import {changeLanguage} from "../../../../../service/appStateService";

function LanguageSwitch(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <div className={styles.localesContainer}>
            <ul className={styles.switch}>
                <li className={styles.languageListElement} onClick={() => changeLanguage(locales.ENGLISH_LOCALE, dispatch)}>
                    {strings.englishLocale}
                </li>
                <span className={styles.languageListElement}>|</span>
                <li className={styles.languageListElement} onClick={() => changeLanguage(locales.RUSSIAN_LOCALE, dispatch)}>
                    {strings.russianLocale}
                </li>
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale
})

export default connect(mapStateToProps)(LanguageSwitch);