import styles from "./Navbar.module.css";
import {connect} from "react-redux";
import React from "react";
import {Slide} from "@material-ui/core";
import {changeNavbarToggled} from "../../../../../service/appStateService";
import useWindowSize from "../helpers/useWindowSize";
import Menu from "./menu/Menu";

function Navbar(props) {
    const {dispatch} = props;
    let {width} = useWindowSize();
    return (
        <div className={styles.nav}>
            <label className={styles.toggleLabel}
                   onClick={() => changeNavbarToggled(!props.isToggled, dispatch)}>&#9776;</label>
            {(width <= 600)
                ? (
                    <Slide direction="left" in={props.isToggled}>
                        <div><Menu/></div>
                    </Slide>)
                : <Menu/>}
        </div>
    );
}

const mapStateToProps = state => ({
    isToggled: state.controls.navbarToggled
})

export default connect(mapStateToProps)(Navbar);