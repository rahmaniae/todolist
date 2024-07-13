import getTodos from "./getTodos";
import { renderEditModal } from "./renderInterface";
import renderTodos from "./renderTodos";
import ToDoItem from "./todoItem";

export default function editTodo(e) {
  const index =
    e.target.parentElement.parentElement.parentElement.dataset.index;
  const todos = getTodos();
  const todo = todos[index];
  renderEditModal();
  openEditModal();
  setOldValues(todo);
  console.log("here");
  const submitBtn = document.querySelector("#submitEdit");
  submitBtn.addEventListener("click", updateTodo(index, todos));
  const closeBtn = document.querySelector("#cancelEdit");
  closeBtn.addEventListener("click", closeEditModal);
  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", closeEditModal);
}

function openEditModal() {
  const modal = document.querySelector(".edit-modal");
  const overlay = document.querySelector(".overlay");

  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeEditModal() {
  const modal = document.querySelector(".edit-modal");
  const overlay = document.querySelector(".overlay");

  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  clearEditModal();
}

function clearEditModal() {
  const editTitle = document.querySelector("#edit-title");
  const editDueDate = document.querySelector("#edit-duedate");
  const editPriority = document.querySelector("#edit-priority");
  const editProject = document.querySelector("#edit-project");

  editTitle.value = "";
  editDueDate.value = "";
  editPriority.value = "";
  editProject.value = "";
}
function setOldValues(todoItem) {
  const editTitle = document.querySelector("#edit-title");
  const editDueDate = document.querySelector("#edit-duedate");
  const editPriority = document.querySelector("#edit-priority");
  const editProject = document.querySelector("#edit-project");

  editTitle.value = todoItem.todoTitle;
  editDueDate.value = todoItem.dueDate;
  editPriority.value = todoItem.priority;
  editProject.value = todoItem.projectName;
}

function updateTodo(index, todos) {
  const editTitle = document.querySelector("#edit-title");
  const editDueDate = document.querySelector("#edit-duedate");
  const editPriority = document.querySelector("#edit-priority");
  const editProject = document.querySelector("#edit-project");

  const newTodos = todos;
  const i = index;
  console.log("i get: " + i);
  const returnFn = (e) => {
    console.log(e.target);
    e.preventDefault();
    const newTodo = new ToDoItem(
      editTitle.value,
      editDueDate.value,
      editPriority.value,
      editProject.value
    );
    newTodos.splice(i, 1, newTodo);
    localStorage.setItem("todos", JSON.stringify(newTodos));
    renderTodos();
    closeEditModal();
    e.target.removeEventListener("click", returnFn);
  };

  return returnFn;
}
