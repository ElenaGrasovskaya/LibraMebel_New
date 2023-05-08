import pageThumbData from "./pageThumbData.js";
import viewSubslide from "./viewSubslide.js";

const nextSlide = () => {


    const fullScreenImage = document.getElementById("fullscreen__image");
    const curentThumbnails = document.getElementById("fullscreen__thumbnails");
    //fullScreenImage.style.opacity = 0;



    const newImageData = fullScreenImage.src.split('\/');
    let currentPageNum = newImageData[7];

    const tabName = newImageData[6];

    const imageNum = newImageData.pop().split("_");
    
    let newImageNum;
    let thumbMax;
    let pageNum;
    const pageMax = Object.keys(pageThumbData[tabName]).length;
    if (imageNum[0] == 12) {
        newImageNum = `1_1.webp`;
        pageNum = "page"+(+currentPageNum.split("page")[1] + 1);
        thumbMax = pageThumbData[tabName][pageNum]["1"];
    }
    else {
        pageNum = currentPageNum;
        newImageNum = `${+imageNum[0] + 1}_1.webp`;
        thumbMax = pageThumbData[tabName][pageNum][+imageNum[0] + 1];

    }
    fullScreenImage.src = fullScreenImage.src.replace(currentPageNum, pageNum);

    fullScreenImage.src = fullScreenImage.src.replace(imageNum.join("_"), newImageNum);

    while (curentThumbnails.firstChild) {
        curentThumbnails.removeChild(curentThumbnails.lastChild);
    }


    //fullScreenImage.style.opacity = 1;
    const thumbnailURL = fullScreenImage.src.replace("galllery__img", "galllery__thumbnails");

    for (let i = 0; i < thumbMax; i++) {
        const newThumb = document.createElement("img")
        newThumb.classList = "fullscreen__thumbnails-item";
        if (i === 0)
            newThumb.classList += " fullscreen__thumbnails-item--active";

        newThumb.src = thumbnailURL.replace(`_${thumbnailURL.split("_").pop()}`, `_${i + 1}.webp`);
        newThumb.addEventListener("click", () => viewSubslide(newThumb), false);


        curentThumbnails.appendChild(newThumb);

    }


}


export default nextSlide;