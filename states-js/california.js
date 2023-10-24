var modal = document.getElementById("myModal");
  var img = document.getElementsByClassName("california-images");
  var boxImage = document.getElementsByClassName("box-image");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  
  /**
   * Los Angeles Lists
   */
  const losAngelesImages = ["../states-images/california-images/downtown.jpeg", "../states-images/california-images/pbars.jpeg"];
  const losAngelesImagesAlt = ["This is a picture of my friends and I in downtown Los Angeles. I was on their shoulders preparing to do an 'L', which is a skill that is performed in mens gymnastics on the parallel bars.",
  "This is the picture of me doing the 'L' on top of my friends shoulders in downtown Los Angeles."];
  const losAngelesDates = ["August 6, 2015", "August 6, 2015"];
  const losAngelesDescription = ["This is a picture of my friends and I in downtown <br> Los Angeles. I was on their shoulders preparing <br> to do an 'L', which is a skill that is performed in <br> mens gymnastics on the parallel bars.",
  "This is the picture of me doing the 'L' on top of my <br> friends shoulders in downtown Los Angeles."];
  const losAngelesTitle = ["Downtown Los Angeles", "Downtown Los Angeles"];
  const losAngelesImageWidth = ["mid-wide", "mid-wide"];
  sections("Los Angeles", losAngelesImages, losAngelesImagesAlt, losAngelesDates, losAngelesDescription, losAngelesTitle, losAngelesImageWidth);
  /**
   * DisneyLand Lists
   */
  const disneylandImages = ["../states-images/california-images/disneyland-jon.jpeg", "../states-images/california-images/disneyland-jon2.jpeg", "../states-images/california-images/disneyland-kristin.jpeg"];
  const disneylandImagesAlt = ["This is a picture of my friend Jon and I at Disneyland.",
  "This is an image of my friend Jon and I at Disneyland in front of the infamous Mickey Mouse roller coaster.",
  "This is an image of my friend Jon and Kristin and I at Disneyland. <br><br><b> Fun fact, they are twins.</b>"];
  const disneylandDates = ["August 7, 2015", "August 7, 2015", "August 7, 2015"];
  const disneylandDescription = ["This is a picture of my friend Jon and I <br> at Disneyland.", 
  "This is an image of my friend Jon and I <br> at Disneyland in front of the infamous <br> Mickey Mouse roller coaster.",
  "This is an image of my friend Jon and Kristin and I at Disneyland. <br> Fun fact, they are twins."];
  const disneylandTitle = ["Disneyland", "Disneyland", "Disneyland"];
  const disneylandImageWidth = ["not-wide", "not-wide", "wide"];
  sections("Disneyland", disneylandImages, disneylandImagesAlt, disneylandDates, disneylandDescription, disneylandTitle, disneylandImageWidth);
  /**
   * Huntington Beach Lists
   */
  const huntingtonImages = ["../states-images/california-images/huntington-jon.jpeg", "../states-images/california-images/huntington-jon2.jpeg", "../states-images/california-images/huntington-karina.jpeg", "../states-images/california-images/pyramid.jpeg", "../states-images/california-images/huntington-holly.jpeg"];
  const huntingtonImagesAlt = ["This is an image of my friend Jon and I at Huntington Beach.",
  "This is an image of my friend Jon and I at Huntington Beach.",
  "This is an image of my friend Karina and I at Huntington Beach.",
  "This is an image of my friends and I attempting to do a pyramid.",
  "This is an image of my friend Holly and I at Huntington Beach."];
  const huntingtonDates = ["August 10, 2015", "August 10, 2015", "August 10, 2015", "August 10, 2015", "August 10, 2015"];
  const huntingtonDescription = ["This is an image of my friend Jon and I <br> at Huntington Beach.",
  "This is an image of my friend Jon and I <br> at Huntington Beach.", 
  "This is an image of my friend Karina and I <br> at Huntington Beach.", 
  "This is an image of my friends and I <br> attempting to do a pyramid.",
  "This is an image of my friend Holly and I <br> at Huntington Beach."];
  const huntingtonTitle = ["Huntington Beach", "Huntington Beach", "Huntington Beach", "Huntington Beach", "Huntington Beach"];
  const huntingtonImageWidth = ["not-wide", "not-wide", "not-wide", "not-wide", "not-wide"];
  sections("Huntington Beach", huntingtonImages, huntingtonImagesAlt, huntingtonDates, huntingtonDescription, huntingtonTitle, huntingtonImageWidth);
  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Los Angeles") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Los Angeles", losAngelesImages, losAngelesImagesAlt, losAngelesDates, losAngelesDescription, losAngelesTitle, losAngelesImageWidth)); 
    }
    else if(x == "Disneyland") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Disneyland", disneylandImages, disneylandImagesAlt, disneylandDates, disneylandDescription, disneylandTitle, disneylandImageWidth)); 
    }
    else if(x == "Huntington") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Huntington Beach", huntingtonImages, huntingtonImagesAlt, huntingtonDates, huntingtonDescription, huntingtonTitle, huntingtonImageWidth)); 
    }
    else if(x == "all") {
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Los Angeles", losAngelesImages, losAngelesImagesAlt, losAngelesDates, losAngelesDescription, losAngelesTitle, losAngelesImageWidth);
      sections("Disneyland", disneylandImages, disneylandImagesAlt, disneylandDates, disneylandDescription, disneylandTitle, disneylandImageWidth);
      sections("Huntington Beach", huntingtonImages, huntingtonImagesAlt, huntingtonDates, huntingtonDescription, huntingtonTitle, huntingtonImageWidth);
    }
  }
  var imagediv = document.createElement("div"); 
  imagediv.classList.add('view-div');
  document.getElementById("image-view-demo").appendChild(imagediv);    

    function images() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    for(var a = 0; a < losAngelesImages.length; a++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = losAngelesImages[a];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var b = 0; b <  disneylandImages.length; b++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = disneylandImages[b];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var c = 0; c < huntingtonImages.length; c++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = huntingtonImages[c];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
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