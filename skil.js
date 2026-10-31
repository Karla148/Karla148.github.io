const cards = document.querySelectorAll(".skill-card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});