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
