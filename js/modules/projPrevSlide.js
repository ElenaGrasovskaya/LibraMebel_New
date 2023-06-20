import pageThumbData from "./pageThumbData.js";
import viewSubslide from "./viewSubslide.js";

const projPrevSlide = () => {

    const fullScreenImage = document.getElementById("fullscreen__image");
    const fileName = fullScreenImage.src.split("/").pop();
    let fileNum = fileName.split("_")[1].split(".")[0];
    if (fileNum == 1) {
        fileNum = 17;
    }
    else {
        fileNum--;
    }

    fullScreenImage.src = fullScreenImage.src.replace(fileName, `1_${fileNum}.webp`)

}


export default projPrevSlide;