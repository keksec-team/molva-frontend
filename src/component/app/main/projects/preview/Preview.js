import Fade from "@material-ui/core/Fade";
import styles from "./Preview.module.css";
import React from "react";

function Preview(props) {
    const {activeSrc, activeType} = props;
    return (
        <Fade in={true} timeout={400} mountOnEnter unmountOnExit>
            {activeType === "image" ? <img className={styles.preview} src={activeSrc} alt=""/> :
                <iframe className={styles.preview}
                        src={activeSrc}
                        allow="autoplay"
                        frameBorder="0"
                        allowFullScreen/>}
        </Fade>
    )
}

export default Preview;