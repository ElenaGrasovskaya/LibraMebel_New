function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.replace("fullscreen__ON", "fullscreen__OFF");
    const curentThumbnails = document.getElementById("fullscreen__thumbnails");
    while (curentThumbnails.firstChild) {
        curentThumbnails.removeChild(curentThumbnails.lastChild);
      }

}

export default closeModal;