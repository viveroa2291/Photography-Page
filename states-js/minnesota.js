var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("minnesota-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
  
  /**
   * Minneapolis Lists
   */
  const minneapolisImages = ["../states-images/minnesota-images/minneapolis-self.jpeg", "../states-images/minnesota-images/minneapolis.jpeg", "../states-images/minnesota-images/minneapolis-self2.jpeg", "../states-images/minnesota-images/us-bank.jpeg", "../states-images/minnesota-images/minneapolis-self3.jpeg"];
  const minneapolisImageAlt = ["This is an image of me in downtown Minneapolis. My friends and I were doing a photoshoot.", 
  "This is an image of my friends and I in downtown Minneapolis during our photoshoot.",
  "This is an image of me in downtown Minneapolis during a photoshoot.",
  "This is an image of me at U.S Bank Stadium, where the Minnesota Vikings play.", 
  "This is another image of me in downtown Minneapolis during a walk around the city."];
  const minneapolisDates = ["August 15, 2020", "August 15, 2020", "August 15, 2020", "August 15, 2020", "June 12, 2021"];
  const minneapolisDescription = ["This is an image of me in downtown Minneapolis. <br> My friends and I were doing a photoshoot.",
  "This is an image of my friends and I in downtown Minneapolis <br> during our photoshoot.",
  "This is an image of me in downtown <br>Minneapolis during a photoshoot.",
  "This is an image of me at U.S Bank Stadium, <br> where the Minnesota Vikings play.",
  "This is another image of me in downtown <br> Minneapolis during a walk around the city."];
  const minneapolisTitle = ["Downtown Minneapolis", "Downtown Minneapolis", "Downtown Minneapolis", "US Bank Stadium Minneapolis", "Downtown Minneapolis"];
  const minneapolisImageWidth = ["mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide"];
  sections("Minneapolis", minneapolisImages, minneapolisImageAlt, minneapolisDates, minneapolisDescription, minneapolisTitle, minneapolisImageWidth);
  /**
   * Minneapolis Arcade Lists
   */
  const arcadeImages = ["../states-images/minnesota-images/rooftop.jpeg", "../states-images/minnesota-images/arcade.jpeg", "../states-images/minnesota-images/arcade-self.jpeg"];
  const arcadeImageAlt = ["This is an image of my friends and I at an arcade in the outskirts of Minneapolis.",
  "This is an image of my friends and I at an arcade in the outskirts of Minneapolis.",
  "This is an image of me at an arcade in the outskirts of Minneapolis with a wall of art."];
  const arcadeDates = ["November 6, 2021", "April 29, 2022", "April 29, 2022"];
  const arcadeDescription = ["This is an image of my friends and I at an arcade in the <br> outskirts of Minneapolis.",
  "This is an image of my friends and I at an arcade in the <br> outskirts of Minneapolis.", 
  "This is an image of me at an arcade in the <br> outskirts of Minneapolis with a wall of art."];
  const arcadeTitle = ["Minneapolis Arcade (Rooftop)","Minneapolis Arcade", "Minneapolis Arcade"];
  const arcadeImageWidth = ["mid-wide", "mid-wide", "not-wide"];
  sections("Minneapolis Arcade", arcadeImages, arcadeImageAlt, arcadeDates, arcadeDescription, arcadeTitle, arcadeImageWidth);
  /**
   * Other Minnesota Lists
   */
  
  const minnesotaImages = ["../states-images/minnesota-images/mallofamerica.jpeg", "../states-images/minnesota-images/george-floyd.jpeg", "../states-images/minnesota-images/minnesota-friends.jpeg", "../states-images/minnesota-images/skiing.jpeg"];
  const minnesotaImageAlt = ["This is an image of me at the Mall of America in Saint Paul Minnesota.", 
  "This is an image of a George Floyd mural located in the outskirts of Minneapolis.",
  "This is an image of my friends in Eden Prarie Minnesota. One of my friends is from Ohio and we haven't seen each other in years and was in town, therefore we met up and merged our friend groups together.",
  "This is an image of me skiing at Afton Alps in Minnesota. I enjoyed skiing here very much and would recommend to give this place a visit if you like to ski or snowboard."];
  const minnesotaDates = ["April 20, 2019", "August 15, 2020", "June 19, 2021", "December 18, 2021"];
  const minnesotaDescription = ["This is an image of me at the Mall of America in Saint Paul <br> Minnesota.",
  "This is an image of a George Floyd mural located in the <br> outskirts of Minneapolis.", 
  "This is an image of my friends in Eden Prarie Minnesota. <br> One of my friends is from Ohio and we haven't seen each <br> other in years and was in town, therefore we met up and <br> merged our friend groups together.", 
  "This is an image of me skiing at Afton Alps in Minnesota. <br> I enjoyed skiing here very much and would recommend <br> to give this place a visit if you like to ski or snowboard."];
  const minnesotaTitle = ["Mall of America", "Minneapolis", "Eden Prarie, Minnesota", "Afton Alps"];
  const minnesotaImageWidth = ["mid-wide", "mid-wide", "mid-wide", "mid-wide"];
  sections("Other Minnesota Parts", minnesotaImages, minnesotaImageAlt, minnesotaDates, minnesotaDescription, minnesotaTitle, minnesotaImageWidth);
  
  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Minneapolis") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Minneapolis", minneapolisImages, minneapolisImageAlt, minneapolisDates, minneapolisDescription, minneapolisTitle, minneapolisImageWidth)); 
    }
    else if(x == "Arcade") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Minneapolis Arcade", arcadeImages, arcadeImageAlt, arcadeDates, arcadeDescription, arcadeTitle, arcadeImageWidth)); 
    }
    else if(x == "Other") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Other Minnesota Parts", minnesotaImages, minnesotaImageAlt, minnesotaDates, minnesotaDescription, minnesotaTitle, minnesotaImageWidth)); 
    }
    else if(x == "all") {
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Minneapolis", minneapolisImages, minneapolisImageAlt, minneapolisDates, minneapolisDescription, minneapolisTitle, minneapolisImageWidth);
      sections("Minneapolis Arcade", arcadeImages, arcadeImageAlt, arcadeDates, arcadeDescription, arcadeTitle, arcadeImageWidth);
      sections("Other Minnesota Parts", minnesotaImages, minnesotaImageAlt, minnesotaDates, minnesotaDescription, minnesotaTitle, minnesotaImageWidth);
    }
  }
  function yearSelected() {
    var y = document.getElementById("year-selector").value; 
    if(y =="2019") 
    {
      var minneapolisYear =  yearCollections(y, "Minneapolis", minneapolisImages, minneapolisImageAlt, minneapolisDates, minneapolisDescription, minneapolisTitle, minneapolisImageWidth);
      var arcadeYear =  yearCollections(y, "arcade", arcadeImages, arcadeImageAlt, arcadeDates, arcadeDescription, arcadeTitle, arcadeImageWidth);
      var minnesotaYear = yearCollections(y, "minnesota State University", minnesotaImages, minnesotaImageAlt, minnesotaDates, minnesotaDescription, minnesotaTitle, minnesotaImageWidth);
  
      const yearImages = minneapolisYear[1];
      const yearImageAlt = minneapolisYear[2];
      const yearDates = minneapolisYear[3];
      const yearDescription = minneapolisYear[4];
      const yearTitle = minneapolisYear[5];
      const yearImageWidth = minneapolisYear[6];
  
      yearImages.push(...arcadeYear[1]);
      yearImageAlt.push(...arcadeYear[2]);
      yearDates.push(...arcadeYear[3]);
      yearDescription.push(...arcadeYear[4]);
      yearTitle.push(...arcadeYear[5]);
      yearImageWidth.push(...arcadeYear[6]);
    
      yearImages.push(...minnesotaYear[1]);
      yearImageAlt.push(...minnesotaYear[2]);
      yearDates.push(...minnesotaYear[3]);
      yearDescription.push(...minnesotaYear[4]);
      yearTitle.push(...minnesotaYear[5]);
      yearImageWidth.push(...minnesotaYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }  
     yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "2020") 
    {
      var minneapolisYear =  yearCollections(y, "minneapolis", minneapolisImages, minneapolisImageAlt, minneapolisDates, minneapolisDescription, minneapolisTitle, minneapolisImageWidth);
      var arcadeYear =  yearCollections(y, "arcade", arcadeImages, arcadeImageAlt, arcadeDates, arcadeDescription, arcadeTitle, arcadeImageWidth);
      var minnesotaYear = yearCollections(y, "minnesota State University", minnesotaImages, minnesotaImageAlt, minnesotaDates, minnesotaDescription, minnesotaTitle, minnesotaImageWidth);
  
      const yearImages = minneapolisYear[1];
      const yearImageAlt = minneapolisYear[2];
      const yearDates = minneapolisYear[3];
      const yearDescription = minneapolisYear[4];
      const yearTitle = minneapolisYear[5];
      const yearImageWidth = minneapolisYear[6];
  
      yearImages.push(...arcadeYear[1]);
      yearImageAlt.push(...arcadeYear[2]);
      yearDates.push(...arcadeYear[3]);
      yearDescription.push(...arcadeYear[4]);
      yearTitle.push(...arcadeYear[5]);
      yearImageWidth.push(...arcadeYear[6]);
    
      yearImages.push(...minnesotaYear[1]);
      yearImageAlt.push(...minnesotaYear[2]);
      yearDates.push(...minnesotaYear[3]);
      yearDescription.push(...minnesotaYear[4]);
      yearTitle.push(...minnesotaYear[5]);
      yearImageWidth.push(...minnesotaYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "2021") 
    {
      var minneapolisYear =  yearCollections(y, "Minneapolis", minneapolisImages, minneapolisImageAlt, minneapolisDates, minneapolisDescription, minneapolisTitle, minneapolisImageWidth);
      var arcadeYear =  yearCollections(y, "Minneapolis Arcade", arcadeImages, arcadeImageAlt, arcadeDates, arcadeDescription, arcadeTitle, arcadeImageWidth);
      var minnesotaYear = yearCollections(y, "Other Parts of Minnesota", minnesotaImages, minnesotaImageAlt, minnesotaDates, minnesotaDescription, minnesotaTitle, minnesotaImageWidth);
  
      const yearImages = minneapolisYear[1];
      const yearImageAlt = minneapolisYear[2];
      const yearDates = minneapolisYear[3];
      const yearDescription = minneapolisYear[4];
      const yearTitle = minneapolisYear[5];
      const yearImageWidth = minneapolisYear[6];
  
      yearImages.push(...arcadeYear[1]);
      yearImageAlt.push(...arcadeYear[2]);
      yearDates.push(...arcadeYear[3]);
      yearDescription.push(...arcadeYear[4]);
      yearTitle.push(...arcadeYear[5]);
      yearImageWidth.push(...arcadeYear[6]);
    
      yearImages.push(...minnesotaYear[1]);
      yearImageAlt.push(...minnesotaYear[2]);
      yearDates.push(...minnesotaYear[3]);
      yearDescription.push(...minnesotaYear[4]);
      yearTitle.push(...minnesotaYear[5]);
      yearImageWidth.push(...minnesotaYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "2022") 
    {
      var minneapolisYear =  yearCollections(y, "minneapolis", minneapolisImages, minneapolisImageAlt, minneapolisDates, minneapolisDescription, minneapolisTitle, minneapolisImageWidth);
      var arcadeYear =  yearCollections(y, "arcade", arcadeImages, arcadeImageAlt, arcadeDates, arcadeDescription, arcadeTitle, arcadeImageWidth);
      var minnesotaYear = yearCollections(y, "minnesota State University", minnesotaImages, minnesotaImageAlt, minnesotaDates, minnesotaDescription, minnesotaTitle, minnesotaImageWidth);
  
      const yearVImages = minneapolisYear[1];
      const yearVImageAlt = minneapolisYear[2];
      const yearVDates = minneapolisYear[3];
      const yearVDescription = minneapolisYear[4];
      const yearVTitle = minneapolisYear[5];
      const yearVImageWidth = minneapolisYear[6];
  
      yearVImages.push(...arcadeYear[1]);
      yearVImageAlt.push(...arcadeYear[2]);
      yearVDates.push(...arcadeYear[3]);
      yearVDescription.push(...arcadeYear[4]);
      yearVTitle.push(...arcadeYear[5]);
      yearVImageWidth.push(...arcadeYear[6]);
    
      yearVImages.push(...minnesotaYear[1]);
      yearVImageAlt.push(...minnesotaYear[2]);
      yearVDates.push(...minnesotaYear[3]);
      yearVDescription.push(...minnesotaYear[4]);
      yearVTitle.push(...minnesotaYear[5]);
      yearVImageWidth.push(...minnesotaYear[6]);
    
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      yearSections(yearVImages, yearVImageAlt, yearVDates, yearVDescription, yearVTitle, yearVImageWidth); 
    }
    else if(y == "all") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("minneapolis", minneapolisImages, minneapolisImageAlt, minneapolisDates, minneapolisDescription, minneapolisTitle, minneapolisImageWidth);
      sections("arcade", arcadeImages, arcadeImageAlt, arcadeDates, arcadeDescription, arcadeTitle, arcadeImageWidth);
      sections("minnesota State University", minnesotaImages, minnesotaImageAlt, minnesotaDates, minnesotaDescription, minnesotaTitle, minnesotaImageWidth);
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
      element_image.classList.add('minnesota-images', 'not-wide');
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
      element_image.classList.add('minnesota-images', 'mid-wide');
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
        element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'not-wide-card');
        element_div.appendChild(element_content);
    
        element_card = document.createElement("div");
        element_card.classList.add('card-header', 'text-center');
        element_card.innerHTML = title[a];
        element_content.appendChild(element_card);
    
        element_image = document.createElement("img");
        element_image.classList.add('minnesota-images', 'not-wide');
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
        element_image.classList.add('minnesota-images', 'mid-wide');
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
        element_image.classList.add('minnesota-images', 'wide');
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