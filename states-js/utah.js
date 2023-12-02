var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("utah-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv); 

const salt = new ImageSet(
  ["../states-images/utah-images/church-me.jpeg", "../states-images/utah-images/church.jpeg", "../states-images/utah-images/church-mom.jpeg", "../states-images/utah-images/salt-lake-city2.jpeg", "../states-images/utah-images/salt-lake-city3.jpeg"],
  ["This is a picture of me in front of a mormon church in Salt Lake City.", "This is an image of a mormon church in Salt Lake City.", "This is a picture of my mother and I at a mormon church in Salt Lake City.", "This is an image of a mormon church in downtown Salt Lake City.", "This is an image of downtown Salt Lake City."],
  ["March 22, 2018", "March 22, 2018", "March 22, 2018", "March 22, 2018", "March 22, 2018"],
  ["This is a picture of me in front of a mormon church in Salt Lake City.", "This is an image of a mormon church in Salt Lake City.", "This is a picture of my mother and I at a mormon church in Salt Lake City.", "This is an image of a mormon church in downtown Salt Lake City.", "This is an image of downtown Salt Lake City."],
  ["Salt Lake City Mormon Church", "Salt Lake City Mormon Church", "Salt Lake City Mormon Church", "Salt Lake City Mormon Church", "Downtown Salt Lake City"],
  ["not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide"]
);
  sections("Salt Lake City", salt.image, salt.imageAlt, salt.date, salt.description, salt.title, salt.imageWidth);
  imagesView(salt.image, imagediv);
  const arches = new ImageSet(
    ["../states-images/utah-images/arches-sign.jpeg", "../states-images/utah-images/arches2.jpeg", "../states-images/utah-images/arches.jpeg", "../states-images/utah-images/big-arch.jpeg", "../states-images/utah-images/small-arch.jpeg", "../states-images/utah-images/arch-field.jpeg", "../states-images/utah-images/arches4.jpeg", "../states-images/utah-images/arches3.jpeg"],
    ["This is an image of me on the sign of the Arches National Park.", "This is an image of me at the Arches National Park.", "This is an image of me at the Arches National Park.", "This is an image of me at the heart of the arch of the Arches National Park.", "This is an image of me inside a small arch with a view of the big arch at the Arches National Park.", "This is an image of me looking at a field at the Arches National Park. It was a gigantic field and it was pretty cool.", "This is an image of me at the Arches National Park.", "This is an image of me at an open area at the Arches National Park."],
    ["March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018"],
    ["This is an image of me on the sign of the Arches National Park.", "This is an image of me at the Arches National Park.", "This is an image of me at the Arches National Park.", "This is an image of me at the heart of the arch of the Arches National Park.", "This is an image of me inside a small arch with a view of the big arch at the Arches National Park.", "This is an image of me looking at a field at the Arches National Park. It was a gigantic field and it was pretty cool.", "This is an image of me at the Arches National Park.", "This is an image of me at an open area at the Arches National Park."],
    ["Arches National Park Sign", "Arches National Park", "Arches National Park", "Arches National Park", "Arches National Park", "Arches National Park", "Arches National Park", "Arches National Park"],
    ["mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "not-wide"]
  );
  sections("Arches National Park", arches.image, arches.imageAlt, arches.date, arches.description, arches.title, arches.imageWidth);
  imagesView(arches.image, imagediv);
  const springville = new ImageSet(
    ["../states-images/utah-images/mountains.jpeg", "../states-images/utah-images/mountains3.jpeg", "../states-images/utah-images/mountains2.jpeg", "../states-images/utah-images/mountains4.jpeg", "../states-images/utah-images/mountains5.jpeg"],
    ["This is an image of me at Springville Utah standing at the middle of a mountain.", "This is an image of me at Springville Utah standing at the middle of a mountain.", "This is an image of me at Springville Utah standing at the bottom of the mountains.", "This is an image of me at Springville Utah standing at the center of the mountains.", "This is an image of me at Springville Utah standing at the bottom of the mountains."],
    ["March 25, 2018", "March 25, 2018", "March 25, 2018", "March 25, 2018", "March 25, 2018"],
    ["This is an image of me at Springville Utah standing at the middle of a mountain.", "This is an image of me at Springville Utah standing at the middle of a mountain.", "This is an image of me at Springville Utah standing at the bottom of the mountains.", "This is an image of me at Springville Utah standing at the center of the mountains.", "This is an image of me at Springville Utah standing at the bottom of the mountains."],
    ["Springville, Utah", "Springville, Utah", "Springville, Utah", "Springville, Utah", "Springville, Utah"],
    ["mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide"]
  );
  sections("Springville, Utah", springville.image, springville.imageAlt, springville.date, springville.description, springville.title, springville.imageWidth);
  imagesView(springville.image, imagediv);
  const utah = new ImageSet(
    ["../states-images/utah-images/draper.jpeg", "../states-images/utah-images/outside.jpeg", "../states-images/utah-images/pauls-house.jpeg"],
    ["This is an image of me at Draper, Utah which was a nice view of the city.", "This is an image of me standing outside of my cousins house in Utah. I really like the cool view of the mountains.", "This is an image of me standing outside my other cousins house in Utah. Again, I really find the mountains a view cool view right outside their house."],
    ["March 23, 2018", "March 26, 2018", "March 24, 2018"],
    ["This is an image of me at Draper, Utah which was a nice view of the city.", "This is an image of me standing outside of my cousins house in Utah. I really like the cool view of the mountains.", "This is an image of me standing outside my other cousins house in Utah. Again, I really find the mountains a view cool view right outside their house."],
    ["Draper, Utah", "Utah", "Utah"],
    ["not-wide", "not-wide", "mid-wide"]
  );
  sections("Other parts of Utah", utah.image, utah.imageAlt, utah.date, utah.description, utah.title, utah.imageWidth);
  imagesView(utah.image, imagediv);
  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Salt") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Salt Lake City", salt.image, salt.imageAlt, salt.date, salt.description, salt.title, salt.imageWidth)); 
    }
    else if(x == "Arches") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Arches National Park", arches.image, arches.imageAlt, arches.date, arches.description, arches.title, arches.imageWidth)); 
    }
    else if(x == "Springville") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Springville, Utah", springville.image, springville.imageAlt, springville.date, springville.description, springville.title, springville.imageWidth)); 
    }
    else if(x == "Other") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Other parts of Utah", utah.image, utah.imageAlt, utah.date, utah.description, utah.title, utah.imageWidth)); 
    }
    else if(x == "all") {
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Salt Lake City", salt.image, salt.imageAlt, salt.date, salt.description, salt.title, salt.imageWidth);
      sections("Arches National Park", arches.image, arches.imageAlt, arches.date, arches.description, arches.title, arches.imageWidth);
      sections("Springville, Utah", springville.image, springville.imageAlt, springville.date, springville.description, springville.title, springville.imageWidth);
      sections("Other parts of Utah", utah.image, utah.imageAlt, utah.date, utah.description, utah.title, utah.imageWidth);
    }
  }
  
var imageList = [];
var descriptionList = [];

for(var a = 0; a < salt.image.length; a++) {
  imageList.push(salt.image[a]);
  descriptionList.push(salt.description[a]);
}
for(var b = 0; b < arches.image.length; b++) {
  imageList.push(arches.image[b]);
  descriptionList.push(arches.description[b]);
}
for(var c = 0; c < springville.image.length; c++) {
  imageList.push(springville.image[c]);
  descriptionList.push(springville.description[c]);
}
for(var d = 0; d < utah.image.length; d++) {
  imageList.push(utah.image[d]);
  descriptionList.push(utah.description[d]);
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
    var element_card_body;
    
    for(var a = 0; a < image.length; a++) {
      if(count >= 4.0) {
        element_div = document.createElement("div");
        element_div.classList.add('body-images');
        document.getElementById("demo").appendChild(element_div);
        count = 0.0;
      }
      if(imageWidth[a] === "not-wide") {
        var element_content = document.createElement("div");
        element_content.classList.add('card', 'mx-sm-auto', 'not-wide-card');
        element_div.appendChild(element_content);
    
        element_card = document.createElement("div");
        element_card.classList.add('card-header', 'text-center');
        element_card.innerHTML = title[a];
        element_content.appendChild(element_card);
    
        element_image = document.createElement("img");
        element_image.classList.add('utah-images', 'not-wide');
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
      if(imageWidth[a] === "mid-wide") {
        var element_content = document.createElement("div");
        element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'mid-wide-card');
        element_div.appendChild(element_content);
        
        element_card = document.createElement("div");
        element_card.classList.add('card-header', 'text-center');
        element_card.innerHTML = title[a];
        element_content.appendChild(element_card);
    
        element_image = document.createElement("img");
        element_image.classList.add('utah-images', 'mid-wide');
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
      if(imageWidth[a] === "wide") {
        var element_content = document.createElement("div");
        element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'wide-card');
        element_div.appendChild(element_content);
        
        element_card = document.createElement("div");
        element_card.classList.add('card-header', 'text-center');
        element_card.innerHTML = title[a];
        element_content.appendChild(element_card);
    
        element_image = document.createElement("img");
        element_image.classList.add('utah-images', 'wide');
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