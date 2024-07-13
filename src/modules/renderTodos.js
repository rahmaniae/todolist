import createTodosDom from "./createTodosDom";
import resetTodos from "./resetTodos";
import changeHeader from "./changeHeader";
import renderInbox from "./renderInbox";
import resetEvents from "./resetEventListeners";
import getTodos from "./getTodos";

export default function renderTodos(e) {
  resetTodos();

  const todos = getTodos();
  let projectName;
  if (e) {
    if (e.target.tagName === "IMG" || e.target.tagName === "SPAN") {
      projectName = e.target.parentElement.textContent;
    } else {
      projectName = e.target.textContent;
    }
  } else {
    projectName = document.querySelector(".header").textContent;
    if (projectName === "Inbox") {
      renderInbox();
      return;
    }
  }

  const filteredTodos = todos
    .map((element, index) => {
      element.index = index;
      return element;
    })
    .filter((item) => {
      return item.projectName == projectName;
    });
  filteredTodos.forEach((todo) => {
    createTodosDom(todo.index, todo.todoTitle, todo.dueDate, todo.priority);
  });

  changeHeader(projectName);
  resetEvents();
}
