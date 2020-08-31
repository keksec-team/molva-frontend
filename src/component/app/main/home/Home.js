import React from "react";
import {connect} from 'react-redux';
import {getStringsByLocale} from "../../../../resources/languages";
import styles from "./Home.module.css";
import Navbar from "../control/navbar/Navbar";
import LanguageSwitch from "../control/switch/LanguageSwitch";


function Home(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <div className={styles.home}>
            {/*write implementation*/}
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Home);
