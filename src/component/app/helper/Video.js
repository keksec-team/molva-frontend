import React from "react";
import styles from "./Video.module.css"

export const Video = (props) => {
    const { src, id, controls, type, autoplay } = props;
    return <video src={src}
                  className={styles.video}
                  id={"video-" + id}
                  onLoadedMetadata={e => {
                      const element = document.getElementById("video-" + id);
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
