import getTodos from "./getTodos";
import renderTodos from "./renderTodos";

export default function deleteTodo(e) {
  let index = e.target.parentElement.parentElement.parentElement.dataset.index;
  const todos = getTodos();
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}
