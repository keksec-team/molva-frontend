import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {getStringsByLocale} from "../../../../resources/languages";
import {useLocation} from "react-router";
import styles from "./Project.module.css";
import {getProjectById} from "../../../../service/fakeDataService";
import {Slide} from "@material-ui/core";
import Preview from "../projects/preview/Preview";
import Fade from "@material-ui/core/Fade";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {getGrid} from "./helper/helper";
import {LoadingIndicator} from "../../helper/LoadingIndicator";
import useWindowSize from "../control/helpers/useWindowSize";
import {Video} from "../../helper/Video";


function Project(props) {
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [project, setProject] = useState(null);

    let strings = getStringsByLocale(props.locale);

    useEffect(() => {
        // fetch(`https://api.example.com/projects/${props.projectId}`)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        getProjectById(location.state.activeId).then(project => {
            setProject(project)
            setIsLoaded(true);
            setError(false);
        })
        //         },
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     )

    }, [])
    let location = useLocation();
    let {width} = useWindowSize();
    let grid;
    if (project) {
        if (project.files) {
            grid = getGrid(project.files);
        }
    }
    return (
        <div className={styles.project}>
            <div className={styles.projectElementsContainer}>
                {!isLoaded ? <div className={styles.loaderContainer}><LoadingIndicator/></div> :
                    <div>
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
                                             isLink={false}
                                             isLoaded={isLoaded}
                                             size={1}
                                             autoplay={true}
                                             controls={false}
                                    />
                                </div>
                            </div>
                        </div>
                        <Fade in={true} timeout={360} mountOnEnter unmountOnExit>
                            <div className={styles.projectFiles}>
                                {
                                    width >= 1000 ?
                                        project.files != null ?
                                            <GridList cellHeight={width > 1200 ? 600 : 400} className={styles.gridList}
                                                      cols={3}
                                                      spacing={25}>
                                                {project.files.map((projectFile, i) => (
                                                    <GridListTile classes={{tile: styles.tile}} key={projectFile.url}
                                                                  cols={grid[i]}>
                                                        {
                                                            projectFile.type === "image" ?
                                                                <img src={projectFile.url} alt=""/> :
                                                                <Video activeId={"preview-" + i}
                                                                       activeSrc={projectFile.url}
                                                                       type="video/mp4"
                                                                       autoplay={false}
                                                                       controls={true}
                                                                />
                                                        }
                                                    </GridListTile>
                                                ))}
                                            </GridList> : ""
                                        :
                                        <div className={styles.filesColumn}>
                                            {
                                                project.files != null ?
                                                    project.files.map((projectFile, i) =>
                                                        <Preview activeSrc={projectFile.url}
                                                                 activeType={projectFile.type}
                                                                 activeId={i}
                                                                 isLink={false}
                                                                 isLoaded={isLoaded}
                                                                 autoplay={false}
                                                                 controls={true}
                                                                 size={0}
                                                                 key={i}/>
                                                    ) : ""
                                            }
                                        </div>
                                }
                            </div>
                        </Fade>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Project);
