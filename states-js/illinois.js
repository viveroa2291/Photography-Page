function hide() {
    var z = document.getElementById("hide-section");
    var overview = document.getElementById("brief");
    var ar = document.getElementById("illinois");
    if(overview.style.display === "none") {
      z.innerHTML = "Hide";
      z.classList.remove("button-center");
      overview.style.display = "block";
      ar.style.display = "block";
    }
    else {
      z.innerHTML = "Show";
      z.classList.add("button-center");
      overview.style.display = "none";
      ar.style.display = "none";
    }
}

var modal = document.getElementById("myModal");
var notWideImg = document.getElementsByClassName("illinois not-wide");
var wideImg = document.getElementsByClassName("illinois-images wide");
var img = document.getElementsByClassName("illinois-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

const chicagoImages = ["../states-images/illinois-images/balcony-me.jpeg"];
const chicagoImagesAlt = ["This is a picture of me in the balcony."];
const chicagoDates = ["July 29, 2022"];
const chicagoDescription = ["This is a picture of me in the balcony."];
const chicagoTitle = ["Chloe's Balcony"];
const chicagoImageWidth = ["not-wide"];

const cubsImages = [""];
const cubsImagesAlt = [];
const cubsDates = [];
const cubsDescription = [];
const cubsTitle = [];
const cubsImageWidth = [];

const suburbsImages = ["../states-images/illinois-images/barrington-d-j.jpeg", "../states-images/illinois-images/barrington-group.jpeg", "../states-images/illinois-images/barrington.jpeg", "../states-images/illinois-images/bowling.jpeg"];
const suburbsImagesAlt = ["This is a picture of my friend Jon's backyard during his graduation party.", "This is a picture of my friend Jon's graduation party.", "This is a group picture of my friends at my friend Jon's graduation party", "This is a picture of my friend Nikki, Mikayla, and I bowling at Kings in Rosemont."];
const suburbsDates = ["June 27, 2015", "June 27, 2015", "June 27, 2015", "October 7, 2023"];
const suburbsDescription = ["This is a picture of my friend Jon's backyard during his graduation party.", "This is a picture of my friend Jon's graduation party.", "This is a group picture of my friends at my friend Jon's graduation party", "This is a picture of my friend Nikki, Mikayla, and I bowling at Kings in Rosemont."];
const suburbsTitle = ["Barrington, Illinois", "Barrington, Illinois", "Barrington, Illinois", "Rosemont, Illinois"];
const suburbsImageWidth = ["mid-wide", "mid-wide", "mid-wide", "mid-wide"]; 

const boatsImages = ["../states-images/illinois-images/boat-group.jpeg", "../states-images/illinois-images/boat-sami-chloe-nikki.jpeg", "../states-images/illinois-images/boat-me2.jpeg", "../states-images/illinois-images/boat-me1.jpeg", "../states-images/illinois-images/boat-me3.jpeg", "../states-images/illinois-images/boat-group1.jpeg", "../states-images/illinois-images/boat-me.jpeg"];
const boatsImagesAlt = ["This is a picture of my friends and I on a Chicago boat.", "This is a group picture of my best friends on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me as a captain on a boat in the Chicago River.", "This is a group picture of my friends and I on a boat.", "This is a picture of me on a boat in Chicago."];
const boatsDates = ["July 3, 2023", "September 4, 2023", "September 4, 2023", "September 4, 2023", "September 10, 2023", "September 30, 2023", "September 30, 2023"];
const boatsDescription = ["This is a picture of my friends and I on a Chicago boat.", "This is a group picture of my best friends on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me as a captain on a boat in the Chicago River.", "This is a group picture of my friends and I on a boat.", "This is a picture of me on a boat in Chicago."];
const boatsTitle = ["Chicago, Illinois", "Chicago, Illinois", "Chicago, Illinois", "Chicago, Illinois", "Chicago River", "Chicago, Illinois", "Chicago, Illinois"];
const boatsImageWidth = ["mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide"];

const wrigleyImages = [""];
const wrigleyImagesAlt = [];
const wrigleyDates = [];
const wrigleyDescription = [];
const wrigleyTitle = [];
const wrigleyImageWidth = [];

const starveImages = [""];
const starveImagesAlt = [];
const starveDates = [];
const starveDescription = [];
const starveTitle = [];
const starveImageWidth = [];

const sixflagsImages = [""];
const sixflagsImagesAlt = [];
const sixflagsDates = [];
const sixflagsDescription = [];
const sixflagsTitle = [];
const sixflagsImageWidth = [];

sections("Chicago", chicagoImages, chicagoImagesAlt, chicagoDates, chicagoDescription, chicagoTitle, chicagoImageWidth); 
sections("Chicago Cubs", cubsImages, cubsImagesAlt, cubsDates, cubsDescription, cubsTitle, cubsImageWidth);
sections("Suburbs", suburbsImages, suburbsImagesAlt, suburbsDates, suburbsDescription, suburbsTitle, suburbsImageWidth);
sections("Chicago Boats", boatsImages, boatsImagesAlt, boatsDates, boatsDescription, boatsTitle, boatsImageWidth); 
sections("Wrigleyfield", wrigleyImages, wrigleyImagesAlt, wrigleyDates, wrigleyDescription, wrigleyTitle, wrigleyImageWidth);
sections("Starved Rock", starveImages, starveImagesAlt, starveDates, starveDescription, starveTitle, starveImageWidth);
sections("Six Flags Great America", sixflagsImages, sixflagsImagesAlt, sixflagsDates, sixflagsDescription, sixflagsTitle, sixflagsImageWidth);

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);    

    function images() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    for(var a = 0; a < chicagoImages.length; a++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = chicagoImages[a];
        console.log(chicagoImages[a]);
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var b = 0; b <  cubsImages.length; b++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = cubsImages[b];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var c = 0; c < suburbsImages.length; c++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = suburbsImages[c];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var d = 0; d < boatsImages.length; d++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = boatsImages[d];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var e = 0; e < wrigleyImages.length; e++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = wrigleyImages[e];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
function sections(section, image, imageAlt, dates, description, title, imageWidth) {
    let count = 0.0;
    
    var element_text = document.createElement("h3");
    element_text.classList.add('body-headers');
    element_text.innerHTML = section;
    
    var element_hr = document.createElement("hr");
    element_hr.classList.add('header-hr');
    document.getElementById("demo").appendChild(element_text);
    document.getElementById("demo").appendChild(element_hr);
    var element_div_element = document.createElement("div");
    element_div_element.classList.add('body-images');
    document.getElementById("demo").appendChild(element_div_element);
    
    var element_image_element;
    var element_card_element;
    var element_card_body_element;
    var element_card_text;
    var element_card_date;
    var element_card_date_small;
    var element_card_body_element;
    count = 0.0;
    for (var b = 0; b < image.length; b++) {
      if(count >= 4.0) {
        element_div_element = document.createElement("div");
        element_div_element.classList.add('body-images');
        document.getElementById("demo").appendChild(element_div_element);
        count = 0.0;
      }
        if(imageWidth[b] === "not-wide") {
          var element_content_element = document.createElement("div");
          element_content_element.classList.add('card', 'm-5', 'mx-sm-auto', 'not-wide-card');
          element_div_element.appendChild(element_content_element);
          
    
          element_card_element = document.createElement("div");
          element_card_element.classList.add('card-header', 'text-center');
          element_card_element.innerHTML = title[b];
          element_content_element.appendChild(element_card_element);
    
          element_image_element = document.createElement("img");
          element_image_element.classList.add('illinois-images', 'not-wide');
          element_image_element.src = image[b];
          element_image_element.alt = imageAlt[b];
          element_content_element.appendChild(element_image_element);
    
          element_card_body_element = document.createElement("div");
          element_card_body_element.classList.add('card-body', 'm-1');
          element_content_element.append(element_card_body_element);
    
          element_card_text = document.createElement("p");
          element_card_text.classList.add('card-text');
          element_card_text.innerHTML = description[b];
          element_card_body_element.appendChild(element_card_text);
    
          element_card_date = document.createElement("p");
          element_card_date.classList.add('card-text');
          element_card_date_small = document.createElement("small");
          element_card_date_small.classList.add('text-muted');
          element_card_date_small.innerHTML = dates[b];
          element_card_date.appendChild(element_card_date_small);
          
          element_card_body_element.appendChild(element_card_date);
          if((imageWidth[b+1] === "wide" || imageWidth[b+1] === "ultra-wide") && count >= 1.5) 
          {
            count = count + 4.0;
          }
          else {
             count = count + 1.5;
          }
        }
        if(imageWidth[b] === "mid-wide") {
          var element_content_element = document.createElement("div");
          element_content_element.classList.add('card', 'm-2', 'mx-sm-auto', 'mid-wide-card');  // original is m-5
          element_div_element.appendChild(element_content_element);
          
    
          element_card_element = document.createElement("div");
          element_card_element.classList.add('card-header', 'text-center');
          element_card_element.innerHTML = title[b];
          element_content_element.appendChild(element_card_element);
    
          element_image_element = document.createElement("img");
          element_image_element.classList.add('illinois-images', 'mid-wide');
          element_image_element.src = image[b];
          element_image_element.alt = imageAlt[b];
          element_content_element.appendChild(element_image_element);
    
          element_card_body_element = document.createElement("div");
          element_card_body_element.classList.add('card-body', 'm-1');
          element_content_element.append(element_card_body_element);
    
          element_card_text = document.createElement("p");
          element_card_text.classList.add('card-text');
          element_card_text.innerHTML = description[b];
          element_card_body_element.appendChild(element_card_text);
    
          element_card_date = document.createElement("p");
          element_card_date.classList.add('card-text');
          element_card_date_small = document.createElement("small");
          element_card_date_small.classList.add('text-muted');
          element_card_date_small.innerHTML = dates[b];
          element_card_date.appendChild(element_card_date_small);
    
          element_card_body_element.appendChild(element_card_date);
          
          if((imageWidth[b+1] === "mid-wide" || imageWidth[b+1] === "wide") && count > 1.0) 
          {
            count = count + 4.0;
          }
          else {
            count = count + 2.0;
          }
        }   
        if(imageWidth[b] === "wide") {
          var element_content_element = document.createElement("div");
          element_content_element.classList.add('card', 'm-2', 'mx-sm-auto', 'wide-card');  // original is m-5
          element_div_element.appendChild(element_content_element);
          
    
          element_card_element = document.createElement("div");
          element_card_element.classList.add('card-header', 'text-center');
          element_card_element.innerHTML = title[b];
          element_content_element.appendChild(element_card_element);
    
          element_image_element = document.createElement("img");
          element_image_element.classList.add('illinois-images', 'wide');
          element_image_element.src = image[b];
          element_image_element.alt = imageAlt[b];
          element_content_element.appendChild(element_image_element);
    
          element_card_body_element = document.createElement("div");
          element_card_body_element.classList.add('card-body', 'm-1');
          element_content_element.append(element_card_body_element);
    
          element_card_text = document.createElement("p");
          element_card_text.classList.add('card-text');
          element_card_text.innerHTML = description[b];
          element_card_body_element.appendChild(element_card_text);
    
          element_card_date = document.createElement("p");
          element_card_date.classList.add('card-text');
          element_card_date_small = document.createElement("small");
          element_card_date_small.classList.add('text-muted');
          element_card_date_small.innerHTML = dates[b];
          element_card_date.appendChild(element_card_date_small);
    
          element_card_body_element.appendChild(element_card_date);
          if((imageWidth[b+1] === "mid-wide" || imageWidth[b+1] === "wide") && count >= 4.5) 
          {
            count = count + 4.0;
          }
          else {
            count = count + 2.0;
          }
        }   
      }
      function images() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
      for(var i = 0; i < img.length; i++)
        { 
            img[i].onclick = images;
        }
        /*
      for(var j = 0; j < img.length; j++)
      {
          boxImage[j].onclick = images;
      }
      */
      var span = document.getElementsByClassName("close")[0];
      
      span.onclick = function() { 
        modal.style.display = "none";
      }
    }