import React from "react";
import styles from "./Video.module.css"

export const Video = (props) => {
    const { activeSrc, activeId, controls, type, autoplay } = props;
    return <video src={activeSrc}
                  className={styles.video}
                  id={activeId}
                  onLoadedMetadata={e => {
                      const element = document.getElementById(activeId);
                      element.style["width"] =
                          `${100 * e.target.videoWidth / e.target.videoHeight}vh`;
                      element.style["height"] =
                          `${100 * e.target.videoHeight / e.target.videoWidth}vw`;
                  }}
                  type={type}
                  controls={controls}
                  autoPlay={autoplay}
    />
}
