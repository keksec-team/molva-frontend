import {latestProjects, projects} from "./fakeDataSource";

const delay = time => new Promise(res=>setTimeout(res,time));

export const getLatestProjects = async() => {
    await delay(1000);
    return latestProjects;
}

export const getProjects = () => {
    return projects;
}