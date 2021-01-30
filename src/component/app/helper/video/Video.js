import React, {useEffect, useState} from "react";
import styles from "./Video.module.css"
import $ from "jquery"

export const Video = (props) => {
    const {activeSrc, activeId, controls, type, autoplay} = props;
    const [paused, setPaused] = useState(true)
    useEffect(() => {
        if (paused) {
            $(`#${activeId + "-btn"}`).attr('src', require("../../../../assets/playbutton.svg"))
        } else {
            $(`#${activeId + "-btn"}`).attr('src', require("../../../../assets/pausebutton.svg"))
        }
    }, [paused])
    return <div className={styles.videoContainer}>
        <video src={activeSrc}
               className={styles.video}
               id={activeId}
               type={type}
               controls={controls}
               autoPlay={autoplay}
               onClick={() => {
                   $(`#${activeId + "-btn"}`).removeClass(styles.changeOpacityAndScale)
                   setTimeout(function () {
                       $(`#${activeId + "-btn"}`).addClass(styles.changeOpacityAndScale)
                   }, 1)
                   const video = document.getElementById(activeId)
                   if (video.paused) {
                       setPaused(true)
                   } else {
                       setPaused(false)
                   }
               }}
        />
        <img className={styles.playBtn} id={activeId + "-btn"}
             alt={"play-button"}/>
    </div>
}
