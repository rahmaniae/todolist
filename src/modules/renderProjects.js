import getProjects from "./getProjects";
import resetProjects from "./resetProjects";
import resetEvents from "./resetEventListeners";

export default function renderProjects() {
    resetProjects()
    const projects = getProjects();
    projects.forEach((element, index) => {
        const projectsContainer = document.querySelector('.projects');
        const button = document.createElement('button');
        button.classList.add('project');
        button.dataset.index = index;

        const Icon = new Image();
        Icon.src = "./img/hashtag.svg";
        Icon.classList.add('w-20');

        const span = document.createElement('span');
        span.textContent = element.title;

        const deleteIcon = new Image();
        deleteIcon.src = "./img/deleteIcon.svg"
        deleteIcon.classList = "w-20 delete";

        button.append(Icon, span, deleteIcon)

        projectsContainer.insertBefore(button, document.querySelector('.add-project'))
    });
    //assign EventListener
    resetEvents();
}