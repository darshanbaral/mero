setColors = function() {
  let images = Array.from(document.querySelectorAll("img"));
  images.forEach(elem => elem.classList.add("img-fluid", "rounded"));

  let imagecaption = Array.from(document.querySelectorAll("figcaption"));
  imagecaption.forEach(elem => elem.classList.add("initialism"));
};
window.onload = setColors;
