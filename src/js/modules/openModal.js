import pageThumbData from "./pageThumbData";
import viewSubslide from "./viewSubslide";

function openModal(preview){
    
    
    const modal = document.getElementById("modal");
    const currentImage = document.getElementById("fullscreen__image");
    const curentThumbnails = document.getElementById("fullscreen__thumbnails");
    const newImageData =  preview.children[0].src.split("\/");

    const pageNum = newImageData[7];
    const tabName = newImageData[6];
    const imgNum = newImageData[8].split("_")[0];
   
  
    const thumbMax = pageThumbData[tabName][pageNum][imgNum];

    modal.classList.replace("fullscreen__OFF", "fullscreen__ON");

    const newImgURL = preview.children[0].src.replace("galllery__thumbnails", "galllery__img");


    for (let i = 0; i < thumbMax; i++) {
        const newThumb = document.createElement("img")
        newThumb.classList = "fullscreen__thumbnails-item";
        if (i === 0)
            newThumb.classList += " fullscreen__thumbnails-item--active";

        newThumb.src = preview.children[0].src.replace("_1.webp", `_${i + 1}.webp`);
        newThumb.addEventListener("click", () => viewSubslide(newThumb), false);

        curentThumbnails.appendChild(newThumb);
    }
    currentImage.style.opacity = .5;

    currentImage.src = newImgURL;

    currentImage.style.opacity = 1;

}


export default openModal;


