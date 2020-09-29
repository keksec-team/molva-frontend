import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {getStringsByLocale} from "../../../../resources/languages";
import styles from "./Home.module.css";
import {getLatestProjects} from "../../../../service/fakeDataService";
import {Slide} from '@material-ui/core';
import Fade from "@material-ui/core/Fade";


function Home(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    let latestProjects = getLatestProjects();
    const [currentActive, setCurrentActive] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentActive(prevCurrent => prevCurrent + 1 > 2 ? 0 : prevCurrent + 1)
        }, 10000);
        return () => clearInterval(interval)
    }, [currentActive]);

    return (
        <div className={styles.home}>
            <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <h1 className={styles.mainTitle}>{strings.mainTitle}</h1>
                        <p className={styles.mainDescription}>{strings.mainDescription}</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.ourProjects}>{strings.ourProjects}</button>
                    </div>
                </div>
            </Slide>
            <div className={styles.projectContainer}>
                <div className={styles.previewContainer}>
                    <Preview activeSrc={latestProjects[currentActive].previewUrl}
                             activeType={latestProjects[currentActive].previewType} key={currentActive}/>
                </div>
                <div className={styles.switchLines}>
                    {
                        latestProjects.map(project =>
                            <hr className={`${currentActive === latestProjects.indexOf(project) ?
                                styles.active : ''} ${styles.hr}`}
                                onClick={() => setCurrentActive(latestProjects.indexOf(project))}/>
                        )
                    }
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

export default connect(mapStateToProps)(Home);
