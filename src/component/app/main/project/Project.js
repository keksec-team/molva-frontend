import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {getStringsByLocale} from "../../../../resources/languages";
import {useLocation} from "react-router";
import styles from "./Project.module.css";
import {getProjectById, getProjectsByCategory} from "../../../../service/fakeDataService";
import {Slide} from "@material-ui/core";
import Preview from "../projects/preview/Preview";
import Fade from "@material-ui/core/Fade";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {getGrid} from "./helper/helper";


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
        setProject(getProjectById(location.state.activeId))
        setIsLoaded(true);
        setError(false);
        //         },
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     )

    }, [])
    let location = useLocation();
    let grid;
    if (project) {
        if (project.files) {
            grid = getGrid(project.files.length);
        }
    }
    return (
        <div className={styles.project}>
            {
                isLoaded && project ?
                    error ? <div>error</div> : (
                        <div className={styles.projectElementsContainer}>
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
                                                 size={1}/>
                                    </div>
                                </div>
                            </div>
                            <Fade in={true} timeout={360} mountOnEnter unmountOnExit>
                                <div className={styles.projectFiles}>
                                    {
                                        project.files != null ?
                                            <GridList cellHeight={600} className={styles.gridList} cols={3}
                                                      spacing={25}>
                                                {project.files.map((projectFile, i) => (
                                                    <GridListTile classes={{tile: styles.tile}} key={projectFile.url}
                                                                  cols={grid[i]}>
                                                        <img src={projectFile.url} alt=""/>
                                                    </GridListTile>
                                                ))}
                                            </GridList> : ""
                                    }
                                </div>
                            </Fade>
                        </div>
                    ) : (<div>loading</div>)
            }
        </div>
    )
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Project);