import React, {useEffect, useState} from "react";
import {getStringsByLocale} from "../../../../resources/languages";
import styles from "./Home.module.css";
import {connect} from 'react-redux';
import {getLatestProjects} from "../../../../service/fakeDataService";
import {Slide} from '@material-ui/core';
import Preview from "../projects/preview/Preview";
import {Link} from "react-router-dom";
import {LoadingIndicator} from "../../helper/LoadingIndicator";
import Fade from "@material-ui/core/Fade";


function Home(props) {
    const [isLoaded, setLoaded] = useState(false);
    const [latestProjects, setLatestProjects] = useState([]);
    let strings = getStringsByLocale(props.locale);

    getLatestProjects().then((res) => {
        setLatestProjects(res);
        setLoaded(true);
    });

    const [currentActive, setCurrentActive] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentActive(prevCurrent => prevCurrent + 1 > 2 ? 0 : prevCurrent + 1)
        }, 10000);
        return () => clearInterval(interval)
    }, [currentActive]);

    return (
        <div className={styles.home}>
            <div className={styles.homeElementsContainer}>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                    <div className={styles.textContainer}>
                        <div className={styles.text}>
                            <h1 className={styles.mainTitle}>{strings.mainTitle}</h1>
                            <p className={styles.mainDescription}>{strings.mainDescription}</p>
                        </div>
                        <div className={styles.buttonContainer}>
                            <Link to="/projects">
                                <button className={styles.ourProjects}>{strings.ourProjects}</button>
                            </Link>
                        </div>
                    </div>
                </Slide>
                <div className={styles.projectContainer}>
                    <Preview activeSrc={latestProjects[currentActive] ? latestProjects[currentActive].previewUrl : ""}
                             activeType={latestProjects[currentActive] ? latestProjects[currentActive].previewType : ""}
                             activeId={latestProjects[currentActive] ? latestProjects[currentActive].id : ""}
                             isLink={true}
                             isLoaded={isLoaded}
                             size={2}
                             key={currentActive}
                    />
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
        </div>
    );
}

const mapStateToProps = state => ({
    theme: state.style.theme,
    locale: state.language.locale
})

export default connect(mapStateToProps)(Home);
