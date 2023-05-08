import openModal from "./modules/openModal.js";
import closeModal from "./modules/closeModal.js";
import prevSlide from "./modules/prevSlide.js";
import nextSlide from "./modules/nextSlide.js";

const galleryContainer = document.getElementById("gallery-container");
[...galleryContainer.children].forEach(el => {
    el.addEventListener("click", () => openModal(el), false);
});

const closeButton = document.getElementById("fullscreen__close-button");
closeButton.addEventListener("click",closeModal, false);

const rightButton = document.getElementById("fullscreen__next-button");
rightButton.addEventListener("click",nextSlide, false);
const leftButton = document.getElementById("fullscreen__prev-button");
leftButton.addEventListener("click",prevSlide, false);