function checkMaxPage() {

    let maxPage = 2;
    const toHideButton = document.getElementById("more-photo");
    const galleryContainer = document.getElementById("gallery-container");
    const newGalleryPage = [...galleryContainer.children];
    const pageNum = newGalleryPage.length / 12;
    

    if (newGalleryPage[0].innerHTML.match(/kitchen/g)) {
        maxPage = 7;

    }
    else if (newGalleryPage[0].innerHTML.match(/wardrobe/g)) {

        maxPage = 2;
    }
    else if (newGalleryPage[0].innerHTML.match(/bathroom/g)) {

        maxPage = 2;
    }
    else if (newGalleryPage[0].innerHTML.match(/other/g)) {

        maxPage = 2;
    }
    else
        maxPage = 2;

    if (pageNum === maxPage) {
        toHideButton.style.display = "none";
    }
    else {
        toHideButton.style.display = "block";
    }

}
export default checkMaxPage;
