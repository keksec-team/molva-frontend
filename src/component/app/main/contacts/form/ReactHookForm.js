import {getStringsByLocale} from "../../../../../resources/languages";
import {connect} from "react-redux";
import styles from "./ReactHookForm.module.css";
import React from "react";
import {useForm} from "react-hook-form";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";


const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'var(--text-color-gray)',
        },
        '& label.MuiFormLabel-root': {
            color: 'var(--text-color-gray)',
            fontFamily: 'Comfortaa'
        },
        '& .MuiInputBase-root': {
            backgroundColor: 'var(--background-color-dark)',
            color: "var(--text-color-gray)",
            fontFamily: 'Comfortaa',
        },
        '& .MuiInputBase-root:hover': {
            backgroundColor: 'rgba(0,0,0,0.2)',
        },
        '& .MuiFilledInput-underline:before': {
            borderColor: 'var(--text-color-gray-light)',
        },
        '& .MuiFilledInput-underline:after': {
            borderColor: 'var(--highlighted-text)',
        },
        '& .MuiFilledInput-root': {
            '& fieldset': {
                borderColor: 'var(--text-color-gray-light)',
            },
            '&:hover fieldset': {
                borderColor: 'var(--highlighted-text)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--highlighted-text)',
            },
        },
    },
})(TextField);

function ReactHookForm(props) {
    let strings = getStringsByLocale(props.locale);
    const {handleSubmit, register, errors} = useForm();
    const useStyles = makeStyles((theme) => ({
        root: {
            display: "flex",
            flexWrap: "wrap"
        },
        margin: {
            margin: theme.spacing(1)
        }
    }));
    const classes = useStyles();
    const names = classes.margin + styles.description;
    const onSubmit = values => console.log(values);
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fields}>
                <CssTextField
                    variant="filled"
                    id="filled-basic"
                    label={strings.contactsFormName}
                    maxLength={30}
                    className={classes.margin}
                    name="name"
                    ref={register()}
                />

                <CssTextField
                    variant="filled"
                    id="filled-basic"
                    label={strings.contactsFormPhone}
                    maxLength={30}
                    className={classes.margin}
                    name="phone"
                    pattern= "[0-9]"
                    ref={register()}
                />

                <CssTextField
                    variant="filled"
                    id="filled-basic"
                    label={strings.contactsFormEmail}
                    maxLength={50}
                    className={classes.margin}
                    name="email"
                    ref={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {errors.email && errors.email.message}

                <CssTextField
                    multiline={true}
                    variant="filled"
                    id="custom-css-outlined-input"
                    label={strings.contactsFormDescription}
                    className={classes.margin}
                    style={{'margin-top': '6vh'}}
                    rowsMax={8}
                    name="description"
                    ref={register()}
                />
            </div>
            <button type='submit' className={styles.button}>{strings.contactUs}</button>
        </form>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale
})

export default connect(mapStateToProps)(ReactHookForm);
