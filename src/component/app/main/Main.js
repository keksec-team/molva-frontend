import React from "react";
import {connect} from 'react-redux';
import styles from "./Main.module.css";
import {getStringsByLocale} from "../../../resources/languages";
import Navbar from "./control/navbar/Navbar";
import LanguageSwitch from "./control/switch/LanguageSwitch";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Home from "./home/Home";


function Main(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <div className="main">
            {/*this is temporary demo implementation of this component*/}
            <BrowserRouter>
                <Navbar/>
                <div className={`${styles.dark} ${props.isToggled ? styles.active : ""}`} />
                <div className={`${styles.screen} ${props.isToggled ? styles.disabled : ""}`}>
                    <Route path="/home" component={Home}/>
                </div>
                <LanguageSwitch/>
            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    isToggled: state.controls.navbarToggled,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Main);
