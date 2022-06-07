/* ========================== theme light and dark mode =========================== */
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.add("fa-moon");
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    const alternateStyles = document.querySelectorAll(".alternate-style");
    alternateStyles.forEach((style) => {
      if (style.getAttribute("title") == "color-3") {
        style.removeAttribute("disabled"); //enable green
      } else if (style.getAttribute("title") == "color-1") {
        style.setAttribute("disabled", "true"); //disable red
      }
    });
  } else {
    const alternateStyles = document.querySelectorAll(".alternate-style");
    alternateStyles.forEach((style) => {
      if (style.getAttribute("title") == "color-3") {
        style.setAttribute("disabled", "true"); //disable green
      } else if (style.getAttribute("title") == "color-1") {
        style.removeAttribute("disabled"); //enable red
      }
    });
  }
});
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
