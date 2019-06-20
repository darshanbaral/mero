setColors = function() {
  let images = Array.from(document.querySelectorAll("img"));
  images.forEach(elem => elem.classList.add("img-fluid", "rounded"));

  let imagecaption = Array.from(document.querySelectorAll("figcaption"));
  imagecaption.forEach(elem => elem.classList.add("initialism"));
};
window.onload = setColors;

let toggleMenu = function(x) {
  let elem = x.nextElementSibling;
  if (elem.classList.contains("d-none")) {
    elem.classList.remove("d-none");
  } else {
    elem.classList.add("d-none");
  }
};
let checkClick = function() {
  let menuContainer = document.querySelector(".dropdown-content");
  if (
    !menuContainer.contains(event.target) &&
    !document.querySelector(".dropdown").contains(event.target)
  ) {
    menuContainer.classList.add("d-none");
  }
};
window.onclick = function() {
  checkClick();
};
window.ontouchstart = function() {
  checkClick();
};
