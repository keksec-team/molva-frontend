import styles from "./ProjectFiles.module.css";
import React from "react";
import Preview from "../../projects/preview/Preview";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import {Video} from "../../../helper/video/Video";
import useWindowSize from "../../controls/helpers/useWindowSize";
import {getGrid} from "../helper/helper";

function ProjectFiles(props) {
    const { project, isLoaded } = props;
    let {width} = useWindowSize();
    let grid;
    if (project) {
        if (project.files) {
            grid = getGrid(project.files);
        }
    }
    const getFullHeight = () => {
        let multiplier = width < 1200 ? 0.1 : 0.2;
        return (width - multiplier * width - 50) / 16 * 9;
    }
    const getRows = (cols) => {
        if (cols === 4) {
            return 1;
        } else if (cols === 2) {
            return 0.5 - 12.5 / getFullHeight();
        } else {
            return 0.333 - 12.5 / getFullHeight();
        }
    }
    return (
        <div className={styles.projectFiles}>
            {
                width >= 1000 ?
                    project.files != null ?
                        <GridList className={styles.gridList}
                                  cols={4}
                                  cellHeight={getFullHeight()}
                                  spacing={25}>
                            {project.files.map((projectFile, i) => (
                                <GridListTile classes={{tile: styles.tile}}
                                              key={i}
                                              rows={getRows(grid[i])}
                                              cols={grid[i]}>
                                    {
                                        projectFile.type === "image" ?
                                            <img src={projectFile.url} className={styles.image}
                                                 alt=""/> :
                                            <Video activeId={"preview-" + i}
                                                   activeSrc={projectFile.url}
                                                   className={styles.video}
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
                                             size={1}
                                             key={i}/>
                                ) : ""
                        }
                    </div>
            }
        </div>
    );
}

export default ProjectFiles;
