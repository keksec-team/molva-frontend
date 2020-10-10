import React from "react";
import {connect} from 'react-redux';
import styles from "./Main.module.css";
import Navbar from "./control/navbar/Navbar";
import LanguageSwitch from "./control/switch/LanguageSwitch";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Home from "./home/Home";
import About from "./about/About";
import Contacts from "./contacts/Contacts";
import Projects from "./projects/Projects";
import Social from "./control/social/Social";

function Main(props) {
    return (
        <div className="main">
            <BrowserRouter>
                <Navbar/>
                <div className={styles.screen} id="screen">
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contacts" component={Contacts}/>
                </div>
                <div className={styles.mainSwitchContainer}>
                    <LanguageSwitch/>
                </div>
                <Social />
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
