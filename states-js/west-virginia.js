var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("west-virginia-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
  
  /**
   * West-Virginia Lists
   */
  const westVirginiaImages = ["../states-images/west-virginia-images/me.jpeg", "../states-images/west-virginia-images/Lewis-and-Clark.jpeg", "../states-images/west-virginia-images/me2.jpeg", "../states-images/west-virginia-images/mountain.jpeg", "../states-images/west-virginia-images/alex-sean.jpeg", "../states-images/west-virginia-images/sean.jpeg", "../states-images/west-virginia-images/mountain2.jpeg", "../states-images/west-virginia-images/views.jpeg"];
  const westVirginiaImageAlt = ["This is the picture of me on top of a mountain at Harpers Ferry striking a pose.", 
  "This is a picture of me standing next to the Lewis and Clark sign.",
  "This is the picture of me on top of a mountain at Harpers Ferry striking a pose.",
  "This is an image of Harpers Ferry mountain.",
  "This is a picture of my friends and I at Harpers Ferry on our boys trip to Washington D.C.",
  "This is a picture of my friend Sean and I at Harpers Ferry.",
  "This is an image of Harpers Ferry mountain.",
  "This is a picture of a different view of Harpers Ferry in West Virginia."];
  const westVirginiaDates = ["July 2, 2019", "July 2, 2019", "July 2, 2019", "July 2, 2019", "July 2, 2019", "July 2, 2019", "July 2, 2019", "July 2, 2019"];
  const westVirginiaDescription = ["This is the picture of me on top of a <br> mountain at Harpers Ferry striking a pose.",
  "This is a picture of me standing next to <br> the Lewis and Clark sign.",
  "This is the picture of me on top of a <br> mountain at Harpers Ferry striking a pose.",
  "This is an image of Harpers Ferry mountain.",
  "This is a picture of my friends and I at Harpers Ferry on our boys trip <br> to Washington D.C.",
  "This is a picture of my friend Sean and I <br> at Harpers Ferry.",
  "This is an image of Harpers Ferry mountain.",
  "This is a picture of a different view of Harpers Ferry in West Virginia."];
  const westVirginiaTitle = ["Harpers Ferry", "Lewis and Clark sign", "Harpers Ferry", "Harpers Ferry Mountain", "Harpers Ferry", "Harpers Ferry", "Harpers Ferry", "Harpers Ferry Views"];
  const westVirginiaImageWidth = ["not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "not-wide", "not-wide", "wide"];
  
  sections("Harper's Ferry", westVirginiaImages, westVirginiaImageAlt, westVirginiaDates, westVirginiaDescription, westVirginiaTitle, westVirginiaImageWidth);
  
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
        element_image.classList.add('west-virginia-images', 'not-wide');
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
        element_image.classList.add('west-virginia-images', 'mid-wide');
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
        element_image.classList.add('west-virginia-images', 'wide');
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
        count = count + 4.0;
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