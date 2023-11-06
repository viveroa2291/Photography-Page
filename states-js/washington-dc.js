function hide() {
    var z = document.getElementById("hide-section");
    var overview = document.getElementById("brief");
    var ar = document.getElementById("washington-dc");
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
var notWideImg = document.getElementsByClassName("washington-dc-images not-wide");
var wideImg = document.getElementsByClassName("washington-dc-images wide");
var img = document.getElementsByClassName("washington-dc-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

const whitehouseImages = ["../states-images/washington-dc-images/white-house.jpeg", "../states-images/washington-dc-images/white-house-alex-sean.jpeg"];
const whitehouseImagesAlt = ["This is a picture of the white house.", "This is a picture of my friends and I at the White House."];
const whitehouseDates = ["July 4, 2019", "July 4, 2019"];
const whitehouseDescription = ["This is a picture of the white house.", "This is a picture of my friends and I at the White House."];
const whitehouseTitle = ["White House", "White House"];
const whitehouseImageWidth = ["mid-wide", "mid-wide"];

const presidentImages = ["../states-images/washington-dc-images/washington.jpeg", "../states-images/washington-dc-images/lincoln.jpeg", "../states-images/washington-dc-images/jfk.jpeg",  "../states-images/washington-dc-images/reagan.jpeg", "../states-images/washington-dc-images/obama.jpeg"];
const presidentImagesAlt = ["This is a picture of me in front of a George Washington painting.", "This is a picture of me in front of a Lincoln painting.", "This is a picture of me in front of a John F Kennedy painting.", "This is a picture of me in front of a Ronald Reagan painting.", "This is a picture of me in front of a Barrack Obama painting."];
const presidentDates = ["July 5, 2019", "July 5, 2019", "July 5, 2019", "July 5, 2019", "July 5, 2019"];
const presidentDescription = ["This is a picture of me in front of a George Washington painting.", "This is a picture of me in front of a Lincoln painting.", "This is a picture of me in front of a John F Kennedy painting.", "This is a picture of me in front of a Ronald Reagan painting.", "This is a picture of me in front of a Barrack Obama painting."];
const presidentTitle = ["George Washington", "Abraham Lincoln", "John F Kennedy", "Ronald Reagan", "Barrack Obama"];
const presidentImageWidth = ["not-wide", "not-wide", "not-wide", "not-wide", "not-wide"];

const capitolImages = ["../states-images/washington-dc-images/capitol-me.jpeg", "../states-images/washington-dc-images/capitol.jpeg", "../states-images/washington-dc-images/cover.jpeg"];
const capitolImagesAlt = ["This is a picture of me in front of the United States capitol.", "This is a picture of the United States Capitol building.", "This is a picture of the United States Capitol building."];
const capitolDates = ["July 6, 2019", "July 6, 2019", "July 6, 2019"];
const capitolDescription = ["This is a picture of me in front of the United States capitol.", "This is a picture of the United States Capitol building.", "This is a picture of the United States Capitol building."];
const capitolTitle = ["United States Captiol", "United States Capitol", "United States Capitol"];
const capitolImageWidth = ["not-wide", "mid-wide", "wide"];

const lincolnImages = ["../states-images/washington-dc-images/lincoln-alex-sean.jpeg", "../states-images/washington-dc-images/lincoln-me.jpeg"];
const lincolnImagesAlt = ["This is a picture of my friend Alex, Sean, and I in front of the lincoln memorial.", "This is a picture of me in front of the Lincoln Memorial."];
const lincolnDates = ["July 6, 2019", "July 6, 2019"];
const lincolnDescription = ["This is a picture of my friend Alex, Sean, and I in front of the lincoln memorial.", "This is a picture of me in front of the Lincoln Memorial."];
const lincolnTitle = ["Lincoln Memorial", "Lincoln Memorial"];
const lincolnImageWidth = ["wide", "not-wide"];

const washingtonImages = ["../states-images/washington-dc-images/fed.jpeg", "../states-images/washington-dc-images/fed-me.jpeg", "../states-images/washington-dc-images/america.jpeg", "../states-images/washington-dc-images/hat.jpeg", "../states-images/washington-dc-images/dc-me.jpeg", "../states-images/washington-dc-images/dc-alex-sean.jpeg", "../states-images/washington-dc-images/kaitlin-interview.png", "../states-images/washington-dc-images/kaitlin-me.jpeg", "../states-images/washington-dc-images/kaitlin-sean.jpeg", "../states-images/washington-dc-images/rally-alex.jpeg", "../states-images/washington-dc-images/art.jpeg", "../states-images/washington-dc-images/panda.jpeg", "../states-images/washington-dc-images/zoo-alex-sean.jpeg", "../states-images/washington-dc-images/mlk.jpeg"];
const washingtonImagesAlt = ["This is a picture of the Federal Reserve Building.", "This is a picture of me in front of the federal reserve building.", "This is a picture of me in front of a building in Washington DC.", "This is a picture of my hat with the Washington Monument in the background.", "This is a picture of me in front of the Washington Monument.", "This is a picture of my friends and I in front of the Washington Monument.", "This is a picture of me and my friend Sean being interviewed by Kaitlin Bennet.", "This is a picture of Kaitlin Bennet and I.", "This is a picture of my friend Sean and I taking a picture with Kaitlin Bennet.", "This is a picture of my friend Alex and I at a Trump rally.", "This is a picture of me in front of a painting.", "This is a picture of a Panda at the Smithsonian National Zoo.", "This is a picture of my friend Alex, Sean, and I at the Smithsonian National Zoo", "This is a picture of me in front of the Martin Luther King monument."];
const washingtonDates = ["July 3, 2019", "July 3, 2019", "July 3, 2019", "July 3, 2019", "July 3, 2019", "July 3, 2019", "July 4, 2019", "July 4, 2019", "July 4, 2019", "July 4, 2019", "July 5, 2019", "July 5, 2019", "July 5, 2019", "July 6, 2019"];
const washingtonDescription = ["This is a picture of the Federal Reserve Building.", "This is a picture of me in front of the federal reserve building.", "This is a picture of me in front of a building in Washington DC.", "This is a picture of my hat with the Washington Monument in the background.", "This is a picture of me in front of the Washington Monument.", "This is a picture of my friends and I in front of the Washington Monument.", "This is a picture of me and my friend Sean being interviewed by Kaitlin Bennet.", "This is a picture of Kaitlin Bennet and I.", "This is a picture of my friend Sean and I taking a picture with Kaitlin Bennet", "This is a picture of my friend Alex and I at a Trump rally.", "This is a picture of me in front of a painting.", "This is a picture of a Panda at the Smithsonian National Zoo.", "This is a picture of my friend Alex, Sean, and I at the Smithsonian National Zoo", "This is a picture of me in front of the Martin Luther King monument."];
const washingtonTitle = ["Federal Reserve Building", "Federal Reserve Building", "Washington DC building", "Washington Monument", "Washington Monument", "Washington Monument", "Kaitlin Bennet", "Kaitlin Bennet", "Kaitlin Bennet", "Trump Rally", "Artwork", "Smithsonian Zoo", "Smithsonian Zoo", "Martin Luther King Monument"];
const washingtonImageWidth = ["wide", "wide", "wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "wide", "wide", "wide", "not-wide", "not-wide"];

sections("White House", whitehouseImages, whitehouseImagesAlt, whitehouseDates, whitehouseDescription, whitehouseTitle, whitehouseImageWidth); 
sections("Presidential Artwork", presidentImages, presidentImagesAlt, presidentDates, presidentDescription, presidentTitle, presidentImageWidth);
sections("United States Capitol", capitolImages, capitolImagesAlt, capitolDates, capitolDescription, capitolTitle, capitolImageWidth);
sections("Lincoln Memorial", lincolnImages, lincolnImagesAlt, lincolnDates, lincolnDescription, lincolnTitle, lincolnImageWidth); 
sections("Washington DC", washingtonImages, washingtonImagesAlt, washingtonDates, washingtonDescription, washingtonTitle, washingtonImageWidth);

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);    

    function images() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    for(var a = 0; a < whitehouseImages.length; a++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = whitehouseImages[a];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var b = 0; b <  presidentImages.length; b++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = presidentImages[b];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var c = 0; c < capitolImages.length; c++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = capitolImages[c];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var d = 0; d < lincolnImages.length; d++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = lincolnImages[d];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var e = 0; e < washingtonImages.length; e++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = washingtonImages[e];
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
          element_image_element.classList.add('washington-dc-images', 'not-wide');
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
          element_image_element.classList.add('washington-dc-images', 'mid-wide');
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
          element_image_element.classList.add('washington-dc-images', 'wide');
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
      for(var j = 0; j < img.length; j++)
      {
          boxImage[j].onclick = images;
      }
      var span = document.getElementsByClassName("close")[0];
      
      span.onclick = function() { 
        modal.style.display = "none";
      }
    }