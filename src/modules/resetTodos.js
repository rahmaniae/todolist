export default function resetTodos() {
  const container = document.querySelector("#container");
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => container.removeChild(card));
}
