import {getStringsByLocale} from "../../../../../../resources/languages";
import styles from "./Menu.module.css";
import {connect} from "react-redux";
import React from "react";
import {Link} from 'react-router-dom';
import LanguageSwitch from "../../switch/LanguageSwitch";

function Menu(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <div className={styles.menu} id="menu">
            <ul className={styles.links}>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to="/home">
                        {strings.home}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to="/projects">
                        {strings.projects}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to="/creators">
                        {strings.creators}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to="/contacts">
                        {strings.contacts}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to="/about">
                        {strings.about}
                    </Link>
                </li>
            </ul>
            <div className={styles.menuSwitchContainer}>
                <LanguageSwitch/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale,
})

export default connect(mapStateToProps)(Menu);