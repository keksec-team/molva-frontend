import React from "react";
import {connect} from 'react-redux';
import {getStringsByLocale} from "../../resources/languages";
import Navbar from "../navbar/Navbar";


function Main(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    return (
        <div className="main">
            {/*this is temporary demo implementation of this component*/}
            <Navbar/>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Main);
