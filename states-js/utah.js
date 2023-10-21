var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("utah-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
  
  /**
   * Salt Lake City Lists
   */
  const saltImages = ["../states-images/utah-images/church-me.jpeg", "../states-images/utah-images/church.jpeg", "../states-images/utah-images/church-mom.jpeg", "../states-images/utah-images/salt-lake-city2.jpeg", "../states-images/utah-images/salt-lake-city3.jpeg"];
  const saltImageAlt = ["This is a picture of me in front of a mormon church in Salt Lake City.",
  "This is an image of a mormon church in Salt Lake City.",
  "This is a picture of my mother and I at a mormon church in Salt Lake City.",
   "This is an image of a mormon church in downtown Salt Lake City.",
   "This is an image of downtown Salt Lake City."];
  const saltDates = ["March 22, 2018", "March 22, 2018", "March 22, 2018", "March 22, 2018", "March 22, 2018"];
  const saltDescription = ["This is a picture of me in front of a <br> mormon church in Salt Lake City.", 
  "This is an image of a mormon church in <br> Salt Lake City.", 
  "This is a picture of my mother and I <br> at a mormon church in Salt Lake City.",
  "This is an image of a mormon church in downtown Salt Lake City.",
  "This is an image of downtown Salt Lake City."];
  const saltTitle = ["Salt Lake City Mormon Church", "Salt Lake City Mormon Church", "Salt Lake City Mormon Church", "Salt Lake City Mormon Church", "Downtown Salt Lake City"];
  const saltImageWidth = ["not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide"];
  
  sections("Salt Lake City", saltImages, saltImageAlt, saltDates, saltDescription, saltTitle, saltImageWidth);
  /**
   * Arches lists
   */
  const archesImages = ["../states-images/utah-images/arches-sign.jpeg", "../states-images/utah-images/arches2.jpeg", "../states-images/utah-images/arches.jpeg", "../states-images/utah-images/big-arch.jpeg", "../states-images/utah-images/small-arch.jpeg", "../states-images/utah-images/arch-field.jpeg", "../states-images/utah-images/arches4.jpeg", "../states-images/utah-images/arches3.jpeg" ];
  const archesImageAlt = ["This is an image of me on the sign of the Arches National Park.",
  "This is an image of me at the Arches National Park.",
  "This is an image of me at the Arches National Park.",
  "This is an image of me at the heart of the arch of the Arches National Park.",
  "This is an image of me inside a small arch with a view of the big arch at the Arches National Park.",
  "This is an image of me looking at a field at the Arches National Park. It was a gigantic field and it was pretty cool.",
  "This is an image of me at the Arches National Park.",
  "This is an image of me at an open area at the Arches National Park."];
  const archesDates = ["March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018", "March 24, 2018"];
  const archesDescription = ["This is an image of me on the sign of the Arches National Park.",
  "This is an image of me at the Arches National Park.",
  "This is an image of me at the Arches <br> National Park.", 
  "This is an image of me at the heart of the <br> arch of the Arches National Park.",
  "This is an image of me inside a small arch <br> with a view of the big arch at the Arches <br> National Park.",
  "This is an image of me looking at a field at the Arches National Park. <br> It was a gigantic field and it was pretty cool.",
  "This is an image of me at the Arches National Park.",
  "This is an image of me at an open area <br> at the Arches National Park."];
  const archesTitle = ["Arches National Park Sign", "Arches National Park", "Arches National Park", "Arches National Park", "Arches National Park", "Arches National Park", "Arches National Park", "Arches National Park"];
  const archesImageWidth = ["mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "not-wide"];
  
  sections("Arches National Park", archesImages, archesImageAlt, archesDates, archesDescription, archesTitle, archesImageWidth);
  /**
   * Springville Lists
   */
  const springvilleImages = ["../states-images/utah-images/mountains.jpeg", "../states-images/utah-images/mountains3.jpeg", "../states-images/utah-images/mountains2.jpeg", "../states-images/utah-images/mountains4.jpeg", "../states-images/utah-images/mountains5.jpeg"];
  const springvilleImageAlt = ["This is an image of me at Springville Utah standing at the middle of a mountain.",
  "This is an image of me at Springville Utah standing at the middle of a mountain.",
  "This is an image of me at Springville Utah standing at the bottom of the mountains.",
  "This is an image of me at Springville Utah standing at the center of the mountains.",
  "This is an image of me at Springville Utah standing at the bottom of the mountains."];
  const springvilleDates = ["March 25, 2018", "March 25, 2018", "March 25, 2018", "March 25, 2018", "March 25, 2018"];
  const springvilleDescription = ["This is an image of me at Springville Utah standing at the middle <br> of a mountain.", 
  "This is an image of me at Springville Utah standing at the middle <br> of a mountain.",
  "This is an image of me at Springville Utah <br> standing at the bottom of the mountains.",
  "This is an image of me at Springville Utah <br> standing at the center of the mountains.",
  "This is an image of me at Springville Utah <br> standing at the bottom of the mountains."];
  const springvilleTitle = ["Springville, Utah", "Springville, Utah", "Springville, Utah", "Springville, Utah", "Springville, Utah"];
  const springvilleImageWidth = ["mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide"];
  
  sections("Springville, Utah", springvilleImages, springvilleImageAlt, springvilleDates, springvilleDescription, springvilleTitle, springvilleImageWidth);
  /**
   * Other Utah lists
   */
  const utahImages = ["../states-images/utah-images/draper.jpeg", "../states-images/utah-images/outside.jpeg", "../states-images/utah-images/pauls-house.jpeg"];
  const utahImageAlt = ["This is an image of me at Draper, Utah which was a nice view of the city.",
  "This is an image of me standing outside of my cousins house in Utah. I really like the cool view of the mountains.",
  "This is an image of me standing outside my other cousins house in Utah. Again, I really find the mountains a view cool view right outside their house."];
  const utahDates = ["March 23, 2018", "March 26, 2018", "March 24, 2018"];
  const utahDescription = ["This is an image of me at Draper, Utah <br> which was a nice view of the city.",
  "This is an image of me standing outside <br> of my cousins house in Utah. I really like <br> the cool view of the mountains.",
  "This is an image of me standing outside my other cousins house <br> in Utah. Again, I really find the mountains a view cool view right <br> outside their house."];
  const utahTitle = ["Draper, Utah", "Utah", "Utah"];
  const utahImageWidth = ["not-wide", "not-wide", "mid-wide"];
  
  sections("Other parts of Utah", utahImages, utahImageAlt, utahDates, utahDescription, utahTitle, utahImageWidth);
  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Salt") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Salt Lake City", saltImages, saltImageAlt, saltDates, saltDescription, saltTitle, saltImageWidth)); 
    }
    else if(x == "Arches") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Arches National Park", archesImages, archesImageAlt, archesDates, archesDescription, archesTitle, archesImageWidth)); 
    }
    else if(x == "Springville") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Springville, Utah", springvilleImages, springvilleImageAlt, springvilleDates, springvilleDescription, springvilleTitle, springvilleImageWidth)); 
    }
    else if(x == "Other") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Other parts of Utah", utahImages, utahImageAlt, utahDates, utahDescription, utahTitle, utahImageWidth)); 
    }
    else if(x == "all") {
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Salt Lake City", saltImages, saltImageAlt, saltDates, saltDescription, saltTitle, saltImageWidth);
      sections("Arches National Park", archesImages, archesImageAlt, archesDates, archesDescription, archesTitle, archesImageWidth);
      sections("Springville, Utah", springvilleImages, springvilleImageAlt, springvilleDates, springvilleDescription, springvilleTitle, springvilleImageWidth);
      sections("Other parts of Utah", utahImages, utahImageAlt, utahDates, utahDescription, utahTitle, utahImageWidth);
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