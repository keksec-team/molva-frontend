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
                <li className={styles.navListElement}><a className={styles.navlink} href="main">{strings.main}</a></li>
                <li className={styles.navListElement}><a className={styles.navlink} href="projects">{strings.projects}</a></li>
                <li className={styles.navListElement}><a className={styles.navlink} href="teams">{strings.teams}</a></li>
                <li className={styles.navListElement}><a className={styles.navlink} href="contacts">{strings.contacts}</a></li>
                <li className={styles.navListElement}><a className={styles.navlink} href="about">{strings.about}</a></li>
            </ul>
        </div>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale
})

export default connect(mapStateToProps)(Navbar);