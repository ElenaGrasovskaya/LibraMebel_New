(() => {
    const maxPage = 8;
    const moreEventHandler = () => {
        const galleryContainer = document.getElementById("gallery-container");
        
        const newGalleryPage =[...galleryContainer.children];
        const newCard = document.createElement("div")
        newCard.className = "gallery-card";
        newCard.innerHTML = newGalleryPage[0].innerHTML.replace("page1", "page2");
        galleryContainer.appendChild(newCard);
       
        
        



    }
    const morePhotoButton = document.getElementById("more-photo");
    morePhotoButton.addEventListener("click", moreEventHandler, false);

  })();