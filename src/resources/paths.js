import {NoSuchPathException} from "./exceptions/NoSuchPathException";

export const pages = {
    HOME: "home",
    ABOUT: "about",
    PROJECT: "project",
    PROJECTS: "projects",
    CONTACTS: "contacts"
}

export function resolvePath(page) {
    let pagePathNames = Object.keys(pages);
    let pagePathname = pages[pagePathNames[Object.values(pages).indexOf(page)]]
    if (pagePathname) {
        return "/" + pagePathname;
    } else throw new NoSuchPathException("Path does not exist");
}
