const home = document.querySelector(".home");
const about = document.querySelector(".about");

home.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

about.addEventListener("click", () => {
  window.scrollTo({
    top: 1009,
    behavior: "smooth",
  });
});
