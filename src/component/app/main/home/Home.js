import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {getStringsByLocale} from "../../../../resources/languages";
import styles from "./Home.module.css";
import {getLatestProjects} from "../../../../service/fakeDataService";
import {Slide} from '@material-ui/core';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";


function Home(props) {
    const {dispatch} = props;
    let strings = getStringsByLocale(props.locale);
    let latestProjects = getLatestProjects();
    const [currentActive, setCurrentActive] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setCurrentActive(currentActive + 1 > 2 ? 0 : currentActive + 1)
        }, 10000);
        return () => clearInterval(interval)
    }, [currentActive]);

    return (
        <div className={styles.home}>
            <div className={styles.projectContainer}>
                {
                    latestProjects.map(project =>
                        <img src={project.previewUrl}
                             className={`${currentActive === latestProjects.indexOf(project) ?
                                 styles.active : styles.hide} ${styles.preview}`} alt="2"/>
                    )
                }
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
            <div className={styles.textContainer}>
                <h1 className={styles.mainTitle}>{strings.mainTitle}</h1>
                <p className={styles.mainDescription}>{strings.mainDescription}</p>
                <div className={styles.buttonContainer}>
                    <button className={styles.ourProjects}>{strings.ourProjects}</button>
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
