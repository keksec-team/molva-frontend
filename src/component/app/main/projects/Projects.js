import {getStringsByLocale} from "../../../../resources/languages";
import {connect} from 'react-redux';
import styles from "./Projects.module.css";
import {getProjects} from "../../../../service/fakeDataService";
import React, {useState} from "react";
import {Slide} from "@material-ui/core";
import Categories from "./categories/Categories";
import Fade from "@material-ui/core/Fade";

function Projects(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    let projects = getProjects();
    const [currentActiveCategory, setCurrentActiveCategory] = useState(0);
    const [rotationFirstIndex, setRotationFirstIndex] = useState(0);
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
                    {projects[currentActiveCategory].length > 3 ? (
                        <img src={require('../../../../assets/leftarrow.svg')}
                             className={styles.leftArrow}
                             alt="Left arrow"/>
                    ) : ""}
                    {
                        projects[currentActiveCategory]
                            .slice(rotationFirstIndex, rotationFirstIndex + 3)
                            .map((project, i) =>
                                <div className={styles.previewContainer} id={`preview-${i}`}>
                                    <Preview activeSrc={project.previewUrl}
                                             activeType={project.previewType} key={i}/>
                                </div>
                            )
                    }
                    {projects[currentActiveCategory].length > 3 ? (
                        <img src={require('../../../../assets/rightarrow.svg')}
                             className={styles.rightArrow}
                             alt="Right arrow"/>
                    ) : ""}
                </div>
            </div>
        </div>
    );
}

function Preview(props) {
    const {activeSrc, activeType} = props;
    return (
        <Fade in={true} timeout={400} mountOnEnter unmountOnExit>
            {activeType === "image" ? <img className={styles.preview} src={activeSrc} alt=""/> :
                <iframe className={styles.preview}
                        src={activeSrc}
                        allow="autoplay"
                        frameBorder="0"
                        allowFullScreen/>}
        </Fade>
    )
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Projects);