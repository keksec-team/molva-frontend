import styles from "./ProjectHeader.module.css";
import React from "react";
import {Slide} from "@material-ui/core";
import Fade from "@material-ui/core/Fade";
import Preview from "../../projects/preview/Preview";

function ProjectHeader(props) {
    const { project, isLoaded } = props;
    return (
        <div className={styles.projectHeader}>
            <div>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <h1 className={styles.projectTitle}>{project.name.toUpperCase()}</h1>
                </Slide>
                <div className={styles.container}>
                    <Fade in={true} timeout={360} mountOnEnter unmountOnExit>
                        <p className={styles.projectDescription}>{project.description}</p>
                    </Fade>
                    <Preview activeSrc={project.previewUrl}
                             activeType={project.previewType}
                             activeId={project.id}
                             isLoaded={isLoaded}
                             size={1}
                             autoplay={true}
                             controls={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectHeader;
