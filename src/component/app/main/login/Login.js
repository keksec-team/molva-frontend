import React, {useEffect} from "react";
import styles from "./Login.module.css";
import {connect} from 'react-redux';
import {setLoginPageActive} from "../../../../store/actions/navbarActions";
import {changeLoginPageActive} from "../../../../service/appStateService";
import LoginForm from "./form/LoginForm";
import {resolvePath} from "../../../../resources/paths";
import Fade from "@material-ui/core/Fade";

function Login(props) {
    const {dispatch} = props;
    useEffect(() => {
        changeLoginPageActive(true, dispatch);
        return () => changeLoginPageActive(false, dispatch);
    }, [])
    return (
        <Fade in={true} timeout={400} mountOnEnter unmountOnExit>
            <div className={styles.login}>
                <img src={require('../../../../assets/leftarrow.svg')}
                     className={styles.backArrow}
                     onClick={() => props.history.goBack()}
                     alt="Back arrow"/>
                <div className={styles.centerContainer}>
                    <img src={require('../../../../assets/logo.svg')} className={styles.bigLogo} alt="Logotype"/>
                    <div className={styles.loginFormContainer}>
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </Fade>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Login);
