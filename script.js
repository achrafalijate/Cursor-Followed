const dot = document.querySelector("[data-cursor-dot]");
const blur = document.querySelector("[data-cursor-blur]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX - 17;
  const posY = e.clientY - 17;
  const posXX = e.clientX - 250;
  const posYY = e.clientY - 250;

  dot.style.transform = `translate(${posX}px, ${posY}px)`;
  dot.style.transition = "transform 0.2s ease-out";

  blur.style.transform = `translate(${posXX}px, ${posYY}px)`;
  blur.style.transition = "transform 1.5s ease-out";
});
