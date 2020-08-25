import {getStringsByLocale} from "../../resources/languages";
import styles from "./Navbar.module.css";
import {connect} from "react-redux";
import React from "react";

function Navbar(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <div className={styles.navbar}>
            <img src={require('../../assets/logo.png')} className={styles.logo} alt="Logotype"/>
            <ul className={styles.links}>
                <li><a href="main">{strings.main}</a></li>
                <li><a href="projects">{strings.projects}</a></li>
                <li><a href="teams">{strings.teams}</a></li>
                <li><a href="contacts">{strings.contacts}</a></li>
                <li><a href="about">{strings.about}</a></li>
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale
})

export default connect(mapStateToProps)(Navbar);