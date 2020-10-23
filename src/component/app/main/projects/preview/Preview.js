import Fade from "@material-ui/core/Fade";
import styles from "./Preview.module.css";
import {Link} from 'react-router-dom';
import React from "react";
import {LoadingIndicator} from "../../../helper/LoadingIndicator";
import {Video} from "../../../helper/Video";

function Preview(props) {
    //size parameter could be 0, 1, 2
    const {
        activeSrc,
        activeType,
        activeId,
        link,
        size,
        isLoaded,
        projectTitle,
        autoplay,
        controls
    } = props;
    const getPreviewStyle = () => {
        if (size === 0) return styles.smallPreview;
        else if (size === 1) return styles.normalPreview;
        else return styles.bigPreview;
    }
    const previewStyle = getPreviewStyle();
    const previewElement = activeType === "image" ?
        <img src={activeSrc} className={styles.previewPos} alt=""/> :
        <Video activeId={"preview-" + activeId}
               activeSrc={activeSrc}
               autoplay={autoplay}
               controls={controls}
               type="video/mp4"/>
    const previewContainer = <Fade in={true} timeout={400} mountOnEnter unmountOnExit>
        <div className={previewStyle}>
            {
                projectTitle ? <div className={styles.projectTitle}>{projectTitle[0].toUpperCase()
                    + projectTitle.slice(1)}</div>
                    : ""
            }
            {previewElement}
        </div>
    </Fade>
    return (
        !isLoaded ? (<LoadingIndicator previewSize={size}/>) : (
            link ? <Link to={{pathname: link, state: {activeId}}}>
                    {previewContainer}
                </Link> :
                previewContainer
        )
    )
}

export default Preview;