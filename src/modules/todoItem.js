export default class ToDoItem {
    constructor(title, dueDate, priority, projectName) {
        this.todoTitle = title,
        this.dueDate = dueDate,
        this.priority = priority,
        this.projectName = projectName,
        this.status = "hiatus"
    }  
}