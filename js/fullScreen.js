import openModal from "./openModal.js";
import closeModal from "./closeModal.js";

const galleryContainer = document.getElementById("gallery-container");
[...galleryContainer.children].forEach(el => {
    el.addEventListener("click", () => openModal(el), false);
});

const closeButton = document.getElementById("fullscreen__close-button");
closeButton.addEventListener("click",closeModal, false);