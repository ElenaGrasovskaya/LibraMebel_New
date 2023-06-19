const openModalProj = (preview) => {
    const modal = document.getElementById("modal");

    const currentImage = document.getElementById("fullscreen__image");
    if (preview.src) {
        currentImage.src = preview.src;
    }
    else {
        currentImage.src = preview.children[0].src;
    }
    modal.classList.replace("fullscreen__OFF", "fullscreen__ON");
}

export default openModalProj;

