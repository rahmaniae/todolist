import getTodos from "./getTodos";
import createTodosDom from "./createTodosDom";
import resetTodos from "./resetTodos";
import changeHeader from "./changeHeader";
import resetEvents from "./resetEventListeners";

export default function renderInbox() {
  changeHeader("Inbox");
  resetTodos();
  const todos = getTodos();
  todos.forEach((element, index) => {
    createTodosDom(index, element.todoTitle, element.dueDate, element.priority);
  });
  resetEvents();
}
