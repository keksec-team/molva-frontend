import React from "react";
import { connect } from 'react-redux';

function Main(props) {
    return (
        <div className="Main">
            {/*this is temporary implementation of this component*/}
            {props.theme}, {props.locale}
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Main);