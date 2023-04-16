const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slides = document.querySelector(".slides");

left.addEventListener("click", () => {
  slides.scrollLeft -= slides.offsetWidth;
});

right.addEventListener("click", () => {
  slides.scrollLeft += slides.offsetWidth;
});
