import BearIcon from '../img/Bear.svg'
import searchIconSrc from '../img/search.svg'
import inboxIconSrc from '../img/inbox.svg'
import todayIconSrc from '../img/today.svg'
import calendarIconSrc from '../img/calendar.svg';
import addIconSrc from '../img/add-task.svg';
import addProjectIcon from '../img/newProject.svg'
import getProjects from './getProjects';

export default function renderInterface () {
    
    const sidebar = renderSidebar()

    const content = renderContentUI();

    const overlay = document.createElement('div');
    overlay.classList = 'overlay hidden';

    const projectModal = renderProjectModal();
    const taskModal = renderTaskModal();
    const editModal = renderEditModal();

    const body = document.querySelector('body');

    body.append(
        sidebar, content, overlay,
        projectModal, taskModal, editModal
    )
}

export function renderEditModal () {
    const editModal = document.createElement('section');
    editModal.classList = 'modal hidden edit-modal';

    const editForm = document.createElement('form');

    const editHeader = document.createElement('h2');
    editHeader.textContent = 'What are you planning for ?';

    const editTitle = document.createElement('input');
    editTitle.setAttribute('type', 'text');
    editTitle.setAttribute('id', 'edit-title');
    editTitle.setAttribute('placeholder', 'What\'s the edit?');

    const editDueDate = document.createElement('input');
    editDueDate.setAttribute('type', 'date');
    editDueDate.setAttribute('id', 'edit-duedate');

    const editPriority = document.createElement('select');
    editPriority.setAttribute('id', 'edit-priority')
    const priorities = ['High', 'Medium', 'Low']
    priorities.forEach((item) => {
        const opt = document.createElement('option');
        opt.textContent = item;
        opt.setAttribute('value', item)
        editPriority.appendChild(opt)
    });

    const editProject = document.createElement('select');
    editProject.setAttribute('id', 'edit-project');
    const allProjects = getProjects()
    allProjects.forEach((project) => {
        const opt = document.createElement('option');
        opt.textContent = project.title;
        opt.value = project.title;
        editProject.appendChild(opt)
    })

    const editButtons = document.createElement('div');
    editButtons.classList.add('buttons');

    const submiteditBtn = document.createElement('button');
    submiteditBtn.setAttribute('type', 'submit');
    submiteditBtn.setAttribute('id', 'submitEdit');
    submiteditBtn.classList = 'btn btn-submit';
    submiteditBtn.textContent = "Update";

    const canceleditBtn = document.createElement('button');
    canceleditBtn.setAttribute('id', 'cancelEdit');
    canceleditBtn.classList = 'btn btn-close';
    canceleditBtn.textContent = 'Cancel';

    editButtons.append(submiteditBtn, canceleditBtn);

    editForm.append(editHeader, editTitle, editDueDate, editPriority, editProject, editButtons)

    editModal.appendChild(editForm)

    return editModal
}

export function renderTaskModal () {
    if(document.querySelector('.task-modal')) {
        const body = document.querySelector('body');
        body.removeChild(document.querySelector('section.task-modal')) 
    };
    const taskModal = document.createElement('section');
    taskModal.classList = 'modal hidden task-modal';

    const taskForm = document.createElement('form');

    const taskHeader = document.createElement('h2');
    taskHeader.textContent = 'What are you planning for ?';

    const taskTitle = document.createElement('input');
    taskTitle.setAttribute('type', 'text');
    taskTitle.setAttribute('id', 'task-title');
    taskTitle.setAttribute('placeholder', 'What\'s the task?');

    const taskDueDate = document.createElement('input');
    taskDueDate.setAttribute('type', 'date');
    taskDueDate.setAttribute('id', 'task-duedate');

    const taskPriority = document.createElement('select');
    taskPriority.setAttribute('id', 'task-priority')
    const priorities = ['High', 'Medium', 'Low'];
    priorities.forEach((item) => {
        const opt = document.createElement('option');
        opt.textContent = item;
        opt.setAttribute('value', item)
        taskPriority.appendChild(opt)
    });

    const taskProject = document.createElement('select');
    taskProject.setAttribute('id', 'task-project');
    const allProjects = getProjects()
    allProjects.forEach((project) => {
        const opt = document.createElement('option');
        opt.textContent = project.title;
        opt.value = project.title;
        taskProject.appendChild(opt)
    })

    const taskButtons = document.createElement('div');
    taskButtons.classList.add('buttons');

    const submitTaskBtn = document.createElement('button');
    submitTaskBtn.setAttribute('type', 'submit');
    submitTaskBtn.setAttribute('id', 'submitTask');
    submitTaskBtn.classList = 'btn btn-submit';
    submitTaskBtn.textContent = "Add";

    const cancelTaskBtn = document.createElement('button');
    cancelTaskBtn.setAttribute('id', 'cancelTask');
    cancelTaskBtn.classList = 'btn btn-close';
    cancelTaskBtn.textContent = 'Cancel';

    taskButtons.append(submitTaskBtn, cancelTaskBtn);

    taskForm.append(taskHeader, taskTitle, taskDueDate, taskPriority, taskProject, taskButtons)

    taskModal.appendChild(taskForm);

    return taskModal
}

function renderProjectModal() {
    const projectModal = document.createElement('section');
    projectModal.classList = 'modal hidden project-modal';

    const projectForm = document.createElement('form');

    const h2 = document.createElement('h2');
    h2.textContent = 'What\'s your new project?';

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'project-name');

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');

    const submitBtn = document.createElement('button');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.setAttribute('id', 'submit');
    submitBtn.classList = 'btn btn-submit';
    submitBtn.textContent = "Add";

    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('id', 'cancel');
    cancelBtn.classList = 'btn btn-close';
    cancelBtn.textContent = 'Cancel'
    buttons.append(submitBtn, cancelBtn);

    projectForm.append(h2, nameInput, buttons);

    projectModal.appendChild(projectForm);

    return projectModal
}

function renderSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const profile = document.createElement('div');
    profile.classList.add('profile');

    const profileIcon = new Image();
    profileIcon.src = BearIcon;
    profileIcon.classList.add('icon');

    const h3 = document.createElement('h3');
    h3.setAttribute('id','username');
    h3.textContent = 'TODO\'S APP';

    profile.append(profileIcon, h3);

    const navigation = document.createElement('div');
    navigation.classList.add('navigation');

    const button1 = document.createElement('button');
    const searchIcon = new Image();
    searchIcon.src = searchIconSrc;
    searchIcon.classList.add('icon')
    const div1 = document.createElement('div');
    div1.textContent = 'Search'
    button1.append(searchIcon, div1);

    const button2 = document.createElement('button');
    const inboxIcon = new Image();
    inboxIcon.src = inboxIconSrc;
    inboxIcon.classList.add('icon')
    const div2 = document.createElement('div');
    div2.textContent = 'Inbox'
    button2.append(inboxIcon, div2);

    const button3 = document.createElement('button');
    const todayIcon = new Image();
    todayIcon.src = todayIconSrc;
    todayIcon.classList.add('icon')
    const div3 = document.createElement('div');
    div3.textContent = 'Today\'s'
    button3.append(todayIcon, div3);

    const button4 = document.createElement('button');
    const calendarIcon = new Image();
    calendarIcon.src = calendarIconSrc;
    calendarIcon.classList.add('icon')
    const div4 = document.createElement('div');
    div4.textContent = 'Upcoming'
    button4.append(calendarIcon, div4);

    navigation.append(button1, button2, button3, button4);
    
    const projects = document.createElement('div');
    projects.classList.add('projects');
    const h4 = document.createElement('h4');
    h4.textContent = 'My Projects';

    const addButton = document.createElement('button')
    addButton.classList.add('add-project');
    const addIcon = new Image()
    addIcon.src = addProjectIcon;
    addIcon.height = '25';
    addIcon.width = '25';
    
    addButton.append(addIcon, 'Add project')

    projects.append(h4, addButton);
    
    sidebar.append(profile, navigation, projects);

    return sidebar
}

function renderContentUI () {
    const content = document.createElement('div')
    content.classList.add('content');

    const addBtn = document.createElement('button');

    const addIcon = new Image();
    addIcon.src = addIconSrc;
    addIcon.classList.add('w-20')

    const span = document.createElement('span');
    span.textContent = 'Add Task';

    addBtn.append(addIcon, span);

    const addTaskDiv = document.createElement('div')
    addTaskDiv.classList.add('add-task');
    addTaskDiv.appendChild(addBtn);

    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    const header = document.createElement('h1');
    header.classList.add('header');

    container.appendChild(header);

    content.append(addTaskDiv, container);

    return content;
}