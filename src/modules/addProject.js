import getProjects from "./getProjects";

export default function addProject(project) {
  let projects = getProjects();
  projects.push(project);
  localStorage.setItem("projects", JSON.stringify(projects));
  return projects
}
