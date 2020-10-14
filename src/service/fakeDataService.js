import {allProjects, latestProjects, projectsByCategories} from "./fakeDataSource";

export const getLatestProjects = () => {
    return latestProjects;
}

export const getProjectsByCategory = (categoryName) => {
    return projectsByCategories[categoryName]
}

export const getProjectById = (projectId) => {
    for (let i = 0; i < allProjects.length; i++) {
        if (allProjects[i].id === projectId) return allProjects[i];
    }
}