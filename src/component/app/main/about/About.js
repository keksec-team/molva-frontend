import React from "react";
import {connect} from 'react-redux';
import {getStringsByLocale} from "../../../../resources/languages";
import styles from "./About.module.css";
import {Slide} from "@material-ui/core";
import useWindowSize from "../control/helpers/useWindowSize";


function About(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    let {width} = useWindowSize();
    return (
        <div className={styles.about}>
            <Slide direction={"right"} in={true} mountOnEnter unmountOnExit>
                <div className={styles.text}>
                    <h1 className={styles.title}>{strings.about}</h1>
                    <h2 className={styles.description}>{strings.aboutDescription}</h2>
                    <p className={styles.paragraph}>{strings.aboutParagraph}</p>
                </div>
            </Slide>
            <div className={styles.pictures}>
                <div className={styles.gamesContainer}>
                    <img src={require('../../../../assets/console.svg')} className={styles.games} alt="Games"/>
                    <p className={styles.gamesTitle}>{strings.gamesTitle}</p>
                </div>
                <div className={styles.codeContainer}>
                    <img src={require('../../../../assets/code.svg')} className={styles.code} alt="Code"/>
                    <p className={styles.codeTitle}>{strings.codeTitle}</p>
                </div>
                <div className={styles.productContainer}>
                    <img src={require('../../../../assets/product.svg')} className={styles.product} alt="Product"/>
                    <p className={styles.productTitle}>{strings.productTitle}</p>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.contactUs}>{strings.contactUs}</button>
                    <button className={styles.ourProjects}>{strings.ourProjects}</button>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(About);
