import renderInbox from "./renderInbox";

export default function deleteProjectTodos(projectName) {
  let todos = JSON.parse(localStorage.getItem("todos"));
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todos[i].projectName == projectName) {
      todos.splice(i, 1);
    }
  }
  localStorage.setItem("todos", JSON.stringify(todos));
  renderInbox();
}
