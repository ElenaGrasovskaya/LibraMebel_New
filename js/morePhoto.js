import checkMaxPage from "./checkMaxPage.js";
import openModal from "./openModal.js";
(() => {

    const moreEventHandler = () => {
        const galleryContainer = document.getElementById("gallery-container");
        const newGalleryPage = [...galleryContainer.children];
        const pageNum = newGalleryPage.length / 12;



        for (let i = 0; i < 12; i++) {
            const newCard = document.createElement("div")
            newCard.className = "gallery-card";

            newCard.innerHTML = newGalleryPage[i].innerHTML.replaceAll("page1", `page${pageNum + 1}`);

            galleryContainer.appendChild(newCard);
        }

        [...galleryContainer.children].forEach(el => {
            el.addEventListener("click", () => openModal(el), false);
        });

        checkMaxPage();


    }
    const morePhotoButton = document.getElementById("more-photo");

    morePhotoButton.addEventListener("click", moreEventHandler, false);


})();