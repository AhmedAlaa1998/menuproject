let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let slider = document.getElementById("slider");
let stopSlider = document.getElementById("stop-slider");

let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let counter = 1;

let startSlide = window.setInterval(() => {
  slider.style.opacity = `0`;
  console.log("goodbye");
  setTimeout(() => {
    slider.style.backgroundImage = `url(${images[counter]})`;
    slider.style.opacity = `1`;
  }, 500);

  counter++;
  if (counter > images.length - 1) counter = 0;
}, 2000);

stopSlider.addEventListener("click", () => {
  clearInterval(startSlide);
});

leftArrow.addEventListener("click", () => {
  console.log("hi");
  slider.style.opacity = `0`;
  setTimeout(() => {
    slider.style.backgroundImage = `url(${images[counter]})`;
    slider.style.opacity = `1`;
  }, 500);

  counter++;
  if (counter > images.length - 1) counter = 0;
});

rightArrow.addEventListener("click", () => {
  console.log("hi");

  slider.style.opacity = `0`;
  setTimeout(() => {
    slider.style.backgroundImage = `url(${images[counter]})`;
    slider.style.opacity = `1`;
  }, 500);

  counter--;
  if (counter < 0) counter = images.length - 1;
});
