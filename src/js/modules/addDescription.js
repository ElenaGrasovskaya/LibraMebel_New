import descriptionData from "./descriptionData"

function addDescription(item){
  
    const imgSrc = item.children[0].src;

    item.children[1].children[0].innerHTML = descriptionData[imgSrc.split("galllery__thumbnails")[1]]?descriptionData[imgSrc.split("galllery__thumbnails")[1]]:"";

}

export default addDescription;