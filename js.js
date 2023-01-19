btnClose.onclick = function () {
  menu.classList.remove("active");
};

btnOpen.onclick = function () {
  menu.classList.add("active");
};

menu.addEventListener("click", function (event) {
  if (event.target.matches(".navbar__link")) {
    menu.classList.remove("active");
  }
});
