import {getStringsByLocale} from "../../../../resources/languages";
import {connect} from 'react-redux';
import styles from "./Projects.module.css";
import {getProjects} from "../../../../service/fakeDataService";
import React, {useState} from "react";
import {Slide} from "@material-ui/core";
import Categories from "./categories/Categories";
import Carousel from "./carousel/Carousel";
import Preview from "./preview/Preview";
import useWindowSize from "../control/helpers/useWindowSize";

function Projects(props) {
    let strings = getStringsByLocale(props.locale);
    let projects = getProjects();
    const [currentActiveCategory, setCurrentActiveCategory] = useState(0);
    let {width} = useWindowSize();
    return (
        <div className={styles.projects}>
            <div className={styles.projectsElementsContainer}>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <div>
                        <h1 className={styles.title}>{strings.projectsTitle}</h1>
                        <Categories activeCategoryIndex={currentActiveCategory}
                                    setCurrentActiveCategory={setCurrentActiveCategory}/>
                    </div>
                </Slide>
                <div className={styles.slider}>
                    {
                        projects[currentActiveCategory].length > 3 && width >= 1000 ?
                            <Carousel slidesToShow={3} projects={projects[currentActiveCategory]}/> :
                            <div className={styles.noSliderContainer}>
                                {
                                    projects[currentActiveCategory].map((project, i) =>
                                        <Preview activeSrc={project.previewUrl}
                                                 activeType={project.previewType} key={i}/>
                                    )
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Projects);