export default function resetProjects () {
    const projectsContainer = document.querySelector('.projects');
    const projectNodes = document.querySelectorAll('.project');
    projectNodes.forEach((e) => {
        projectsContainer.removeChild(e);
    })
}