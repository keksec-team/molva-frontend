import React from "react";
import {connect} from 'react-redux';
import styles from "./Main.module.css";
import {changeToDarkTheme, changeToLightTheme} from "../../store/actions/themeActions";
import {themes} from "../../resources/themes";
import {changeLanguage, changeTheme} from "../../service/appStateService";
import {getStringsByLocale, locales} from "../../resources/languages";


function Main(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <div className="Main">
            {/*this is temporary demo implementation of this component*/}
            <div className={styles.title}>
                {props.theme}
            </div>
            <button
                onClick={() => props.theme === themes.DARK_THEME ?
                    changeTheme(themes.LIGHT_THEME, dispatch) :
                    changeTheme(themes.DARK_THEME, dispatch)}
                type="button"
            >
                CHANGE THEME
            </button>
            <div className={styles.title}>
                {strings.main}
            </div>
            <button
                onClick={() => props.locale === locales.RUSSIAN_LOCALE ?
                    changeLanguage(locales.ENGLISH_LOCALE, dispatch) :
                    changeLanguage(locales.RUSSIAN_LOCALE, dispatch)}
                type="button"
            >
                CHANGE LANGUAGE
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Main);
