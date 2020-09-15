import React from "react";
import {connect} from 'react-redux';
import styles from "./Main.module.css";
import {getStringsByLocale} from "../../../resources/languages";
import Navbar from "./control/navbar/Navbar";
import LanguageSwitch from "./control/switch/LanguageSwitch";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Home from "./home/Home";
import About from "./about/About";


function Main(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <div className="main">
            <BrowserRouter>
                <Navbar/>
                <div className={styles.screen}>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
                <div className={styles.mainSwitchContainer}>
                    <LanguageSwitch/>
                </div>
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
