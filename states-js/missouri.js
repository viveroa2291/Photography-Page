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
  var img = document.getElementsByClassName("missouri-images");
  var boxImage = document.getElementsByClassName("box-image");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  
  /**
   * Mizzou Lists
   */
  const mizzouImages = ["states-images/missouri-images/sami.jpeg", "states-images/missouri-images/me.jpeg", "states-images/missouri-images/mikayla.jpeg", "states-images/missouri-images/sami3.jpeg", "states-images/missouri-images/sami2.jpeg", "states-images/missouri-images/sami-rise.jpeg", "states-images/missouri-images/stadium.jpeg"];
  const mizzouImagesAlt = ["This is a picture of my friend Sami and I at the Mizzou commons.", 
  "This is the picture of me holding a 'Fight Tiger' sign at the commons at the University of Missouri.",
  "This is the picture of my friend Mikayla and I at the University of Missouri commons holding a 'Fight Tiger' sign.",
  "This is a picture of my friend Sami and I holding a cat inside of her dorm.",
  "This is a picture of my friend Sami and I at the University of Missouri.",
  "This is a picture of my friend Sami and I at the University of Missouri.",
  "This is a picture of me standing outside of the University of Missouri football stadium."];
  const mizzouDates = ["August 20, 2020", "August 20, 2020", "August 20, 2020", "August 22, 2020", "September 12, 2020", "September 12, 2020", "May 11, 2021"];
  const mizzouDescription = ["This is a picture of my friend Sami and I <br> at the Mizzou commons.",
  "This is the picture of me holding a <br> 'Fight Tiger' sign at the commons <br> at the University of Missouri.",
  "This is the picture of my friend Mikayla and I <br> at the University of Missouri commons <br> holding a 'Fight Tiger' sign.",
  "This is a picture of my friend Sami and I <br> holding a cat inside of her dorm.",
  "This is a picture of my friend Sami and I <br> at the University of Missouri.",
  "This is a picture of my friend Sami and I <br> at the University of Missouri.",
  "This is a picture of me standing outside <br> of the University of Missouri football <br> stadium."];
  const mizzouTitle = ["University of Missouri", "University of Missouri", "University of Missouri", "The Rise", "University of Missouri", "The Rise", "Mizzou Stadium"];
  const mizzouImageWidth = ["not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide"];
  
  sections("University of Missouri", mizzouImages, mizzouImagesAlt, mizzouDates, mizzouDescription, mizzouTitle, mizzouImageWidth);
  
  /**
   * Eldon Caves Lists
   */
  const eldonImages = ["states-images/missouri-images/cave.jpeg", "states-images/missouri-images/cave2.jpeg", "states-images/missouri-images/sami-cave.jpeg", "states-images/missouri-images/cesar.jpeg", "states-images/missouri-images/sami-nikki.jpeg", "states-images/missouri-images/group.jpeg", "states-images/missouri-images/cave-red.jpeg"];
  const eldonImagesAlt = ["This is a picture of the cave that we went to visit while we were in Missouri.",
  "This is a picture of the cave that we went to visit while we were in Missouri.",
  "This is the picture of my friend Sami and I inside the cave that we went to visit while in Missouri.",
  "This is the picture of my friend Cesar and I inside the cave that we went to visit while in Missouri.",
  "This is the picture of my friends Nikki, Sami, and I inside the cave that we went to visit while in Missouri.",
  "This is a group picture of my friends Nikki, Sami, Cesar, and I inside the cave that we went to visit while in Missouri.",
  "This is the picture of the cave that we went to visit while in Missouri."];
  const eldonDates = ["May 11, 2021", "May 11, 2021", "May 11, 2021", "May 11, 2021", "May 11, 2021", "May 11, 2021", "May 11, 2021"];
  const eldonDescription = ["This is a picture of the cave that we went to visit while we were <br> in Missouri.",
  "This is a picture of the cave that we went to visit while we were <br> in Missouri.",
  "This is the picture of my friend Sami and I <br> inside the cave that we went to visit while <br> in Missouri.",
  "This is the picture of my friend Cesar and I <br> inside the cave that we went to visit while <br> in Missouri.",
  "This is the picture of my friends Nikki, Sami, <br> and I inside the cave that we went to visit <br> while in Missouri.",
  "This is a group picture of my friends Nikki, <br> Sami, Cesar, and I inside the cave that <br> we went to visit while in Missouri.",
  "This is the picture of the cave that we went <br> to visit while in Missouri."];
  const eldonTitle = ["Eldon Caves", "Eldon Caves", "Eldon Caves", "Eldon Caves", "Eldon Caves", "Eldon Caves", "Eldon Caves"];
  const eldonImageWidth = ["mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide"];
  
  sections("Eldon Caves", eldonImages, eldonImagesAlt, eldonDates, eldonDescription, eldonTitle, eldonImageWidth);
  
  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Mizzou") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("University of Missouri", mizzouImages, mizzouImagesAlt, mizzouDates, mizzouDescription, mizzouTitle, mizzouImageWidth)); 
    }
    else if(x == "Eldon") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Eldon Caves", eldonImages, eldonImagesAlt, eldonDates, eldonDescription, eldonTitle, eldonImageWidth)); 
    }
    else if(x == "all") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("University of Missouri", mizzouImages, mizzouImagesAlt, mizzouDates, mizzouDescription, mizzouTitle, mizzouImageWidth);
      sections("Eldon Caves", eldonImages, eldonImagesAlt, eldonDates, eldonDescription, eldonTitle, eldonImageWidth); 
    }
  }
  function yearSelected() {
    var y = document.getElementById("year-selector").value; 
    if(y =="2020") 
    {
      var mizzouYear =  yearCollections(y, "mizzou", mizzouImages, mizzouImagesAlt, mizzouDates, mizzouDescription, mizzouTitle, mizzouImageWidth);
      var eldonYear =  yearCollections(y, "eldon", eldonImages, eldonImagesAlt, eldonDates, eldonDescription, eldonTitle, eldonImageWidth);
  
      const yearImages = mizzouYear[1];
      const yearImageAlt = mizzouYear[2];
      const yearDates = mizzouYear[3];
      const yearDescription = mizzouYear[4];
      const yearTitle = mizzouYear[5];
      const yearImageWidth = mizzouYear[6];
  
      yearImages.push(...eldonYear[1]);
      yearImageAlt.push(...eldonYear[2]);
      yearDates.push(...eldonYear[3]);
      yearDescription.push(...eldonYear[4]);
      yearTitle.push(...eldonYear[5]);
      yearImageWidth.push(...eldonYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }  
     yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "2021") 
    {
      var mizzouYear =  yearCollections(y, "mizzou", mizzouImages, mizzouImagesAlt, mizzouDates, mizzouDescription, mizzouTitle, mizzouImageWidth);
      var eldonYear =  yearCollections(y, "eldon", eldonImages, eldonImagesAlt, eldonDates, eldonDescription, eldonTitle, eldonImageWidth);
  
      const yearImages = mizzouYear[1];
      const yearImageAlt = mizzouYear[2];
      const yearDates = mizzouYear[3];
      const yearDescription = mizzouYear[4];
      const yearTitle = mizzouYear[5];
      const yearImageWidth = mizzouYear[6];
  
      yearImages.push(...eldonYear[1]);
      yearImageAlt.push(...eldonYear[2]);
      yearDates.push(...eldonYear[3]);
      yearDescription.push(...eldonYear[4]);
      yearTitle.push(...eldonYear[5]);
      yearImageWidth.push(...eldonYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "all") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("mizzou", mizzouImages, mizzouImagesAlt, mizzouDates, mizzouDescription, mizzouTitle, mizzouImageWidth);
      sections("eldon", eldonImages, eldonImagesAlt, eldonDates, eldonDescription, eldonTitle, eldonImageWidth);
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
      // area.innerHTML += str + " ";
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
  function sections(section, image, imagesAlt, dates, description, title, imageWidth) {
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
  
    for(var d = 0; d < image.length; d++) {
      if(count >= 4.0) {
        element_div = document.createElement("div");
        element_div.classList.add('body-images');
        document.getElementById("demo").appendChild(element_div);
        count = 0.0;
      }
    if(imageWidth[d] != "mid-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[d];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('missouri-images', 'not-wide');
      element_image.src = image[d];
      element_image.alt = imagesAlt[d];
      element_content.appendChild(element_image);
  
      element_card_body = document.createElement("div");
      element_card_body.classList.add('card-body', 'm-1');
      element_content.append(element_card_body);
  
      element_text = document.createElement("p");
      element_text.classList.add('card-text');
      element_text.innerHTML = description[d];
      element_card_body.appendChild(element_text);
  
      element_date = document.createElement("p");
      element_date.classList.add('card-text');
      element_date_small = document.createElement("small");
      element_date_small.classList.add('text-muted');
      element_date_small.innerHTML = dates[d];
      element_date.appendChild(element_date_small);
  
      element_card_body.appendChild(element_date);
      count = count + 1.5;
    }
    if(imageWidth[d] === "mid-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'mid-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[d];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('missouri-images', 'mid-wide');
      element_image.src = image[d];
      element_image.alt = imagesAlt[d];
      element_content.appendChild(element_image);
  
      element_card_body = document.createElement("div");
      element_card_body.classList.add('card-body', 'm-1');
      element_content.append(element_card_body);
  
      element_text = document.createElement("p");
      element_text.classList.add('card-text');
      element_text.innerHTML = description[d];
      element_card_body.appendChild(element_text);
  
      element_date = document.createElement("p");
      element_date.classList.add('card-text');
      element_date_small = document.createElement("small");
      element_date_small.classList.add('text-muted');
      element_date_small.innerHTML = dates[d];
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
  function yearSections(image, imagesAlt, dates, description, title, imageWidth) {
    let count = 0.0;
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
  
    for(var d = 0; d < image.length; d++) {
      if(count >= 4.0) {
        element_div = document.createElement("div");
        element_div.classList.add('body-images');
        document.getElementById("demo").appendChild(element_div);
        count = 0.0;
      }
    if(imageWidth[d] != "wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[d];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('missouri-images', 'not-wide');
      element_image.src = image[d];
      element_image.alt = imagesAlt[d];
      element_content.appendChild(element_image);
  
      element_card_body = document.createElement("div");
      element_card_body.classList.add('card-body', 'm-1');
      element_content.append(element_card_body);
  
      element_text = document.createElement("p");
      element_text.classList.add('card-text');
      element_text.innerHTML = description[d];
      element_card_body.appendChild(element_text);
  
      element_date = document.createElement("p");
      element_date.classList.add('card-text');
      element_date_small = document.createElement("small");
      element_date_small.classList.add('text-muted');
      element_date_small.innerHTML = dates[d];
      element_date.appendChild(element_date_small);
  
      element_card_body.appendChild(element_date);
      if(imageWidth[d+1] === "wide") 
        {
          count = count + 4.0;
        }
        else {
           count = count + 1.5;
        }
    }
    if(imageWidth[d] === "wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[d];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('missouri-images', 'wide');
      element_image.src = image[d];
      element_image.alt = imagesAlt[d];
      element_content.appendChild(element_image);
  
      element_card_body = document.createElement("div");
      element_card_body.classList.add('card-body', 'm-1');
      element_content.append(element_card_body);
  
      element_text = document.createElement("p");
      element_text.classList.add('card-text');
      element_text.innerHTML = description[d];
      element_card_body.appendChild(element_text);
  
      element_date = document.createElement("p");
      element_date.classList.add('card-text');
      element_date_small = document.createElement("small");
      element_date_small.classList.add('text-muted');
      element_date_small.innerHTML = dates[d];
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