import getTodos from "./getTodos";
import { closeTaskModal, clearTaskModal } from './resetEventListeners'
import renderInbox from "./renderInbox";
import ToDoItem from "./todoItem";
import { renderTaskModal } from "./renderInterface";

export default function submitTask(e) {
    const taskTitle = document.querySelector('#task-title').value;
    const dueDate = document.querySelector('#task-duedate').value;
    const priority = document.querySelector('#task-priority').value;
    const taskProject = document.querySelector('#task-project').value;

    e.preventDefault();
    const todoItem = new ToDoItem(taskTitle, dueDate, priority, taskProject);
    addToDoItem(todoItem);
    closeTaskModal()
    clearTaskModal()
    renderInbox();   
}

function addToDoItem(toDoItem){
    let todos = getTodos()
    todos.unshift(toDoItem);
    localStorage.setItem('todos', JSON.stringify(todos));
}