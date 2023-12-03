function hide() {
    var z = document.getElementById("hide-section");
    var overview = document.getElementById("brief");
    var ar = document.getElementById("south-dakota");
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
// These are the variables for the images when clicked
var modal = document.getElementById("myModal");
var notWideImg = document.getElementsByClassName("south-dakota-images not-wide");
var wideImg = document.getElementsByClassName("south-dakota-images wide");
var img = document.getElementsByClassName("south-dakota-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");
// Debug
var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);    

const rushmore = new ImageSet(
  ["../states-images/south-dakota-images/heads-group.jpeg", "../states-images/south-dakota-images/heads-me.jpeg", "../states-images/south-dakota-images/heads.jpeg", "../states-images/south-dakota-images/heads-eagle.jpeg", "../states-images/south-dakota-images/heads-two.jpeg", "../states-images/south-dakota-images/heads-cesar-sean.jpeg"], 
  ["This is a picture of my friends and I at Mount Rushmore.", "This is a picture of me at the Mount Rushmore monument.", "This is a picture of me at the Mount Rushmore monument.", "This is a picture of the Mount Rushmore monument.", "This is a picture of the Mount Rushmore monument from a different angle.", "This is a picture of my friends Sean and Cesar at the Mount Rushmore monument."],
  ["August 13, 2020", "August 13, 2020", "August 13, 2020", "August 13, 2020", "August 13, 2020", "August 13, 2020"],
  ["This is a picture of my friends and I at Mount Rushmore.", "This is a picture of me at the Mount Rushmore monument.", "This is a picture of me at the Mount Rushmore monument.", "This is a picture of the Mount Rushmore monument.", "This is a picture of the Mount Rushmore monument from a different angle.", "This is a picture of my friends Sean and Cesar at the Mount Rushmore monument."],
  ["Mount Rushmore Monument", "Mount Rushmore Monument", "Mount Rushmore Monument", "Mount Rushmore Monument", "Mount Rushmore Monument", "Mount Rushmore Monument"],
  ["not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "mid-wide"]
);
const custer = new ImageSet(
  ["../states-images/south-dakota-images/custer-tree.jpeg", "../states-images/south-dakota-images/buffalos-me.jpeg", "../states-images/south-dakota-images/sean-me.jpeg", "../states-images/south-dakota-images/buffalos.jpeg", "../states-images/south-dakota-images/buffalo-field.jpeg", "../states-images/south-dakota-images/custer-me.jpeg"],
  ["This is a picture of me at Custer State Park with a nice background setting.", "This is a picture of me at Custer State Park with buffalos in the background.", "This is a picture of my friend Sean and I at Custer State Park.", "This is a picture of Buffalos that we saw while riding through Custer State Park", "This is a picture of a field of Custer State Park with a buffalo in the frame.", "This is a picture of me on top of a rock at a peak of Custer State Park. I am unsure if I was intentionally trying to pose or if this was a candid picture."],
  ["August 13, 2020", "August 13, 2020", "August 13, 2020", "August 13, 2020", "August 13, 2020", "August 13, 2020"],
  ["This is a picture of me at Custer State Park with a nice background setting.", "This is a picture of me at Custer State Park with buffalos in the background.", "This is a picture of my friend Sean and I at Custer State Park.",  "This is a picture of Buffalos that we saw while riding through Custer State Park", "This is a picture of a field of Custer State Park with a buffalo in the frame.", "This is a picture of me on top of a rock at a peak of Custer State Park. I am unsure if I was intentionally trying to pose or if this was a candid picture."],
  ["Custer State Park", "Custer State Park", "Custer State Park", "Custer State Park", "Custer State Park", "Custer State Park"],
  ["not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "mid-wide"]
);
const rapid = new ImageSet(
  ["../states-images/south-dakota-images/podium.jpeg", "../states-images/south-dakota-images/thumbs-up.jpeg", "../states-images/south-dakota-images/high-five.jpeg", "../states-images/south-dakota-images/rapid-city.jpeg"],
  ["This is a picture of my friend Sean and I pointing DX style.", "This is a picture of me doing a thumbs up with a statue in Downtown Rapid City.", "This is a picture of me giving a president who I believe is Jimmy Carter a high five.", "This is a picture of my friend Cesar and Sean and I in some alley of Downtown Rapid City."],
  ["August 13, 2020", "August 13, 2020", "August 13, 2020", "August 13, 2020"],
  ["This is a picture of my friend Sean and I pointing DX style.", "This is a picture of me doing a thumbs up with a statue in Downtown Rapid City.", "This is a picture of me giving a president who I believe is Jimmy Carter a high five.", "This is a picture of my friend Cesar and Sean and I in some alley of Downtown Rapid City."],
  ["Downtown Rapid City", "Downtown Rapid City", "Downtown Rapid City", "Downtown Rapid City"],
  ["not-wide", "not-wide", "not-wide", "mid-wide"]
);
const dakota = new ImageSet(
  ["../states-images/south-dakota-images/water-me.jpeg", "../states-images/south-dakota-images/crazy-horse.jpeg"],
  ["This is a picture of me at a lake in Keystone on our way to the Mount Rushmore Monument.", "This is a picture of a project that they're working on in Crazy Horse. The final project looks spectactular but won't be complete for decades to come. It would be nice to visit when I'm older."],
  ["August 13, 2020", "August 13, 2020"],
  ["This is a picture of me at a lake in Keystone on our way to the Mount Rushmore Monument.", "This is a picture of a project that they're working on in Crazy Horse. The final project looks spectactular but won't be complete for decades to come. It would be nice to visit when I'm older."],
  ["Keystone", "Crazy Horse"],
  ["not-wide", "mid-wide"]
);
sections("Mount Rushmore", rushmore.image, rushmore.imageAlt, rushmore.date, rushmore.description, rushmore.title, rushmore.imageWidth);
sections("Custer State Park", custer.image, custer.imageAlt, custer.date, custer.description, custer.title, custer.imageWidth);
sections("Downtown Rapid City", rapid.image, rapid.imageAlt, rapid.date, rapid.description, rapid.title, rapid.imageWidth);
sections("Other Parts of South Dakota", dakota.image, dakota.imageAlt, dakota.date, dakota.description, dakota.title, dakota.imageWidth);  

imagesView(rushmore.image, imagediv);
imagesView(custer.image, imagediv);
imagesView(rapid.image, imagediv);
imagesView(dakota.image, imagediv);

var imageList = [];
var descriptionList = [];

for(var a = 0; a < rushmore.image.length; a++) {
  imageList.push(rushmore.image[a]);
  descriptionList.push(rushmore.description[a]);
}
for(var b = 0; b < custer.image.length; b++) {
  imageList.push(custer.image[b]);
  descriptionList.push(custer.description[b]);
}
for(var c = 0; c < rapid.image.length; c++) {
  imageList.push(rapid.image[c]);
  descriptionList.push(rapid.description[c]);
}
for(var d = 0; d < dakota.image.length; d++) {
  imageList.push(dakota.image[d]);
  descriptionList.push(dakota.description[d]);
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
function sectionSelected() {
  var x = document.getElementById("area-selector").value;
  if(x =="Rushmore") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    } 
    document.getElementById("demo").appendChild(sections("Mount Rushmore",rushmore.image, rushmore.imageAlt, rushmore.date, rushmore.description, rushmore.title, rushmore.imageWidth)); 
  }
  else if(x == "Custer") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Custer State Park", custer.image, custer.imageAlt, custer.date, custer.description, custer.title, custer.imageWidth)); 
  }
  else if(x == "Rapid") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Downtown Rapid City", rapid.image, rapid.imageAlt, rapid.date, rapid.description, rapid.title, rapid.imageWidth)); 

  }
  else if(x == "Other") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Other Parts of South Dakota", dakota.image, dakota.imageAlt, dakota.date, dakota.description, dakota.title, dakota.imageWidth));
  }
  else if(x == "all") {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    sections("Mount Rushmore", rushmore.image, rushmore.imageAlt, rushmore.date, rushmore.description, rushmore.title, rushmore.imageWidth);
    sections("Custer State Park", custer.image, custer.imageAlt, custer.date, custer.description, custer.title, custer.imageWidth);
    sections("Downtown Rapid City", rapid.image, rapid.imageAlt, rapid.date, rapid.description, rapid.title, rapid.imageWidth);
    sections("Other Parts of South Dakota", dakota.image, dakota.imageAlt, dakota.date, dakota.description, dakota.title, dakota.imageWidth);
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
        if(imageWidth[b] != "mid-wide") {
          var element_content_element = document.createElement("div");
          element_content_element.classList.add('card', 'mx-sm-auto', 'not-wide-card');
          element_div_element.appendChild(element_content_element);
          
    
          element_card_element = document.createElement("div");
          element_card_element.classList.add('card-header', 'text-center');
          element_card_element.innerHTML = title[b];
          element_content_element.appendChild(element_card_element);
    
          element_image_element = document.createElement("img");
          element_image_element.classList.add('south-dakota-images', 'not-wide');
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
          element_content_element.classList.add('card', 'm-5', 'mx-sm-auto', 'mid-wide-card');
          element_div_element.appendChild(element_content_element);
          
    
          element_card_element = document.createElement("div");
          element_card_element.classList.add('card-header', 'text-center');
          element_card_element.innerHTML = title[b];
          element_content_element.appendChild(element_card_element);
    
          element_image_element = document.createElement("img");
          element_image_element.classList.add('south-dakota-images', 'mid-wide');
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
          count = count + 2.0; 
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
    function yearSections(image, imageAlt, dates, description, title, imageWidth) {
      let count = 0.0;
     
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
          if(imageWidth[b] != "wide") {
            var element_content_element = document.createElement("div");
            element_content_element.classList.add('card', 'm-5', 'mx-sm-auto', 'not-wide-card');
            element_div_element.appendChild(element_content_element);
            
      
            element_card_element = document.createElement("div");
            element_card_element.classList.add('card-header', 'text-center');
            element_card_element.innerHTML = title[b];
            element_content_element.appendChild(element_card_element);
      
            element_image_element = document.createElement("img");
            element_image_element.classList.add('south-dakota-images', 'not-wide');
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
          if(imageWidth[b] === "wide") {
            var element_content_element = document.createElement("div");
            element_content_element.classList.add('card', 'm-5', 'mx-sm-auto', 'wide-card');
            element_div_element.appendChild(element_content_element);
            
      
            element_card_element = document.createElement("div");
            element_card_element.classList.add('card-header', 'text-center');
            element_card_element.innerHTML = title[b];
            element_content_element.appendChild(element_card_element);
      
            element_image_element = document.createElement("img");
            element_image_element.classList.add('south-dakota-images', 'wide');
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
            count = count + 2.0; 
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
    // This block of code is when an image is clicked, it expands the image. 
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