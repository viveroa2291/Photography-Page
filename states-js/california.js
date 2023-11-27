var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("california-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);

const losAngeles = new ImageSet(
  ["../states-images/california-images/downtown.jpeg", "../states-images/california-images/pbars.jpeg"],
  ["This is a picture of my friends and I in downtown Los Angeles. I was on their shoulders preparing to do an 'L', which is a skill that is performed in mens gymnastics on the parallel bars.", "This is the picture of me doing the 'L' on top of my friends shoulders in downtown Los Angeles."],
  ["August 6, 2015", "August 6, 2015"],
  ["This is a picture of my friends and I in downtown Los Angeles. I was on their shoulders preparing to do an 'L', which is a skill that is performed in mens gymnastics on the parallel bars.", "This is the picture of me doing the 'L' on top of my friends shoulders in downtown Los Angeles."],
  ["Downtown Los Angeles", "Downtown Los Angeles"],
  ["mid-wide", "mid-wide"]
);
sections("Los Angeles", losAngeles.image, losAngeles.imageAlt, losAngeles.date, losAngeles.description, losAngeles.title, losAngeles.imageWidth);
imagesView(losAngeles.image, imagediv);
const disneyland = new ImageSet(
  ["../states-images/california-images/disneyland-jon.jpeg", "../states-images/california-images/disneyland-jon2.jpeg", "../states-images/california-images/disneyland-kristin.jpeg"],
  ["This is a picture of my friend Jon and I at Disneyland.", "This is an image of my friend Jon and I at Disneyland in front of the infamous Mickey Mouse roller coaster.", "This is an image of my friend Jon and Kristin and I at Disneyland. <br><br><b> Fun fact, they are twins.</b>"],
  ["August 7, 2015", "August 7, 2015", "August 7, 2015"],
  ["This is a picture of my friend Jon and I at Disneyland.", "This is an image of my friend Jon and I at Disneyland in front of the infamous Mickey Mouse roller coaster.", "This is an image of my friend Jon and Kristin and I at Disneyland. <br><br><b> Fun fact, they are twins.</b>"],
  ["Disneyland", "Disneyland", "Disneyland"],
  ["not-wide", "not-wide", "wide"]
);
sections("Disneyland", disneyland.image, disneyland.imageAlt, disneyland.date, disneyland.description, disneyland.title, disneyland.imageWidth);
imagesView(disneyland.image, imagediv);
const huntington = new ImageSet(
  ["../states-images/california-images/huntington-jon.jpeg", "../states-images/california-images/huntington-jon2.jpeg", "../states-images/california-images/huntington-karina.jpeg", "../states-images/california-images/pyramid.jpeg", "../states-images/california-images/huntington-holly.jpeg"],
  ["This is an image of my friend Jon and I at Huntington Beach.", "This is an image of my friend Jon and I at Huntington Beach.", "This is an image of my friend Karina and I at Huntington Beach.", "This is an image of my friends and I attempting to do a pyramid.", "This is an image of my friend Holly and I at Huntington Beach."],
  ["August 10, 2015", "August 10, 2015", "August 10, 2015", "August 10, 2015", "August 10, 2015"],
  ["This is an image of my friend Jon and I at Huntington Beach.", "This is an image of my friend Jon and I at Huntington Beach.", "This is an image of my friend Karina and I at Huntington Beach.", "This is an image of my friends and I attempting to do a pyramid.", "This is an image of my friend Holly and I at Huntington Beach."],
  ["Huntington Beach", "Huntington Beach", "Huntington Beach", "Huntington Beach", "Huntington Beach"],
  ["not-wide", "not-wide", "not-wide", "not-wide", "not-wide"]
);
sections("Huntington Beach", huntington.image, huntington.imageAlt, huntington.date, huntington.description, huntington.title, huntington.imageWidth);
imagesView(huntington.image, imagediv);
function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Los Angeles") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Los Angeles", losAngeles.image, losAngeles.imageAlt, losAngeles.date, losAngeles.description, losAngeles.title, losAngeles.imageWidth)); 
    }
    else if(x == "Disneyland") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Disneyland", disneyland.image, disneyland.imageAlt, disneyland.date, disneyland.description, disneyland.title, disneyland.imageWidth)); 
    }
    else if(x == "Huntington") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Huntington Beach", huntington.image, huntington.imageAlt, huntington.date, huntington.description, huntington.title, huntington.imageWidth)); 
    }
    else if(x == "all") {
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Los Angeles", losAngeles.image, losAngeles.imageAlt, losAngeles.date, losAngeles.description, losAngeles.title, losAngeles.imageWidth);
      sections("Disneyland", disneyland.image, disneyland.imageAlt, disneyland.date, disneyland.description, disneyland.title, disneyland.imageWidth);
      sections("Huntington Beach", huntington.image, huntington.imageAlt, huntington.date, huntington.description, huntington.title, huntington.imageWidth);
    }
  }

  var imageList = [];
  var descriptionList = [];

for(var a = 0; a < losAngeles.image.length; a++) {
  imageList.push(losAngeles.image[a]);
  descriptionList.push(losAngeles.description[a]);
}
for(var b = 0; b < disneyland.image.length; b++) {
  imageList.push(disneyland.image[b]);
  descriptionList.push(disneyland.description[b]);
}
for(var c = 0; c < huntington.image.length; c++) {
  imageList.push(huntington.image[c]);
  descriptionList.push(huntington.description[c]);
}

function images() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
function imagesView(image, imagediv) {
    for(var i = 0; i < image.length; i++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = image[i];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images;
    }
}
  // ------------------------------------------------------------------------------
  function sections(section, image, imageAlt, dates, description, title, imageWidth) {
  let count = 0.0;
  
  var element_text = document.createElement("h3");
  element_text.classList.add('body-headers');
  element_text.innerHTML = section;
  
  var element_hr = document.createElement("hr");
  element_hr.classList.add('header-hr');
  document.getElementById("demo").appendChild(element_text);
  document.getElementById("demo").appendChild(element_hr);
  
  var element_div = document.createElement("div");
  element_div.classList.add('body-images');
  document.getElementById("demo").appendChild(element_div);
  
  var element_image;
  var element_card;
  var element_card_body;
  var element_text;
  var element_date;
  var element_date_small;
  
  count = 0.0;
  for(var a = 0; a < image.length; a++) {
    if(count >= 4.0) {
      element_div = document.createElement("div");
      element_div.classList.add('body-images');
      document.getElementById("demo").appendChild(element_div);
      count = 0.0;
    }
    if(imageWidth[a] != "wide" && imageWidth[a] != "mid-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('california-images', 'not-wide');
      element_image.src = image[a];
      element_image.alt = imageAlt[a];
      element_content.appendChild(element_image);
  
      element_card_body = document.createElement("div");
      element_card_body.classList.add('card-body', 'm-1');
      element_content.append(element_card_body);
  
      element_text = document.createElement("p");
      element_text.classList.add('card-text');
      element_text.innerHTML = description[a];
      element_card_body.appendChild(element_text);
  
      element_date = document.createElement("p");
      element_date.classList.add('card-text');
      element_date_small = document.createElement("small");
      element_date_small.classList.add('text-muted');
      element_date_small.innerHTML = dates[a];
      element_date.appendChild(element_date_small);
  
      element_card_body.appendChild(element_date);
      if(imageWidth[a+1] === "wide" || imageWidth[a+1] === "ultra-wide") 
        {
          count = count + 4.0;
        }
        else {
           count = count + 1.5;
        }
    }
    if(imageWidth[a] != "wide" && imageWidth[a] != "not-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'mid-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('california-images', 'mid-wide');
      element_image.src = image[a];
      element_image.alt = imageAlt[a];
      element_content.appendChild(element_image);
  
      element_card_body = document.createElement("div");
      element_card_body.classList.add('card-body', 'm-1');
      element_content.append(element_card_body);
  
      element_text = document.createElement("p");
      element_text.classList.add('card-text');
      element_text.innerHTML = description[a];
      element_card_body.appendChild(element_text);
  
      element_date = document.createElement("p");
      element_date.classList.add('card-text');
      element_date_small = document.createElement("small");
      element_date_small.classList.add('text-muted');
      element_date_small.innerHTML = dates[a];
      element_date.appendChild(element_date_small);
  
      element_card_body.appendChild(element_date);
      if(imageWidth[a+1] === "wide" || imageWidth[a+1] === "ultra-wide") 
        {
          count = count + 4.0;
        }
        else {
           count = count + 1.5;
        }
    }
    if(imageWidth[a] === "wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'wide-card');
      element_div.appendChild(element_content);
      
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('california-images', 'wide');
      element_image.src = image[a];
      element_image.alt = imageAlt[a];
      element_content.appendChild(element_image);
  
      element_card_body = document.createElement("div");
      element_card_body.classList.add('card-body', 'm-1');
      element_content.append(element_card_body);
  
      element_text = document.createElement("p");
      element_text.classList.add('card-text');
      element_text.innerHTML = description[a];
      element_card_body.appendChild(element_text);
  
      element_date = document.createElement("p");
      element_date.classList.add('card-text');
      element_date_small = document.createElement("small");
      element_date_small.classList.add('text-muted');
      element_date_small.innerHTML = dates[a];
      element_date.appendChild(element_date_small);
  
      element_card_body.appendChild(element_date);
      count = count + 2.0;
    }
  }
  var currentIndex = 0; 
  function imageIndex(delta) {
      modal.style.display = "block";
      modalImg.src = imageList[delta];
      captionText.innerHTML = descriptionList[delta];
  }      
  prevButton.addEventListener('click', function() {
      if(currentIndex > 0) {
          currentIndex--;
        }
        imageIndex(currentIndex);
  });
  nextButton.addEventListener('click', function() {
        if (currentIndex < imageList.length - 1) {
          currentIndex++;
        }
        imageIndex(currentIndex);
  });
  function images() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    var substringIndex = this.src.indexOf("states");

    if(substringIndex !== -1) {
      var newUrl = "../" + this.src.substring(substringIndex);
    }

    for(var i = 0; i < imageList.length; i++) {
      if(newUrl === imageList[i]) {
        currentIndex = i;
        imageIndex(i);
      }
    }    
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