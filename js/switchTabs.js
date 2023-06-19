import checkMaxPage from "./modules/checkMaxPage.js";
import openModal from "./modules/openModal.js";
(() => {

    const tabHandler = (tabName) => {

        const galleryContainer = document.getElementById("gallery-container");
        console.log(tabName);
        let galleryChildren = [...galleryContainer.children];
        const itemQty = [...galleryContainer.children].length;

        for (let i = itemQty - 1; i >= 0; --i) {

            galleryContainer.children[i].style.opacity = 0;
        }
        setTimeout(() => {
            for (let i = itemQty - 1; i >= 0; --i) {

                galleryContainer.removeChild(galleryContainer.children[i])
            }

            for (let i = 0; i < 12; i++) {
                const newCard = document.createElement("div")
                newCard.className = "gallery-card";

                newCard.innerHTML = galleryChildren[i].innerHTML
                    .replaceAll(new RegExp("kitchen|wardrobe|bathroom|other", "g"), `${tabName}`);
                newCard.style.opacity = 0;

                galleryContainer.appendChild(newCard);
            }


            for (let i = 0; i < 12; i++) {

                galleryContainer.children[i].style.opacity = 1;
            }

            checkMaxPage();
            [...galleryContainer.children].forEach(el => {
                el.addEventListener("click", () => openModal(el), false);
            });


        }, "200")


    }
    const kitchenTab = document.getElementById("kitchen-tab");
    const closetTab = document.getElementById("wardrobe-tab");
    const bathroomTab = document.getElementById("bathroom-tab");
    const otherTab = document.getElementById("other-tab");
    const kitchenTabHero = document.getElementById("hero-kitchen-tab");
    const closetTabHero1 = document.getElementById("hero-wardrobe-tab1");
    const closetTabHero2 = document.getElementById("hero-wardrobe-tab2");
    const bathroomTabHero = document.getElementById("hero-bathroom-tab");
    const otherTabHero = document.getElementById("hero-other-tab");

    kitchenTabHero.addEventListener("click", () => tabHandler("kitchen"), false);
    closetTabHero1.addEventListener("click", () => tabHandler("wardrobe"), false);
    closetTabHero2.addEventListener("click", () => tabHandler("wardrobe"), false);
    bathroomTabHero.addEventListener("click", () => tabHandler("bathroom"), false);
    otherTabHero.addEventListener("click", () => tabHandler("other"), false);

    kitchenTab.addEventListener("click", () => tabHandler("kitchen"), false);
    closetTab.addEventListener("click", () => tabHandler("wardrobe"), false);
    bathroomTab.addEventListener("click", () => tabHandler("bathroom"), false);
    otherTab.addEventListener("click", () => tabHandler("other"), false);


})();