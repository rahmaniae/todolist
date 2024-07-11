import deleteTodo from "./deleteTodo";
import editTodo from "./editTodo";
import renderTodos from "./renderTodos";
import deleteProject from "./deleteProject";
import addProject from "./addProject";
import submitTask from "./addToDoItem";
import Project from "./projectItem";
import renderProjects from "./renderProjects"
import renderInbox from "./renderInbox";

export default function resetEvents() {
    
    const deleteIcons = document.querySelectorAll('img.delete-task');
    const editIcons = document.querySelectorAll('.edit-task');
    const projectsBtn = document.querySelectorAll('button.project');
    const deleteProjectBtn = document.querySelectorAll('.delete');
    const openProjectModalBtn = document.querySelector('.add-project');
    const closeProjectModalBtn = document.querySelector('#cancel');
    const overlay = document.querySelector('.overlay');
    const submitProjectBtn = document.querySelector('#submit')
    const openTaskModalBtn = document.querySelector('.add-task button');
    const closeTaskModalBtn = document.querySelector('#cancelTask');
    const submitTaskBtn = document.querySelector('#submitTask')
    const inboxNavBtn = document.querySelector('.navigation button:nth-of-type(2)')
    
    inboxNavBtn.addEventListener('click', renderInbox)

    deleteIcons.forEach((icon) => {
        icon.addEventListener('click', deleteTodo)
    })
    
    editIcons.forEach((icon) => {
        icon.addEventListener('click', editTodo)
    })

    projectsBtn.forEach((projectBtn) => {
        projectBtn.addEventListener('click', renderTodos);
    })

    deleteProjectBtn.forEach((button) => button.addEventListener('click', deleteProject));

    openProjectModalBtn.addEventListener('click', openProjectModal);
    closeProjectModalBtn.addEventListener('click', closeProjectModal);
    overlay.addEventListener('click', closeProjectModal);

    submitProjectBtn.addEventListener('click', submitProject);

    openTaskModalBtn.addEventListener('click', openTaskModal);
    closeTaskModalBtn.addEventListener('click', closeTaskModal)

    submitTaskBtn.addEventListener('click', submitTask);

}

export function clearTaskModal() {
    document.querySelector('#task-title').value = ""
    document.querySelector('#task-duedate').value = ""
    document.querySelector('#task-priority').value = ""
}

function openProjectModal() {
    const projectModal = document.querySelector('.project-modal');
    const overlay = document.querySelector('.overlay');

    projectModal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

export function closeProjectModal() {
    const projectModal = document.querySelector('.project-modal');
    const overlay = document.querySelector('.overlay');

    projectModal.classList.add('hidden');
    overlay.classList.add('hidden')
}

function submitProject(e) {
    e.preventDefault();
    const projectTitle = document.querySelector('#project-name');
    const project = new Project(projectTitle.value);
    addProject(project);
    projectTitle.value = "";
    closeProjectModal();
    renderProjects();
}

function openTaskModal() {
    const taskModal = document.querySelector('.task-modal');
    const overlay = document.querySelector('.overlay');

    taskModal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

export function closeTaskModal() {
    const taskModal = document.querySelector('.task-modal');
    const overlay = document.querySelector('.overlay');

    taskModal.classList.add('hidden');
    overlay.classList.add('hidden');
}

