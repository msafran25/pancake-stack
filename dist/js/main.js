//Menu
const btnHamburger = document.querySelector(".header__btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".has-fade");
const menuLinks = document.querySelectorAll(".header__menu a");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

function closeMenu() {
  body.classList.remove("noscroll");
  header.classList.remove("open");
  fadeElements.forEach((element) => {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
  });
}

function openMenu() {
  body.classList.add("noscroll"); //Closed menu
  header.classList.add("open");
  fadeElements.forEach((element) => {
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
  });
}

//Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider__item");
const nextBtn = document.querySelector(".slider__nextBtn");
const prevBtn = document.querySelector(".slider__prevBtn");

slides.forEach((slide, i) => {
  slide.style.left = `${i * 100}%`;
});

let counter = 0;

nextBtn.addEventListener("click", () => {
  counter++;
  carousel();
});
prevBtn.addEventListener("click", () => {
  counter--;
  carousel();
});

function carousel() {
  // Infinite carousel
  // if(counter === slides.length){
  //     counter = 0;
  // };
  // if(counter < 0){
  //     counter = slides.length -1;
  // }

  // Disabled buttons

  if (counter < slides.length - 1) {
    nextBtn.removeAttribute("disabled", "");
  } else {
    nextBtn.setAttribute("disabled", "");
  }

  if (counter > 0) {
    prevBtn.removeAttribute("disabled", "");
  } else {
    prevBtn.setAttribute("disabled", "");
  }

  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

//Automatic slideshow
// let indexValue = 0;
// function slideShow() {
//   setTimeout(slideShow, 2500);

//   for (let x = 0; x < slides.length; x++) {
//     slides[x].style.display = "none";
//   }
//   indexValue++;
//   if (indexValue > slides.length) {
//     indexValue = 1;
//   }
//   slides[indexValue - 1].style.display = "block";
//
// }
// slideShow();

// Check if restaurants are open now
const openInfo = document.querySelector(".locations__open-closed");
let weekDay = new Date().getDay();
let hour = new Date().getHours();

if (weekDay != 1 && hour >= 12 && hour <= 21) {
  openInfo.textContent = "open";
} else {
  openInfo.textContent = "closed";
}
