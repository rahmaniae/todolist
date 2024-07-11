import deleteProjectTodos from "./deleteProjectTodos";
import renderProjects from "./renderProjects";

export default function deleteProject (e) {
    e.stopPropagation()
    const index = e.target.parentElement.dataset.index;
    console.log(index)
    let projects = JSON.parse(localStorage.getItem('projects'));
    projects.splice(index,1);
    localStorage.setItem('projects', JSON.stringify(projects));
    deleteProjectTodos(e.target.parentElement.textContent)
    renderProjects()
} 