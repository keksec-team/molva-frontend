import React, {useEffect} from "react";
import styles from "./Login.module.css";
import {connect} from 'react-redux';
import {setLoginPageActive} from "../../../../store/actions/navbarActions";
import {changeLoginPageActive} from "../../../../service/appStateService";

function Login(props) {
    const {dispatch} = props;
    useEffect(() => {
        changeLoginPageActive(true, dispatch);
        return () => changeLoginPageActive(false, dispatch);
    }, [])
    return (
        <div className={styles.login}>
            <div>

            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Login);
