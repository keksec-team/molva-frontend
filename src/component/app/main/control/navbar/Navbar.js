import styles from "./Navbar.module.css";
import {connect} from "react-redux";
import React from "react";
import {changeNavbarToggled} from "../../../../../service/appStateService";
import useWindowSize from "../helpers/useWindowSize";
import Menu from "./menu/Menu";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from '@material-ui/icons/Menu';

function Navbar(props) {
    const {dispatch} = props;
    let {width} = useWindowSize();
    return (
        <div className={styles.nav}>
            <img src={require('../../../../../assets/logo.svg')} className={styles.logo} alt="Logotype"/>
            <MenuIcon classes={{root: styles.hamburger}}
                      onClick={() => changeNavbarToggled(!props.isToggled, dispatch)}/>
            {(width <= 640) ? (
                <Drawer anchor={"right"}
                        open={props.isToggled}
                        onClose={() => changeNavbarToggled(!props.isToggled, dispatch)}>
                    <Menu/>
                </Drawer>
            ) : <Menu/>}
        </div>
    );
}

const mapStateToProps = state => ({
    isToggled: state.controls.navbarToggled
})

export default connect(mapStateToProps)(Navbar);