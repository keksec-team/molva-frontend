import {connect} from "react-redux";
import React from "react";
import styles from "./Social.module.css";
import {getStringsByLocale} from "../../../../../resources/languages";

function Social(props) {
    let strings = getStringsByLocale(props.locale);
    let socials = [strings.socialVk, strings.socialFacebook, strings.socialInstagram]
    return (
        <div className={styles.socialContainer}>
            {
                socials.map((social, i) =>
                    <div className={`${styles.social} ${i === 0 ? styles.first : ""}`}>{social}</div>
                )
            }
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Social);