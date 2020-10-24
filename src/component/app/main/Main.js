import React from "react";
import {connect} from 'react-redux';
import styles from "./Main.module.css";
import Navbar from "./controls/navbar/Navbar";
import LanguageSwitch from "./controls/switch/LanguageSwitch";
import {BrowserRouter} from "react-router-dom";
import {Route, Redirect} from "react-router";
import Home from "./home/Home";
import About from "./about/About";
import Contacts from "./contacts/Contacts";
import Projects from "./projects/Projects";
import Social from "./controls/social/Social";
import Project from "./project/Project";
import Login from "./login/Login";

function Main(props) {
    const { loginPageActive } = props;
    return (
        <div className="main">
            <BrowserRouter>
                {
                    loginPageActive ? "" : <Navbar/>
                }
                <div className={styles.screen} id="screen">
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/project" component={Project}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/login" component={Login}/>
                </div>
                <div className={styles.mainSwitchContainer}>
                    <LanguageSwitch/>
                </div>
                {
                    loginPageActive ? "" : <Social/>
                }
            </BrowserRouter>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    isToggled: state.controls.navbarToggled,
    loginPageActive: state.controls.loginPageActive,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Main);
