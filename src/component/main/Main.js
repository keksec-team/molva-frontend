import React from "react";
import { connect } from 'react-redux';
import styles from "./Main.module.css";
import {changeToDarkTheme, changeToLightTheme} from "../../store/actions/themeActions";
import {themes} from "../../resources/themes";


function Main(props) {
    const { dispatch } = props;
    const changeTheme = changeTo => {
        switch (changeTo) {
            case "light":
                return dispatch(changeToLightTheme());
            case "dark":
                return dispatch(changeToDarkTheme());
            default:
                return dispatch(changeToLightTheme());
        }
    };
    return (
        <div className="Main">
            {/*this is temporary implementation of this component*/}
            <div className={styles.title}>
                {props.theme}
            </div>
            <button
                onClick={() => props.theme === themes.DARK_THEME ? changeTheme("light") : changeTheme("dark")}
                type="button"
            >
                Light Theme
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Main);