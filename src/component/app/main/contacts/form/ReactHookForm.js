import {getStringsByLocale} from "../../../../../resources/languages";
import {connect} from "react-redux";
import styles from "./ReactHookForm.module.css";
import React from "react";
import {useForm} from "react-hook-form";

function ReactHookForm(props) {
    let strings = getStringsByLocale(props.locale);
    const {handleSubmit, register, errors} = useForm();

    const onSubmit = values => console.log(values);
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fields}>
                <input
                    maxLength={30}
                    className={styles.field}
                    placeholder={strings.contactsFormName}
                    name="name"
                    ref={register()}
                />

                <input
                    maxLength={30}
                    type="number"
                    className={styles.field}
                    placeholder={strings.contactsFormPhone}
                    name="phone"
                    pattern= "[0-9]"
                    ref={register()}
                />

                <input
                    maxLength={50}
                    className={styles.field}
                    placeholder={strings.contactsFormEmail}
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

                <textarea
                    rows={8}
                    maxLength={1000}
                    className={styles.field}
                    placeholder={strings.contactsFormDescription}
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
