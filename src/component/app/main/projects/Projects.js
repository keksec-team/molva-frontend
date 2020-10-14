import {getStringsByLocale} from "../../../../resources/languages";
import {connect} from 'react-redux';
import styles from "./Projects.module.css";
import {getProjectsByCategory} from "../../../../service/fakeDataService";
import React, {useEffect, useState} from "react";
import {Slide} from "@material-ui/core";
import Categories from "./categories/Categories";
import Carousel from "./carousel/Carousel";
import Preview from "./preview/Preview";
import useWindowSize from "../control/helpers/useWindowSize";
import Fade from "@material-ui/core/Fade";

//TODO Write error and set loader
function Projects(props) {
    let strings = getStringsByLocale(props.locale);
    const [currentActiveCategory, setCurrentActiveCategory] = useState("apps");
    const [projectsByActiveCategory, setProjectsByActiveCategory] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);
    let {width} = useWindowSize();
    useEffect(() => {
        // fetch(`https://api.example.com/projects/by/category/${currentActiveCategory}`)
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        setIsLoaded(true);
        setProjectsByActiveCategory(getProjectsByCategory(currentActiveCategory))
        setError(false);
        //         },
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         }
        //     )
    }, [currentActiveCategory])
    return (
        <div className={styles.projects}>
            <div className={styles.projectsElementsContainer}>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <div>
                        <h1 className={styles.title}>{strings.projectsTitle}</h1>
                        <Categories activeCategory={currentActiveCategory}
                                    setCurrentActiveCategory={setCurrentActiveCategory}/>
                    </div>
                </Slide>
                {
                    isLoaded ?
                        error ? (<div>error</div>) : (
                            <Fade in={true} timeout={360} mountOnEnter unmountOnExit>
                                <div className={styles.slider}>
                                    {
                                        projectsByActiveCategory.length > 3 && width >= 1000 ?
                                            <Carousel slidesToShow={3} projects={projectsByActiveCategory}/> :
                                            <div className={styles.noSliderContainer}>
                                                {
                                                    projectsByActiveCategory.map((project, i) =>
                                                        <Preview activeSrc={project.previewUrl}
                                                                 activeType={project.previewType}
                                                                 activeId={project.id}
                                                                 isLink={true}
                                                                 size={0}
                                                                 key={i}/>
                                                    )
                                                }
                                            </div>
                                    }
                                </div>
                            </Fade>) : (<div>loading</div>)
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Projects);