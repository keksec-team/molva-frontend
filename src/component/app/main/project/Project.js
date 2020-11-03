import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {useLocation} from "react-router";
import styles from "./Project.module.css";
import {getProjectById} from "../../../../service/fakeDataService";
import Fade from "@material-ui/core/Fade";
import {LoadingIndicator} from "../../helper/loading/LoadingIndicator";
import ProjectHeader from "./header/ProjectHeader";
import ProjectFiles from "./files/ProjectFiles";


function Project(props) {
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [project, setProject] = useState(null);

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
    return (
        <div className={styles.project}>
            <div className={styles.projectElementsContainer}>
                {!isLoaded ? <div className={styles.loaderContainer}>
                        <LoadingIndicator/>
                    </div> :
                    <div>
                        <ProjectHeader project={project} isLoaded={isLoaded}/>
                        <Fade in={true} timeout={360} mountOnEnter unmountOnExit>
                            <ProjectFiles project={project} isLoaded={isLoaded}/>
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
