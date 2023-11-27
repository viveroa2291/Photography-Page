// When minimized, it will do an animation with the hamburger feature
function myRotate(x) {    
    x.classList.toggle("change");
}   
// When minimized, it will display the hamburger feature 
function toggleNav() {    
    let elements = document.getElementsByClassName('minimize');
    if(document.getElementById('hamburger').style.marginBottom === "11rem") {
        document.getElementById('hamburger').style.marginBottom="0";
    }
    else {
       document.getElementById('hamburger').style.marginBottom="11rem"; 
    }
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('show');
    }
}
function cardView() {
    document.getElementById("image-view-demo").style.display = "none";
    document.getElementById("demo").style.display = "block";
} 
function imageView() {
    document.getElementById("demo").style.display = "none";
    document.getElementById("image-view-demo").style.display = "block";
}
class ImageSet {
    constructor(image, imageAlt, date, description, title, imageWidth) {
      this.image = image;
      this.imageAlt = imageAlt; 
      this.date = date;
      this.description = description;
      this.title = title;
      this.imageWidth = imageWidth;
    }
  }