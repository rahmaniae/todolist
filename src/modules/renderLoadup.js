import renderProjects from "./renderProjects.js";
import renderInbox from "./renderInbox";
import resetEvents from "./resetEventListeners.js";
import renderInterface  from "./renderInterface";

export default function renderLoadup() {
    renderInterface();
    resetEvents()
    renderInbox()
    renderProjects();
}
