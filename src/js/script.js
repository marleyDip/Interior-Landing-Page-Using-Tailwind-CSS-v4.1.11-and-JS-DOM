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

// scroll reveal animation
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 3000,
  delay: 600,
  //reset: true,
});

// hero animation
sr.reveal(".hero__title", {
  origin: "top",
});

sr.reveal(".hero__subtitle", {
  origin: "top",
  delay: 700,
});

sr.reveal(".hero__btn", {
  origin: "top",
  delay: 800,
});

sr.reveal(".hero__mainImg-border", {
  delay: 700,
});

sr.reveal(".hero__mainImg", {
  delay: 800,
});

sr.reveal(".hero__featuredImg", {
  delay: 900,
});

// about animation
sr.reveal(".about__featuredImg", {
  origin: "top",
  delay: 300,
});

sr.reveal(".about__scrolldown", {
  delay: 400,
});

sr.reveal(".about__featuredImg2", {
  delay: 600,
});

sr.reveal(".about__stats", {
  delay: 600,
});

sr.reveal(".about__form", {
  delay: 700,
});

// services animation
sr.reveal(".services__title", {
  delay: 400,
});

sr.reveal(".services__item", {
  distance: "100px",
  interval: 100,
});

//services-secondary animation

sr.reveal(".services-secondary__title", {
  delay: 500,
});

sr.reveal(".services-secondary__img1", {
  delay: 600,
});

sr.reveal(".services-secondary__img2", {
  delay: 700,
});

sr.reveal(".services-secondary__mobile", {
  delay: 600,
});

sr.reveal(".services-secondary__mobileTextBtn", {
  delay: 700,
});

// service-tertiary animation
sr.reveal(".services-tertiary__title", {
  delay: 500,
});

sr.reveal(".services-tertiary__imgs", {
  delay: 600,
});

sr.reveal(".services-tertiary__p", {
  delay: 700,
});

// projects animation
sr.reveal(".projects__title", {
  delay: 500,
});

sr.reveal(".projects__slider", {
  delay: 600,
});

// testimonials animation
sr.reveal(".testimonials__title", {
  delay: 500,
});

sr.reveal(".testimonials__slider", {
  delay: 600,
});

// contact animation
sr.reveal(".contact__textImgContainer", {
  delay: 100,
});

// footer animation
sr.reveal(".footer__container", {
  delay: 200,
});

sr.reveal(".footer__copyright", {
  origin: "top",
  delay: 100,
});

sr.reveal(".footer-copyright__title", {
  delay: 200,
});
