import openModal from "./modules/openModal";
import closeModal from "./modules/closeModal";
import closeNav from "./modules/closeNav";
import prevSlide from "./modules/prevSlide";
import nextSlide from "./modules/nextSlide";


const galleryContainer = document.getElementById("gallery-container");
[...galleryContainer.children].forEach(el => {
    el.addEventListener("click", () => openModal(el), false);
});

const hiddenNav = [...document.getElementsByClassName("circle-navigation__link")];
hiddenNav.forEach(el => {
    el.addEventListener("click", () => closeNav(el), false);
});

const closeButton = document.getElementById("fullscreen__close-button");
closeButton.addEventListener("click",closeModal, false);

const rightButton = document.getElementById("fullscreen__next-button");
rightButton.addEventListener("click",nextSlide, false);
const leftButton = document.getElementById("fullscreen__prev-button");
leftButton.addEventListener("click",prevSlide, false);


