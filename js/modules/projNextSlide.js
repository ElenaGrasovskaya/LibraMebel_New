
const projNextSlide = () => {

    const fullScreenImage = document.getElementById("fullscreen__image");
    const fileName = fullScreenImage.src.split("/").pop();
    let fileNum = fileName.split("_")[1].split(".")[0];
    if(fileNum==17)
    {
        fileNum=1;
    }
    else {
        fileNum++;
    }

    fullScreenImage.src = fullScreenImage.src.replace(fileName, `1_${fileNum}.webp`)
   
   
}


export default projNextSlide;