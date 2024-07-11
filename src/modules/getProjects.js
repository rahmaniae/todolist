export default function getProjects () {
    let projects = (localStorage.getItem('projects')) ? JSON.parse(localStorage.getItem('projects')) : [];
    return projects
}