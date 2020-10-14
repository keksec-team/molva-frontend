import React from "react";
import {connect} from 'react-redux';
import {getStringsByLocale} from "../../../../resources/languages";
import styles from "./Contacts.module.css";
import {Slide} from "@material-ui/core";
import ReactHookForm from "./form/ReactHookForm";


function Contacts(props) {
    let strings = getStringsByLocale(props.locale);
    return (
        <div className={styles.contacts}>
            <div className={styles.contactsFlexContainer}>
                <Slide direction={"right"} in={true} mountOnEnter unmountOnExit>
                    <div className={styles.text}>
                        <h1 className={styles.title}>{strings.contactsTitle}</h1>
                        <p className={styles.paragraph}>{strings.contactsParagraph}</p>
                    </div>
                </Slide>
                <ReactHookForm/>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Contacts);
