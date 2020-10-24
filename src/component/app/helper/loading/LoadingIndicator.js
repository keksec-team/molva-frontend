import React from "react";
import styles from "./LoadingIndicator.module.css"
import Loader from 'react-loader-spinner'
import useWindowSize from "../main/controls/helpers/useWindowSize";

export const LoadingIndicator = (props) => {
    const { previewSize } = props;
    const getPreviewLoaderStyle = () => {
        if (previewSize === 0) return styles.loaderForSmallPreview;
        else if (previewSize === 1) return styles.loaderForNormalPreview;
        else return styles.loaderForBigPreview;
    }
    let {width} = useWindowSize();
    let loaderWidth = 80;
    let loaderHeight = 80;
    if (width <= 650) {
        loaderWidth = 50;
        loaderHeight = 50;
    }
    return <div className={previewSize != null ? getPreviewLoaderStyle() : ""}>
        <Loader type="Bars" color="#FFFFFF" height={loaderHeight} width={loaderWidth} />
    </div>
}
