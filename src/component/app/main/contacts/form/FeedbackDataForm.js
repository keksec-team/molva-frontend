import {getStringsByLocale} from "../../../../../resources/languages";
import {Form, Field} from "@progress/kendo-react-form";
import {connect} from "react-redux";
import styles from "./FeedbackDataForm.module.css";
import React from "react";
import Input from "@material-ui/core/Input";
import {MuiThemeProvider} from "@material-ui/core";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import {theme} from "./InputTheme";
import {Error} from "@material-ui/icons";

function FeedbackDataForm(props) {
    let strings = getStringsByLocale(props.locale);
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [description, setDescription] = React.useState("");

    const handleSubmit = (data, event) => {
        console.log(`
            Name: ${data.name}
            Phone: ${data.phone}
            Email: ${data.email}
            Description: ${data.description}`);
        event.preventDefault();
    }

    return (
        <MuiThemeProvider theme={theme}>
            <Form
                onSubmit={handleSubmit}
                initialValues={{}}
                render={(formRenderProps) => (
                    <form className={styles.form} onSubmit={formRenderProps.onSubmit}>
                        <div className={styles.fields}>
                            <Input
                                className={styles.field}
                                label={strings.contactsFormName}
                                placeholder={strings.contactsFormName}
                                name="name"
                                type="name"
                                inputProps={{
                                    maxLength: 30,
                                }}
                            />

                            <Input
                                className={styles.field}
                                label={strings.contactsFormPhone}
                                placeholder={strings.contactsFormPhone}
                                name="phone"
                                type="phone"
                                inputProps={{
                                    maxLength: 20,
                                }}
                            />

                            <Input
                                className={styles.field}
                                label={strings.contactsFormEmail}
                                placeholder={strings.contactsFormEmail}
                                name="email"
                                type="email"
                                inputProps={{
                                    maxLength: 30,
                                }}
                            />

                            <Input
                                className={styles.field}
                                label={strings.contactsFormDescription}
                                placeholder={strings.contactsFormDescription}
                                name="description"
                                fieldType="description"
                                component={TextField}
                                multiline
                                rows={8}
                                inputProps={{
                                    maxLength: 1000,
                                }}
                            />
                        </div>
                        <button type={'submit'} className={styles.button}>{strings.contactUs}</button>
                    </form>
                )}>
            </Form>
        </MuiThemeProvider>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale
})

export default connect(mapStateToProps)(FeedbackDataForm);
