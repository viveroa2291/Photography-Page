var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("georgia-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);    

const atlanta = new ImageSet(
  ["../states-images/georgia-images/atlanta.jpeg", "../states-images/georgia-images/atlanta2.jpeg"],
  ["This is a picture of me in downtown Atlanta. I really liked the city and what it had to offer.", "This is the picture of me in downtown Atlanta."],
  ["May 06, 2018", "May 06, 2018"],
  ["This is a picture of me in downtown Atlanta. I really liked the city and what it had to offer.", "This is the picture of me in downtown Atlanta."],
  ["Downtown Atlanta", "Downtown Atlanta"],
  ["mid-wide", "mid-wide"]
);
  sections("Atlanta", atlanta.image, atlanta.imageAlt, atlanta.date, atlanta.description, atlanta.title, atlanta.imageWidth);
  imagesView(atlanta.image, imagediv);
  const cnn = new ImageSet(
    ["../states-images/georgia-images/cnn.jpeg", "../states-images/georgia-images/cnn2.jpeg"],
    ["This is a picture of me standing outside of the CNN building next to the sign.", "This is a selfie of me inside of the CNN building next to an anchor's chair and table where the news is reported."],
    ["May 06, 2018", "May 06, 2018"],
    ["This is a picture of me standing outside of the CNN building next to the sign.", "This is a selfie of me inside of the CNN building next to an anchor's chair and table where the news is reported."],
    ["CNN Building", "Inside CNN"],
    ["mid-wide", "mid-wide"]
  );
  sections("CNN", cnn.image, cnn.imageAlt, cnn.date, cnn.description, cnn.title, cnn.imageWidth);
  imagesView(cnn.image, imagediv);
  const coca = new ImageSet(
    ["../states-images/georgia-images/coca-cola.jpeg", "../states-images/georgia-images/coca-cola3.jpeg", "../states-images/georgia-images/coca-cola2.jpeg"],
    ["This is a picture of me sitting on a couch enjoying a coke drink inside the World of Coca-Cola located in Atlanta.", "This is a picture of me inside of the World of Coca-Cola. I thought this looked cool.", "This is an image of me jumping outside of the World of Coca Cola sign."],
    ["May 06, 2018", "May 06, 2018", "May 06, 2018"],
    ["This is a picture of me sitting on a couch enjoying a coke drink inside the World of Coca-Cola located in Atlanta.", "This is a picture of me inside of the World of Coca-Cola. I thought this looked cool.", "This is an image of me jumping outside of the World of Coca Cola sign."],
    ["Inside the World of Coca-Cola", "Inside the World of Coca-Cola", "Outside of the World of Coca-Cola"],
    ["mid-wide", "mid-wide", "not-wide"]
  );
  sections("World of Coca-Cola", coca.image, coca.imageAlt, coca.date, coca.description, coca.title, coca.imageWidth);
  imagesView(coca.image, imagediv);
  const georgia = new ImageSet(
    ["../states-images/georgia-images/airport.jpeg", "../states-images/georgia-images/dinner.jpeg", "../states-images/georgia-images/pool.jpeg", "../states-images/georgia-images/hotel.jpeg"],
    ["This is a picture of my sister's national team for gymnastics. She is part of the special olympics and I was there to help coach the boys. We took a group picture in the airport and I believe this airport ranks in the United States for being one of the biggest airports in the United States.", "This is a picture of me standing outside of the Marietta Diner which was where we ate for dinner.", "This is a picture of me sitting pool side by my hotel", "This is a mirror picture of me in the hotel."],
    ["May 04, 2018", "May 04, 2018", "May 04, 2018", "May 06, 2018"],
    ["This is a picture of my sister's national team for gymnastics. She is part of the special olympics and I was there to help coach the boys. We took a group picture in the airport and I believe this airport ranks in the United States for being one of the biggest airports in the United States.", "This is a picture of me standing outside of the Marietta Diner which was where we ate for dinner.", "This is a picture of me sitting pool side by my hotel", "This is a mirror picture of me in the hotel."],
    ["Airport", "Marietta Diner", "Pool", "Mirror Picture"],
    ["mid-wide", "mid-wide", "not-wide", "not-wide"]
  );
  sections("Other Georgia Pictures", georgia.image, georgia.imageAlt, georgia.date, georgia.description, georgia.title, georgia.imageWidth);
  imagesView(georgia.image, imagediv);

  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Atlanta") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Atlanta", atlanta.image, atlanta.imageAlt, atlanta.date, atlanta.description, atlanta.title, atlanta.imageWidth)); 
    }
    else if(x == "Cnn") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("CNN", cnn.image, cnn.imageAlt, cnn.date, cnn.description, cnn.title, cnn.imageWidth)); 
    }
    else if(x == "Coca") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("World of Coca-Cola", coca.image, coca.imageAlt, coca.date, coca.description, coca.title, coca.imageWidth)); 
  
    }
    else if(x == "Other") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Other Georgia Pictures", georgia.image, georgia.imageAlt, georgia.date, georgia.description, georgia.title, georgia.imageWidth));  
    }
    else if(x == "all") {
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Atlanta", atlanta.image, atlanta.imageAlt, atlanta.date, atlanta.description, atlanta.title, atlanta.imageWidth);
      sections("CNN", cnn.image, cnn.imageAlt, cnn.date, cnn.description, cnn.title, cnn.imageWidth);
      sections("World of Coca-Cola", coca.image, coca.imageAlt, coca.date, coca.description, coca.title, coca.imageWidth);
      sections("Other Georgia Pictures", georgia.image, georgia.imageAlt, georgia.date, georgia.description, georgia.title, georgia.imageWidth);
    }
  }
var imageList = [];
var descriptionList = [];

for(var a = 0; a < atlanta.image.length; a++) {
  imageList.push(atlanta.image[a]);
  descriptionList.push(atlanta.description[a]);
}
for(var b = 0; b < cnn.image.length; b++) {
  imageList.push(cnn.image[b]);
  descriptionList.push(cnn.description[b]);
}
for(var c = 0; c < coca.image.length; c++) {
  imageList.push(coca.image[c]);
  descriptionList.push(coca.description[c]);
}
for(var d = 0; d < georgia.image.length; d++) {
  imageList.push(georgia.image[d]);
  descriptionList.push(georgia.description[d]);
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
  
  for(var a = 0; a < image.length; a++) {
    if(count >= 4.0) {
      element_div = document.createElement("div");
      element_div.classList.add('body-images');
      document.getElementById("demo").appendChild(element_div);
      count = 0.0;
    }
    if(imageWidth[a] != "mid-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('georgia-images', 'not-wide');
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
      count = count + 1.5;
    }
    if(imageWidth[a] === "mid-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'mid-wide-card');
      element_div.appendChild(element_content);
      
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('georgia-images', 'mid-wide');
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
  function images(){
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