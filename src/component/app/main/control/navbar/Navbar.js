import styles from "./Navbar.module.css";
import {connect} from "react-redux";
import React from "react";
import {Slide} from "@material-ui/core";
import {changeNavbarToggled} from "../../../../../service/appStateService";
import useWindowSize from "../helpers/useWindowSize";
import Menu from "./menu/Menu";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Drawer from "@material-ui/core/Drawer";

function Navbar(props) {
    const {dispatch} = props;
    let {width} = useWindowSize();
    return (
        <div className={styles.nav}>
            <div id={styles.navi} className={`${props.isToggled ? styles.open : ""}`}
                 onClick={() => changeNavbarToggled(!props.isToggled, dispatch)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {
                (width <= 600) ? (
                    <Drawer anchor={"right"}
                            open={props.isToggled}
                            onClose={() => changeNavbarToggled(!props.isToggled, dispatch)}>
                        <Menu/>
                    </Drawer>
                ) : <Menu/>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    isToggled: state.controls.navbarToggled
})

export default connect(mapStateToProps)(Navbar);