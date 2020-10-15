import React from "react";
import styles from "./LoadingIndicator.module.css"
import Loader from 'react-loader-spinner'

export const LoadingIndicator = (props) => {
    const { previewSize } = props;
    const getPreviewLoaderStyle = () => {
        if (previewSize === 0) return styles.loaderForSmallPreview;
        else if (previewSize === 1) return styles.loaderForNormalPreview;
        else return styles.loaderForBigPreview;
    }
    console.log(previewSize)
    return <div className={previewSize != null ? getPreviewLoaderStyle() : ""}>
        <Loader type="Bars" color="#FFFFFF" height={80} width={80} />
    </div>
}
