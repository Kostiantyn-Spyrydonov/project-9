/* libraries */
import Swiper from 'swiper';
import 'swiper/css';

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import Raty from 'raty-js';

// header

const mobileMenu = document.querySelector(".mobile-menu");
const burgerButton = document.querySelector(".burger-button");
const closeButton = document.querySelector(".close-button");

const toggleMenu = () => {
  mobileMenu.classList.toggle("is-open");
  document.body.classList.toggle("no-scroll");
};

burgerButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) toggleMenu();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
    toggleMenu();
  }
});