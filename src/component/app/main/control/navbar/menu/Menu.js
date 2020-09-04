import {getStringsByLocale} from "../../../../../../resources/languages";
import styles from "../Navbar.module.css";
import {connect} from "react-redux";
import React from "react";
import {Link} from 'react-router-dom';
import LanguageSwitch from "../../switch/LanguageSwitch";

function Menu(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <div className={styles.menu} id="menu">
            <img src={require('../../../../../../assets/logo.png')} className={styles.logo} alt="Logotype"/>
            <ul className={styles.links}>
                <li className={styles.navListElement}>
                    <Link className={styles.navlink} to="/home">
                        {strings.home}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navlink} to="/projects">
                        {strings.projects}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navlink} to="/creators">
                        {strings.creators}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navlink} to="/contacts">
                        {strings.contacts}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navlink} to="/about">
                        {strings.about}
                    </Link>
                </li>
            </ul>
            <LanguageSwitch/>
        </div>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale,
})

export default connect(mapStateToProps)(Menu);