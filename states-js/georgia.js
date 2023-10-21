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
  var img = document.getElementsByClassName("georgia-images");
  var boxImage = document.getElementsByClassName("box-image");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  
  /**
   * Atlanta's Lists
   */
  const atlantaImages = ["../states-images/georgia-images/atlanta.jpeg", "../states-images/georgia-images/atlanta2.jpeg"];
  const atlantaImagesAlt = ["This is a picture of me in downtown Atlanta. I really liked the city and what it had to offer.",
  "This is the picture of me in downtown Atlanta."];
  const atlantaDates = ["May 06, 2018", "May 06, 2018"];
  const atlantaDescription = ["This is a picture of me in downtown Atlanta. I really liked the city <br> and what it had to offer.",
  "This is the picture of me in downtown Atlanta."];
  const atlantaTitle = ["Downtown Atlanta", "Downtown Atlanta"];
  const atlantaImageWidth = ["mid-wide", "mid-wide"];
  
  sections("Atlanta", atlantaImages, atlantaImagesAlt, atlantaDates, atlantaDescription, atlantaTitle, atlantaImageWidth);
  /**
   * CNN Lists
   */
  const cnnImages = ["../states-images/georgia-images/cnn.jpeg", "../states-images/georgia-images/cnn2.jpeg"];
  const cnnImagesAlt = ["This is a picture of me standing outside of the CNN building next to the sign.",
  "This is a selfie of me inside of the CNN building next to an anchor's chair and table where the news is reported."];
  const cnnDates = ["May 06, 2018", "May 06, 2018"];
  const cnnDescription = ["This is a picture of me standing outside of the CNN building next <br> to the sign.",
  "This is a selfie of me inside of the CNN building next to an <br> anchor's chair and table where the news is reported."];
  const cnnTitle = ["CNN Building", "Inside CNN"];
  const cnnImageWidth = ["mid-wide", "mid-wide"];
  
  sections("CNN", cnnImages, cnnImagesAlt, cnnDates, cnnDescription, cnnTitle, cnnImageWidth);
  /**
   * Coca-Cola Lists
   */
  const cocaImages = ["../states-images/georgia-images/coca-cola.jpeg", "../states-images/georgia-images/coca-cola3.jpeg", "../states-images/georgia-images/coca-cola2.jpeg"];
  const cocaImagesAlt = ["This is a picture of me sitting on a couch enjoying a coke drink inside the World of Coca-Cola located in Atlanta.",
  "This is a picture of me inside of the World of Coca-Cola. I thought this looked cool.",
  "This is an image of me jumping outside of the World of Coca Cola sign."];
  const cocaDates = ["May 06, 2018", "May 06, 2018", "May 06, 2018"];
  const cocaDescription = ["This is a picture of me sitting on a couch enjoying a coke drink inside <br> the World of Coca-Cola located in Atlanta.",
  "This is a picture of me inside of the World of Coca-Cola. I thought <br> this looked cool.",
  "This is an image of me jumping outside <br> of the World of Coca Cola sign."];
  const cocaTitle = ["Inside the World of Coca-Cola", "Inside the World of Coca-Cola", "Outside of the World of Coca-Cola"];
  const cocaImageWidth = ["mid-wide", "mid-wide", "not-wide"];
  
  sections("World of Coca-Cola", cocaImages, cocaImagesAlt, cocaDates, cocaDescription, cocaTitle, cocaImageWidth);
  /**
   * Other Georgia Lists
   */
  const georgiaImages = ["../states-images/georgia-images/airport.jpeg", "../states-images/georgia-images/dinner.jpeg", "../states-images/georgia-images/pool.jpeg", "../states-images/georgia-images/hotel.jpeg"];
  const georgiaImagesAlt = ["This is a picture of my sister's national team for gymnastics. She is part of the special olympics and I was there to help coach the boys. We took a group picture in the airport and I believe this airport ranks in the United States for being one of the biggest airports in the United States.",
  "This is a picture of me standing outside of the Marietta Diner which was where we ate for dinner.",
  "This is a picture of me sitting pool side by my hotel",
  "This is a mirror picture of me in the hotel."];
  const georgiaDates = ["May 04, 2018", "May 04, 2018", "May 04, 2018", "May 06, 2018"];
  const georgiaDescription = ["This is a picture of my sister's national team for gymnastics. She is <br> part of the special olympics and I was there to help coach the boys. <br> We took a group picture in the airport and I believe this airport ranks <br> in the United States for being one of the biggest airports in the <br> United States.",
  "This is a picture of me standing outside of the Marietta Diner <br> which was where we ate for dinner.",
  "This is a picture of me sitting pool side <br> by my hotel.",
  "This is a mirror picture of me in the hotel."];
  const georgiaTitle = ["Airport", "Marietta Diner", "Pool", "Mirror Picture"];
  const georgiaImageWidth = ["mid-wide", "mid-wide", "not-wide", "not-wide"];
  
  sections("Other Georgia Pictures", georgiaImages, georgiaImagesAlt, georgiaDates, georgiaDescription, georgiaTitle, georgiaImageWidth);
  
  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Atlanta") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Atlanta", atlantaImages, atlantaImagesAlt, atlantaDates, atlantaDescription, atlantaTitle, atlantaImageWidth)); 
    }
    else if(x == "Cnn") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("CNN", cnnImages, cnnImagesAlt, cnnDates, cnnDescription, cnnTitle, cnnImageWidth)); 
    }
    else if(x == "Coca") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("World of Coca-Cola", cocaImages, cocaImagesAlt, cocaDates, cocaDescription, cocaTitle, cocaImageWidth)); 
  
    }
    else if(x == "Other") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Other Georgia Pictures", georgiaImages, georgiaImagesAlt, georgiaDates, georgiaDescription, georgiaTitle, georgiaImageWidth));  
    }
    else if(x == "all") {
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Atlanta", atlantaImages, atlantaImagesAlt, atlantaDates, atlantaDescription, atlantaTitle, atlantaImageWidth);
      sections("CNN", cnnImages, cnnImagesAlt, cnnDates, cnnDescription, cnnTitle, cnnImageWidth);
      sections("World of Coca-Cola", cocaImages, cocaImagesAlt, cocaDates, cocaDescription, cocaTitle, cocaImageWidth);
      sections("Other Georgia Pictures", georgiaImages, georgiaImagesAlt, georgiaDates, georgiaDescription, georgiaTitle, georgiaImageWidth);
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