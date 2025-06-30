const navMobile = document.querySelector("#nav-mobile");

//console.log(navMobile);

const navTrigger = document.querySelector("#nav-trigger");

const navClose = document.querySelector("#nav-close");

const toggleMenu = () => {
  navMobile.classList.toggle("translate-x-0");

  navMobile.classList.toggle("translate-x-full");
};

navTrigger.addEventListener("click", toggleMenu);

navClose.addEventListener("click", toggleMenu);

// year
document.getElementById("year").textContent = new Date().getFullYear();

// swiper
const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: "true",
  },
});
