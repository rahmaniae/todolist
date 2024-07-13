export default function createTodosDom(
  index,
  todoTitle,
  todoDueDate,
  todoPriority
) {
  const inbox = document.querySelector("#container");

  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.index = index;

  const title = document.createElement("h3");
  title.textContent = todoTitle;

  const dueDate = document.createElement("div");
  dueDate.classList.add("dueDate");
  dueDate.textContent = todoDueDate;

  const priority = document.createElement("div");
  priority.classList.add("priority");

  const span = document.createElement("span");

  const flagIcon = new Image();
  flagIcon.src = "./img/flag.svg";
  flagIcon.width = "18";
  flagIcon.height = "18";

  const p = document.createElement("p");
  p.textContent = todoPriority;

  span.appendChild(flagIcon);

  priority.append(span, p);

  const details = document.createElement("div");
  details.classList.add("details");
  details.append(title, dueDate, priority);

  const icons = document.createElement("div");
  icons.classList.add("icons");

  const editIcon = new Image();
  editIcon.src = "./img/editTask.svg";
  editIcon.classList = "icon edit-task";

  const deleteIcon = new Image();
  deleteIcon.src = "./img/deleteIcon.svg";
  deleteIcon.classList = "icon delete-task";

  const span1 = document.createElement("span");
  span1.appendChild(editIcon);

  const span2 = document.createElement("span");
  span2.appendChild(deleteIcon);

  icons.append(span1, span2);

  card.append(details, icons);

  inbox.append(card);
}
