function viewSubslide (thumb) {

    const fullScreenImage = document.getElementById("fullscreen__image");
    const newSrcEnd = thumb.src.split("_").pop();
    const prevSrcEnd = fullScreenImage.src.split("_").pop();
    const curentThumbnails = document.getElementById("fullscreen__thumbnails");
    const thumbnails =[...curentThumbnails.children];
    thumbnails.forEach((item)=> {item.classList =  "fullscreen__thumbnails-item"})
    thumb.classList += " fullscreen__thumbnails-item--active";
    fullScreenImage.src = fullScreenImage.src.replace(prevSrcEnd, newSrcEnd);

}

export default viewSubslide;