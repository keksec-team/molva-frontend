import {allProjects, latestProjects, projectsByCategories} from "./fakeDataSource";

const delay = time => new Promise(res=>setTimeout(res,time));

export const getLatestProjects = async() => {
    await delay(1000);
    return latestProjects;
}

export const getProjectsByCategory = async (categoryName) => {
    await delay(1000);
    return projectsByCategories[categoryName]
}

export const getProjectById = async (projectId) => {
    await delay(1000);
    for (let i = 0; i < allProjects.length; i++) {
        if (allProjects[i].id === projectId) return allProjects[i];
    }
}