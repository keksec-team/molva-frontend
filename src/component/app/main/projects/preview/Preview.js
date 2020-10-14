import Fade from "@material-ui/core/Fade";
import styles from "./Preview.module.css";
import {Link} from 'react-router-dom';
import React from "react";

function Preview(props) {
    //size parameter could be 0, 1, 2
    const {activeSrc, activeType, activeId, isLink, size} = props;
    console.log(isLink)
    const getPreviewStyle = () => {
        if (size === 0) return styles.smallPreview;
        else if (size === 1) return styles.normalPreview;
        else return styles.bigPreview;
    }
    const previewStyle = getPreviewStyle();
    const previewElement = activeType === "image" ?
        <img className={previewStyle} src={activeSrc} alt=""/> :
        <iframe className={previewStyle}
                src={activeSrc}
                allow="autoplay"
                frameBorder="0"
                allowFullScreen/>
    return (
        isLink ?
            <Fade in={true} timeout={400} mountOnEnter unmountOnExit>
                {
                    <Link to={{pathname: "project", state: {activeId}}}>
                        {previewElement}
                    </Link>
                }
            </Fade> : <Fade in={true} timeout={400} mountOnEnter unmountOnExit>
                {previewElement}
            </Fade>
    )
}

export default Preview;