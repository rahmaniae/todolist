export default function getTodos() {
  const todos = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];
  return todos;
}
