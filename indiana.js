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
  var img = document.getElementsByClassName("indiana-images");
  var boxImage = document.getElementsByClassName("box-image");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  
  /**
   * Indiana Lists 
   */
  const indianaImages = ["states-images/indiana-images/nikki-sami.jpeg", "states-images/indiana-images/nikki-sami2.jpeg", "states-images/indiana-images/nikki.jpeg", "states-images/indiana-images/kelleys.jpeg", "states-images/indiana-images/bears.jpeg", "states-images/indiana-images/sean.jpeg", "states-images/indiana-images/upstairs.jpeg", "states-images/indiana-images/street.jpeg", "states-images/indiana-images/la-una.jpeg", "states-images/indiana-images/la-una2.jpeg"];
  const indianaImageAlt = ["This is a picture of me and my friends Nikki and Sami inside of Nikki's room at Indiana University for her move in day.",
  "This is the picture of my friends Nikki, Sami, and I standing outside an Indiana University sign.",
  "This is the picture of my friend Nikki and I in a Halloween costume posing before going out to a party.",
  "This is a picture of me standing outside of the Kelley's School of Business at Indiana University.",
  "This is an image of me standing outside of Bear's Place.",
  "This is an image of my friend Sean and I at Indiana University.",
  "This is a picture of me at the Upstairs Pub located in Bloomington Indiana. My friend who attends school there took me out after a long day of helping her move out.",
  "This is a picture of me on the street in Bloomington Indiana. I thought the scenery was good, however it appears that it looks better in person than on camera.",
  "This is an image inside of a restaurant in Bloomington with cool wall art and a sign that says 'Make Tacos Not War', which is a message I enjoy.",
  "This is a picture of me standing in front of a grassy wall art that I always wanted to take in my lifetime. I was never able to find a place that had such thing, but found it inside La Una Cantina and had the urge to make my friend take a picture of me."];
  const indianaDates = ["August 22, 2019", "August 22, 2019", "November 1, 2019", "May 30, 2020", "May 31, 2020", "May 31, 2020", "July 21, 2022", "July 21, 2022", "July 21, 2022", "July 21, 2022"];
  const indianaDescription = ["This is a picture of me and my friends <br> Nikki and Sami inside of Nikki's room at <br> Indiana University for her move in day.",
  "This is the picture of my friends Nikki, <br> Sami, and I standing outside an <br> Indiana University sign.",
  "This is the picture of my friend Nikki and I <br> in a Halloween costume posing before <br> going out to a party.",
  "This is a picture of me standing outside of the Kelley's School of Business <br> at Indiana University.",
  "This is an image of me standing outside of Bear's Place.",
  "This is an image of my friend Sean <br> and I at Indiana University.",
  "This is a picture of me at the Upstairs <br> Pub located in Bloomington Indiana. <br> My friend who attends school there <br> took me out after a long day of helping <br> her move out.",
  "This is a picture of me on the street in <br> Bloomington Indiana. I thought the <br> scenery was good, however it appears <br> that it looks better in person than on <br> camera.",
  "This is an image inside of a restaurant <br> in Bloomington with cool wall art and <br> a sign that says 'Make Tacos Not War', <br> which is a message I enjoy.",
  "This is a picture of me standing in front <br> of a grassy wall art that I always wanted <br> to take in my lifetime. I was never able to <br> find a place that had such thing, but <br> found it inside La Una Cantina and had <br> the urge to make my friend take a picture <br> of me."];
  const indianaTitle = ["Nikki's Dorm", "Indiana University", "Nikki's Dorm", "Kelley's School of Business", "Bear's Place", "Indiana University", "Upstairs Pub (Indiana University)", "Bloomington Indiana", "La Una Cantina", "La Una Cantina"];
  const indianaImageWidth = ["not-wide", "not-wide", "not-wide", "wide", "wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide"];
  sections("Indiana University", indianaImages, indianaImageAlt, indianaDates, indianaDescription, indianaTitle, indianaImageWidth);
  
  function yearSelected() {
    var y = document.getElementById("year-selector").value; 
    if(y =="2019") 
    {
      var indianaYear =  yearCollections(y, "Indiana University", indianaImages, indianaImageAlt, indianaDates, indianaDescription, indianaTitle, indianaImageWidth);
  
      const yearImages = indianaYear[1];
      const yearImageAlt = indianaYear[2];
      const yearDates = indianaYear[3];
      const yearDescription = indianaYear[4];
      const yearTitle = indianaYear[5];
      const yearImageWidth = indianaYear[6];
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }  
     yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "2020") 
    {
      var indianaYear =  yearCollections(y, "Indiana University", indianaImages, indianaImageAlt, indianaDates, indianaDescription, indianaTitle, indianaImageWidth);
  
      const yearImages = indianaYear[1];
      const yearImageAlt = indianaYear[2];
      const yearDates = indianaYear[3];
      const yearDescription = indianaYear[4];
      const yearTitle = indianaYear[5];
      const yearImageWidth = indianaYear[6];
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }  
     yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "2022") 
    {
      var indianaYear =  yearCollections(y, "Indiana University", indianaImages, indianaImageAlt, indianaDates, indianaDescription, indianaTitle, indianaImageWidth);
  
      const yearImages = indianaYear[1];
      const yearImageAlt = indianaYear[2];
      const yearDates = indianaYear[3];
      const yearDescription = indianaYear[4];
      const yearTitle = indianaYear[5];
      const yearImageWidth = indianaYear[6];
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }  
     yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth);  
    }
    else if(y == "all") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Indiana University", indianaImages, indianaImageAlt, indianaDates, indianaDescription, indianaTitle, indianaImageWidth); 
    }
  }
  function yearCollections(year, ySection, yImage, yImageAlt, yDates, yDescription, yTitle, yImageWidth) {
    let str;
    var sect; 
    let yCount = 0;
    const yearImage = [];
    const yearImageAlt = [];
    const yearDates = [];
    const yearDescription = [];
    const yearTitle = [];
    const yearImageWidth = [];
    
    for(var i = 0; i < yDates.length; i++) {
      str = yDates[i].substring(yDates[i].length-4);   
      if(str == year) {
        sect = ySection;
        yearImage[yCount] = yImage[i];
        yearImageAlt[yCount] = yImageAlt[i];
        yearDates[yCount] = yDates[i];
        yearDescription[yCount] = yDescription[i];
        yearTitle[yCount] = yTitle[i];
        yearImageWidth[yCount] = yImageWidth[i];
        yCount++;
       
      }
      str = "";
    }
      return[sect, yearImage, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth];
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
    if(imageWidth[a] != "wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('indiana-images', 'not-wide');
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
    if(imageWidth[a] === "wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'wide-card');
      element_div.appendChild(element_content);
      
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('indiana-images', 'wide');
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
          element_image_element.classList.add('indiana-images', 'not-wide');
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
          element_image_element.classList.add('indiana-images', 'wide');
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
  function images(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  for(var i = 0; i < img.length; i++)
  {
      img[i].onclick = images; // indiana-images
  }
  for(var j = 0; j < img.length; j++)
  {
      boxImage[j].onclick = images; // box-image 
  }
  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() { 
    modal.style.display = "none";
  }