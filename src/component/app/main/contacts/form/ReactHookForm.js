import {getStringsByLocale} from "../../../../../resources/languages";
import {connect} from "react-redux";
import styles from "./ReactHookForm.module.css";
import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {CustomInputField, useStyles} from "./input/CustomInput";


function ReactHookForm(props) {

    const classes = useStyles();

    let strings = getStringsByLocale(props.locale);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const {handleSubmit, register, errors} = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
    });

    const onCLick = () => {
        setName(document.getElementById("input-name").value)
        setPhone(document.getElementById("input-phone").value)
        setEmail(document.getElementById("input-email").value)
        setDescription(document.getElementById("input-description").value)
    }
    const onSubmit = values => {
        console.log(values);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fields}>
                <CustomInputField
                    defaultValue={name}
                    name="name"
                    variant="filled"
                    id="input-name"
                    label={strings.contactsFormName + '*'}
                    type="text"
                    helperText={errors.name?.message}
                    className={classes.margin}
                    inputProps={{
                        maxLength: 30,
                    }}
                    inputRef={register({
                        maxLength: 30,
                        required: strings.validationNameRequired,
                        minLength: {
                            value: 2,
                            message: strings.validationNameLength
                        },
                    })}
                    autoComplete='name'
                    error={!!errors.name}
                />

                <CustomInputField
                    name="phone"
                    variant="filled"
                    id="input-phone"
                    label={strings.contactsFormPhone}
                    helperText={errors.phone?.message}
                    maxLength={2}
                    className={classes.margin}
                    inputProps={{
                        maxLength: 30,
                    }}
                    autoComplete='tel'
                    error={!!errors.phone}
                    inputRef={register()}
                    defaultValue={phone}
                />

                <CustomInputField
                    name="email"
                    variant="filled"
                    id="input-email"
                    label={strings.contactsFormEmail + '*'}
                    helperText={errors.email?.message}
                    className={classes.margin}
                    inputProps={{
                        maxLength: 50,
                    }}
                    inputRef={register({
                        required: strings.validationEmailRequired,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: strings.validationEmailWrongPattern
                        }
                    })}
                    autoComplete='email'
                    error={!!errors.email}
                    defaultValue={email}
                />

                <CustomInputField
                    name="description"
                    multiline={true}
                    variant="filled"
                    id="input-description"
                    label={strings.contactsFormDescription}
                    helperText={errors.description?.message}
                    className={classes.margin}
                    style={{'margin-top': '6vh'}}
                    rowsMax={8}
                    inputProps={{
                        maxLength: 3000,
                    }}
                    inputRef={register()}
                    error={!!errors.description}
                    defaultValue={description}
                />
            </div>
            <button type='submit' onClick={() => onCLick()} className={styles.button}>{strings.contactUs}</button>
        </form>
    );
}

const mapStateToProps = state => ({
    locale: state.language.locale
})

export default connect(mapStateToProps)(ReactHookForm);
