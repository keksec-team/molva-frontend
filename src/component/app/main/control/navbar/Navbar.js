import {getStringsByLocale} from "../../../../../resources/languages";
import styles from "./Navbar.module.css";
import {connect} from "react-redux";
import React from "react";
import {Link} from 'react-router-dom';

function Navbar(props) {
    const {dispatch} = props;
    const runSlideInAnimation = () => {
        const menuNode = document.getElementById("menu");
        menuNode.classList.remove(styles.slideOutAnimation)
        menuNode.classList.add(styles.slideInAnimation);
        menuNode.className = `${styles.menu} ${styles.slideInAnimation} ${styles.active}`;
    }
    const runSlideOutAnimation = () => {
        const menuNode = document.getElementById("menu");
        menuNode.classList.remove(styles.slideInAnimation)
        menuNode.classList.add(styles.slideOutAnimation);
        setTimeout(() => menuNode.classList.remove(styles.active), 200)
    }

    const onClick = () => {
        if (document.getElementById("menu").classList.contains(styles.active)) {
            runSlideOutAnimation();
        } else {
            runSlideInAnimation();
        }
    }

    let strings = getStringsByLocale(props.locale);
    return (
        <div className={styles.nav}>
            <label className={styles.toggleLabel} onClick={() => onClick()}>&#9776;</label>
            <div className={styles.menu} id="menu">
                <img src={require('../../../../../assets/logo.png')} className={styles.logo} alt="Logotype"/>
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
                        <Link className={styles.navlink} href="/creators">
                            {strings.creators}
                        </Link>
                    </li>
                    <li className={styles.navListElement}>
                        <Link className={styles.navlink} href="/contacts">
                            {strings.contacts}
                        </Link>
                    </li>
                    <li className={styles.navListElement}>
                        <Link className={styles.navlink} href="/about">
                            {strings.about}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale
})

export default connect(mapStateToProps)(Navbar);