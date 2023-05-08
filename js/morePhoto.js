import checkMaxPage from "./modules/checkMaxPage.js";
import openModal from "./modules/openModal.js";
(() => {

    const moreEventHandler = () => {
        const galleryContainer = document.getElementById("gallery-container");
        const newGalleryPage = [...galleryContainer.children];
        const pageNum = newGalleryPage.length / 12;



        for (let i = 0; i < 12; i++) {
            const newCard = document.createElement("div")
            newCard.className = "gallery-card";

            newCard.innerHTML = newGalleryPage[i].innerHTML.replaceAll("page1", `page${pageNum + 1}`);
            newCard.addEventListener("click", () => openModal(newCard), false);

            galleryContainer.appendChild(newCard);
        }

        checkMaxPage();
    }
    const morePhotoButton = document.getElementById("more-photo");

    morePhotoButton.addEventListener("click", moreEventHandler, false);


})();