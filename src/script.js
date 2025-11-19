document.addEventListener("DOMContentLoaded", () => {
  let cityCards = document.querySelectorAll(".city-hover");
  console.log(cityCards);
  cityCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
      const hoverInfo = card.querySelector(".hover-info");
      hoverInfo.classList.add("show-hover-info");
      hoverInfo.classList.remove("hide-hover-info");
    });
  });

  cityCards.forEach((card) => {
    card.addEventListener("mouseout", () => {
      const hoverInfo = card.querySelector(".hover-info");
      hoverInfo.classList.remove("show-hover-info");
      hoverInfo.classList.add("hide-hover-info");
    });
  });
});
