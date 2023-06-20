import openModal from "./modules/openModalProj.js";
import closeModal from "./modules/closeModal.js";
import projPrevSlide from "./modules/projPrevSlide.js";
import projNextSlide from "./modules/projNextSlide.js";


const projGalleryContainer = document.getElementById("proj-gallery");
[...projGalleryContainer.children].forEach(el => {
    el.addEventListener("click", () => openModal(el), false);
});


const closeButton = document.getElementById("fullscreen__close-button");
closeButton.addEventListener("click",closeModal, false);

const premisesImg = document.getElementById("premises-img");
premisesImg.addEventListener("click", () => openModal(premisesImg), false)
const drawingImg = document.getElementById("drawing-img");
drawingImg.addEventListener("click", () => openModal(drawingImg), false)
const readyImg = document.getElementById("ready-img");
readyImg.addEventListener("click", () => openModal(readyImg), false)

const rightButton = document.getElementById("fullscreen__next-button");
rightButton.addEventListener("click",projNextSlide, false);
const leftButton = document.getElementById("fullscreen__prev-button");
leftButton.addEventListener("click",projPrevSlide, false);