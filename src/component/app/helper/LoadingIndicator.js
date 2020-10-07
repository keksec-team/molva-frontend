import React from "react";
import Loader from 'react-loader-spinner'

export const LoadingIndicator = props => {
    return <Loader type="Bars" color="#FFFFFF" height={80} width={80} className={props.className} />
}
