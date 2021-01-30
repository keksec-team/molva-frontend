import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import styles from "./Main.module.css";
import Navbar from "./controls/navbar/Navbar";
import LanguageSwitch from "./controls/switch/LanguageSwitch";
import {BrowserRouter, Route} from "react-router-dom";
import {Redirect} from "react-router";
import Home from "./home/Home";
import About from "./about/About";
import Contacts from "./contacts/Contacts";
import Projects from "./projects/Projects";
import Social from "./controls/social/Social";
import Project from "./project/Project";
import Login from "./login/Login";
import {pages, resolvePath} from "../../../resources/paths";
import {debounce} from "./controls/helpers/debounce";

function Main(props) {
    const {loginPageActive} = props;
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);
    return (
        <div className="main">
            <BrowserRouter>
                <Navbar visible={visible}/>
                <div className={styles.screen} id="screen">
                    <Route exact path="/">
                        <Redirect to={resolvePath(pages.HOME)}/>
                    </Route>
                    <Route path={resolvePath(pages.HOME)} component={Home}/>
                    <Route path={resolvePath(pages.ABOUT)} component={About}/>
                    <Route path={resolvePath(pages.PROJECT)} component={Project}/>
                    <Route path={resolvePath(pages.PROJECTS)} component={Projects}/>
                    <Route path={resolvePath(pages.CONTACTS)} component={Contacts}/>
                    <Route path={resolvePath(pages.LOGIN)} component={Login}/>
                </div>
                <div className={styles.mainSwitchContainer}>
                    <LanguageSwitch visible={visible}/>
                </div>
                {
                    loginPageActive ? "" : <Social visible={visible}/>
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
