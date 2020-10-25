import {getStringsByLocale} from "../../../../../../resources/languages";
import styles from "./Menu.module.css";
import {connect} from "react-redux";
import React from "react";
import {Link} from 'react-router-dom';
import LanguageSwitch from "../../switch/LanguageSwitch";
import {pages, resolvePath} from "../../../../../../resources/paths";

function Menu(props) {
    let strings = getStringsByLocale(props.locale);
    return (
        <div className={styles.menu} id="menu">
            <ul className={styles.links}>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to={resolvePath(pages.HOME)}>
                        {strings.home}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to={resolvePath(pages.PROJECTS)}>
                        {strings.projects}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to={resolvePath(pages.CREATORS)}>
                        {strings.creators}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to={resolvePath(pages.ABOUT)}>
                        {strings.about}
                    </Link>
                </li>
                <li className={styles.navListElement}>
                    <Link className={styles.navLink} to={resolvePath(pages.CONTACTS)}>
                        {strings.contacts}
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