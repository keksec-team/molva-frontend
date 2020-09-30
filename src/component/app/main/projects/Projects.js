import {getStringsByLocale} from "../../../../resources/languages";
import {connect} from 'react-redux';
import styles from "./Projects.module.css";
import {getProjects} from "../../../../service/fakeDataService";
import React, {useState} from "react";
import {Slide} from "@material-ui/core";
import Categories from "./categories/Categories";
import Carousel from "./carousel/Carousel";
import Preview from "./preview/Preview";

function Projects(props) {
    let strings = getStringsByLocale(props.locale);
    let projects = getProjects();
    const [currentActiveCategory, setCurrentActiveCategory] = useState(0);
    return (
        <div>
            <div className={styles.container}>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <div>
                        <h1 className={styles.title}>{strings.projects}</h1>
                        <Categories activeCategoryIndex={currentActiveCategory}
                                    setCurrentActiveCategory={setCurrentActiveCategory}/>
                    </div>
                </Slide>
                <div className={styles.slider}>
                    {
                        projects[currentActiveCategory].length > 3 ?
                            <Carousel projects={projects[currentActiveCategory]}/> :
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