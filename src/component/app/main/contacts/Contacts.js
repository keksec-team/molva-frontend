import React from "react";
import {connect} from 'react-redux';
import {getStringsByLocale} from "../../../../resources/languages";
import styles from "./Contacts.module.css";
import {Slide} from "@material-ui/core";
import useWindowSize from "../control/helpers/useWindowSize";
import FeedbackDataForm from "./form/FeedbackDataForm";


function Contacts(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    let {width} = useWindowSize();
    return (
        <div className={styles.contacts}>
            <div className={styles.contactsFlexContainer}>
                <Slide direction={"right"} in={true} mountOnEnter unmountOnExit>
                    <div className={styles.text}>
                        <h1 className={styles.title}>{strings.contacts}</h1>
                        <p className={styles.paragraph}>{strings.contactsParagraph}</p>
                    </div>
                </Slide>
                <FeedbackDataForm/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Contacts);
