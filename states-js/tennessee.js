function myRotate(x) {    
    x.classList.toggle("change");
  }   
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
  
  var modal = document.getElementById("myModal");
  var img = document.getElementsByClassName("tennessee-images");
  var boxImage = document.getElementsByClassName("box-image");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  
  /**
   * Tennessee Lists
   */
  const tennesseeImages = ["../states-images/tennessee-images/nikki.jpeg", "../states-images/tennessee-images/group.jpeg", "../states-images/tennessee-images/sami.jpeg", "../states-images/tennessee-images/me.jpeg", "../states-images/tennessee-images/sami-nikki.jpeg", "../states-images/tennessee-images/group-selfie.jpeg", "../states-images/tennessee-images/group-selfie2.jpeg", "../states-images/tennessee-images/mikayla.jpeg"];
  const tennesseeImageAlt = ["This is a picture of my friend Nikki and I taking a selfie on our way down from the infamous bridge in Gaitlinburg.", 
  "This is a group picture of my friends in Gaitlinburg.",
  "This is a picture of my friend Sami and I in Gaitlinburg.",
  "This is an image of me in a Gaitlinburg waterfall.",
  "This is an image of my friends Nikki, Sami, and I in Gaitlinburg.",
  "This is a group selfie of my friends and I in a Gaitlinburg waterfall.",
  "This is a group selfie of my friends and I hiking in Gaitlinburg.",
  "This is an image of my friend Mikayla and I in Gaitlinburg by a waterfall."];
  const tennesseeDates = ["October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020"];
  const tennesseeDescription = ["This is a picture of my friend Nikki and I taking a selfie on our way down <br> from the infamous bridge in Gaitlinburg.",
  "This is a group picture of my friends in Gaitlinburg.",
  "This is a picture of my friend Sami and I <br> in Gaitlinburg.",
  "This is an image of me in a Gaitlinburg <br> waterfall.",
  "This is an image of my friends <br> Nikki, Sami, and I in Gaitlinburg.",
  "This is a group selfie of my friends and I in a Gaitlinburg waterfall.",
  "This is a group selfie of my friends and I hiking in Gaitlinburg.",
  "This is an image of my friend Mikayla <br> and I in Gaitlinburg by a waterfall."];
  const tennesseeTitle = ["Lift Picture", "Gaitlinburg", "Gaitlinburg", "Gaitlinburg Waterfall", "Gaitlinburg", "Gaitlinburg Waterfall", "Gaitlinburg", "Gaitlinburg"];
  const tennesseeImageWidth = ["mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "not-wide"];
  
  sections("Gaitlinburg", tennesseeImages, tennesseeImageAlt, tennesseeDates, tennesseeDescription, tennesseeTitle, tennesseeImageWidth);
  
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
    if(imageWidth[a] != "mid-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('tennessee-images', 'not-wide');
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
      element_image.classList.add('tennessee-images', 'mid-wide');
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