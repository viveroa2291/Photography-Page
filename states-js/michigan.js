var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("michigan-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");  
var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);    

const sawyer = new ImageSet(
  ["../states-images/michigan-images/sami.jpeg", "../states-images/michigan-images/nicole.jpeg", "../states-images/michigan-images/sami2.jpeg", "../states-images/michigan-images/nicole-sami.jpeg", "../states-images/michigan-images/gabi-nora.jpeg", "../states-images/michigan-images/sawyer2.jpeg", "../states-images/michigan-images/alex.jpeg", "../states-images/michigan-images/kaitlin-alex.jpeg", "../states-images/michigan-images/sawyer.jpeg", "../states-images/michigan-images/alex2.jpeg"],
  ["This is the picture of my friend Sami and I sitting on a tree at The Dunes in Sawyer Michigan.", "This is the picture of my friend Nicole and I sitting on a tree at The Dunes in Sawyer Michigan.", "This is the picture of my friend Sami and I in the clean mud of The Dunes in Sawyer Michigan.", "This is the picture of my friends Nicole and Sami in the clean mud of The Dunes in Sawyer Michigan.", "This is the picture of my friends Gabi and Nora at the beach in Sawyer Michigan.", "This is the picture of my friends Alex, Kaitlin, Gabi, and Nora at the beach in Sawyer Michigan.", "This is the picture of my friend Alex and I sitting on a tree at the Dunes.", "This is the picture of my friends Alex, Kaitlin, and I sitting on a tree at the Dunes covered in clean mud.", "This is a group picture of my friends and I sitting on a tree at The Dunes.", "This is a selfie taken by me of my friend Alex and I covered in clean mud at The Dunes."],
  ["July 14, 2019", "July 14, 2019", "July 14, 2019", "July 14, 2019", "August 10, 2019", "August 10, 2019", "August 10, 2019", "August 10, 2019", "August 10, 2019", "August 10, 2019"],
  ["This is the picture of my friend Sami and I sitting on a tree at The Dunes in Sawyer Michigan.", "This is the picture of my friend Nicole and I sitting on a tree at The Dunes in Sawyer Michigan.", "This is the picture of my friend Sami and I in the clean mud of The Dunes in Sawyer Michigan.", "This is the picture of my friends Nicole and Sami in the clean mud of The Dunes in Sawyer Michigan.", "This is the picture of my friends Gabi and Nora at the beach in Sawyer Michigan.", "This is the picture of my friends Alex, Kaitlin, Gabi, and Nora at the beach in Sawyer Michigan.", "This is the picture of my friend Alex and I sitting on a tree at the Dunes.", "This is the picture of my friends Alex, Kaitlin, and I sitting on a tree at the Dunes covered in clean mud.", "This is a group picture of my friends and I sitting on a tree at The Dunes.", "This is a selfie taken by me of my friend Alex and I covered in clean mud at The Dunes."],
  ["The Dunes", "The Dunes", "The Dunes", "Clean mud of The Dunes", "Beach of the Dunes", "Beach of the Dunes", "The Dunes", "The Dunes", "The Dunes", "Clean Mud"],
  ["not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "not-wide"]
);
  sections("Sawyer (The Dunes)", sawyer.image, sawyer.imageAlt, sawyer.date, sawyer.description, sawyer.title, sawyer.imageWidth);

const lakehouse = new ImageSet(
  ["../states-images/michigan-images/nikki.jpeg", "../states-images/michigan-images/nikki-chloe.jpeg", "../states-images/michigan-images/nikki2.jpeg", "../states-images/michigan-images/fireworks.jpeg"],
  ["This is a picture of my friend Nikki and I at Lake Michigan Beach on the Fourth of July.", "This is an image of my friends Nikki, Chloe, and I at Lake Michigan Beach on the Fourth of July.", "This is an image of my friends Nikki and I at Lake Michigan Beach on the Fourth of July.", "This is an image of my friends Nikki, Chloe, and I blowing up fireworks outside on the Fourth of July."],
  ["July 4, 2020", "July 4, 2020", "July 4, 2020", "July 4, 2020"],
  ["This is a picture of my friend Nikki and I at Lake Michigan Beach on the Fourth of July.", "This is an image of my friends Nikki, Chloe, and I at Lake Michigan Beach on the Fourth of July.", "This is an image of my friends Nikki and I at Lake Michigan Beach on the Fourth of July.", "This is an image of my friends Nikki, Chloe, and I blowing up fireworks outside on the Fourth of July."],
  ["Lake Michigan Beach", "Lake Michigan Beach", "Lake Michigan Beach", "Fireworks"],
  ["not-wide", "not-wide", "not-wide", "not-wide"]
);
  sections("Friend's Lakehouse", lakehouse.image, lakehouse.imageAlt, lakehouse.date, lakehouse.description, lakehouse.title, lakehouse.imageWidth);

  const wakefield = new ImageSet(
    ["../states-images/michigan-images/cabin.jpeg", "../states-images/michigan-images/wakefield3.jpeg", "../states-images/michigan-images/ski.jpeg", "../states-images/michigan-images/wakefield4.jpeg", "../states-images/michigan-images/wakefield.jpeg", "../states-images/michigan-images/wakefield2.jpeg"],
    ["This is an image of me sitting inside my cabin before skiing.", "This is an image of me skiing in Wakefield Michigan.", "This is an image of where I was skiing in Wakefield Michigan.", "This is a selfie of me skiing in Wakefield Michigan after I fell and had snow all over my face.", "This is a selfie of me skiing in Wakefield Michigan.", "This is a selfie of me skiing in Wakefield Michigan."],
    ["January 22, 2022", "January 22, 2022", "January 22, 2022", "January 22, 2022", "January 23, 2022", "January 23, 2022"],
    ["This is an image of me sitting inside my cabin before skiing.", "This is an image of me skiing in Wakefield Michigan.", "This is an image of where I was skiing in Wakefield Michigan.", "This is a selfie of me skiing in Wakefield Michigan after I fell and had snow all over my face.", "This is a selfie of me skiing in Wakefield Michigan.", "This is a selfie of me skiing in Wakefield Michigan."],
    ["Cabin", "Wakefield", "Wakefield", "Wakefield", "Wakefield", "Wakefield"],
    ["not-wide", "not-wide", "wide", "mid-wide", "mid-wide", "mid-wide"]
  );
  sections("Wakefield", wakefield.image, wakefield.imageAlt, wakefield.date, wakefield.description, wakefield.title, wakefield.imageWidth);

  const detroit = new ImageSet(
    ["../states-images/michigan-images/me.jpeg"],
    ["This is an image of me sitting inside a bus on a way to a German event."],
    ["August 31, 2013"],
    ["This is an image of me sitting inside a bus on a way to a German event."],
    ["German Event"],
    ["not-wide"]
  );
  sections("Detroit", detroit.image, detroit.imageAlt, detroit.date, detroit.description, detroit.title, detroit.imageWidth);
  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Sawyer") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Sawyer (The Dunes)", sawyer.image, sawyer.imageAlt, sawyer.date, sawyer.description, sawyer.title, sawyer.imageWidth)); 
    }
    else if(x == "Lakehouse") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Friend's Lakehouse", lakehouse.image, lakehouse.imageAlt, lakehouse.date, lakehouse.description, lakehouse.title, lakehouse.imageWidth)); 
    }
    else if(x == "Wakefield") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Wakefield", wakefield.image, wakefield.imageAlt, wakefield.date, wakefield.description, wakefield.title, wakefield.imageWidth)); 
    }
    else if(x == "Detroit") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Detroit", detroit.image, detroit.imageAlt, detroit.date, detroit.description, detroit.title, detroit.imageWidth)); 
  
    }
    else if(x == "all") {
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Sawyer (The Dunes)", sawyer.image, sawyer.imageAlt, sawyer.date, sawyer.description, sawyer.title, sawyer.imageWidth);
      sections("Friend's Lakehouse", lakehouse.image, lakehouse.imageAlt, lakehouse.date, lakehouse.description, lakehouse.title, lakehouse.imageWidth);
      sections("Wakefield", wakefield.image, wakefield.imageAlt, wakefield.date, wakefield.description, wakefield.title, wakefield.imageWidth);
      sections("Detroit", detroit.image, detroit.imageAlt, detroit.date, detroit.description, detroit.title, detroit.imageWidth);
    }
  }

  var imageList = [];
  var descriptionList = [];

  for(var a = 0; a < sawyer.image.length; a++) {
      imageList.push(sawyer.image[a]);
      descriptionList.push(sawyer.description[a]);
  }
  for(var b = 0; b < lakehouse.image.length; b++) {
    imageList.push(lakehouse.image[b]);
    descriptionList.push(lakehouse.description[b]);
  }
  for(var c = 0; c < wakefield.image.length; c++) {
    imageList.push(wakefield.image[c]);
    descriptionList.push(wakefield.description[c]);
  }
  for(var d = 0; d < detroit.image.length; d++) {
    imageList.push(detroit.image[d]);
    descriptionList.push(detroit.description[d]);
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

  function yearSelected() {
    var y = document.getElementById("year-selector").value; 
    if(y =="2013") 
    {
      var sawyerYear =  yearCollections(y, "sawyer", sawyer.image, sawyer.imageAlt, sawyer.date, sawyer.description, sawyer.title, sawyer.imageWidth);
      var lakehouseYear =  yearCollections(y, "lakehouse", lakehouse.image, lakehouse.imageAlt, lakehouse.date, lakehouse.description, lakehouse.title, lakehouse.imageWidth);
      var wakefieldYear = yearCollections(y, "wakefield State University", wakefield.image, wakefield.imageAlt, wakefield.date, wakefield.description, wakefield.title, wakefield.imageWidth);
      var detroitYear = yearCollections(y, "Other Parts of detroit", detroit.image, detroit.imageAlt, detroit.date, detroit.description, detroit.title, detroit.imageWidth);
  
      const yearImages = sawyerYear[1];
      const yearImageAlt = sawyerYear[2];
      const yearDates = sawyerYear[3];
      const yearDescription = sawyerYear[4];
      const yearTitle = sawyerYear[5];
      const yearImageWidth = sawyerYear[6];
  
      yearImages.push(...lakehouseYear[1]);
      yearImageAlt.push(...lakehouseYear[2]);
      yearDates.push(...lakehouseYear[3]);
      yearDescription.push(...lakehouseYear[4]);
      yearTitle.push(...lakehouseYear[5]);
      yearImageWidth.push(...lakehouseYear[6]);
    
      yearImages.push(...wakefieldYear[1]);
      yearImageAlt.push(...wakefieldYear[2]);
      yearDates.push(...wakefieldYear[3]);
      yearDescription.push(...wakefieldYear[4]);
      yearTitle.push(...wakefieldYear[5]);
      yearImageWidth.push(...wakefieldYear[6]);
  
      yearImages.push(...detroitYear[1]);
      yearImageAlt.push(...detroitYear[2]);
      yearDates.push(...detroitYear[3]);
      yearDescription.push(...detroitYear[4]);
      yearTitle.push(...detroitYear[5]);
      yearImageWidth.push(...detroitYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }  
     sections("sawyer", yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "2019") 
    {
      var sawyerYear =  yearCollections(y, "sawyer", sawyer.image, sawyer.imageAlt, sawyer.date, sawyer.description, sawyer.title, sawyer.imageWidth);
      var lakehouseYear =  yearCollections(y, "lakehouse", lakehouse.image, lakehouse.imageAlt, lakehouse.date, lakehouse.description, lakehouse.title, lakehouse.imageWidth);
      var wakefieldYear = yearCollections(y, "wakefield State University", wakefield.image, wakefield.imageAlt, wakefield.date, wakefield.description, wakefield.title, wakefield.imageWidth);
      var detroitYear = yearCollections(y, "Other Parts of detroit", detroit.image, detroit.imageAlt, detroit.date, detroit.description, detroit.title, detroit.imageWidth);
  
      const yearImages = sawyerYear[1];
      const yearImageAlt = sawyerYear[2];
      const yearDates = sawyerYear[3];
      const yearDescription = sawyerYear[4];
      const yearTitle = sawyerYear[5];
      const yearImageWidth = sawyerYear[6];
  
      yearImages.push(...lakehouseYear[1]);
      yearImageAlt.push(...lakehouseYear[2]);
      yearDates.push(...lakehouseYear[3]);
      yearDescription.push(...lakehouseYear[4]);
      yearTitle.push(...lakehouseYear[5]);
      yearImageWidth.push(...lakehouseYear[6]);
    
      yearImages.push(...wakefieldYear[1]);
      yearImageAlt.push(...wakefieldYear[2]);
      yearDates.push(...wakefieldYear[3]);
      yearDescription.push(...wakefieldYear[4]);
      yearTitle.push(...wakefieldYear[5]);
      yearImageWidth.push(...wakefieldYear[6]);
  
      yearImages.push(...detroitYear[1]);
      yearImageAlt.push(...detroitYear[2]);
      yearDates.push(...detroitYear[3]);
      yearDescription.push(...detroitYear[4]);
      yearTitle.push(...detroitYear[5]);
      yearImageWidth.push(...detroitYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "2020") 
    {
      var sawyerYear =  yearCollections(y, "sawyer", sawyer.image, sawyer.imageAlt, sawyer.date, sawyer.description, sawyer.title, sawyer.imageWidth);
      var lakehouseYear =  yearCollections(y, "lakehouse", lakehouse.image, lakehouse.imageAlt, lakehouse.date, lakehouse.description, lakehouse.title, lakehouse.imageWidth);
      var wakefieldYear = yearCollections(y, "wakefield State University", wakefield.image, wakefield.imageAlt, wakefield.date, wakefield.description, wakefield.title, wakefield.imageWidth);
      var detroitYear = yearCollections(y, "Other Parts of detroit", detroit.image, detroit.imageAlt, detroit.date, detroit.description, detroit.title, detroit.imageWidth);
  
      const yearImages = sawyerYear[1];
      const yearImageAlt = sawyerYear[2];
      const yearDates = sawyerYear[3];
      const yearDescription = sawyerYear[4];
      const yearTitle = sawyerYear[5];
      const yearImageWidth = sawyerYear[6];
  
      yearImages.push(...lakehouseYear[1]);
      yearImageAlt.push(...lakehouseYear[2]);
      yearDates.push(...lakehouseYear[3]);
      yearDescription.push(...lakehouseYear[4]);
      yearTitle.push(...lakehouseYear[5]);
      yearImageWidth.push(...lakehouseYear[6]);
    
      yearImages.push(...wakefieldYear[1]);
      yearImageAlt.push(...wakefieldYear[2]);
      yearDates.push(...wakefieldYear[3]);
      yearDescription.push(...wakefieldYear[4]);
      yearTitle.push(...wakefieldYear[5]);
      yearImageWidth.push(...wakefieldYear[6]);
  
      yearImages.push(...detroitYear[1]);
      yearImageAlt.push(...detroitYear[2]);
      yearDates.push(...detroitYear[3]);
      yearDescription.push(...detroitYear[4]);
      yearTitle.push(...detroitYear[5]);
      yearImageWidth.push(...detroitYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
    }
    else if(y == "2022") 
    {
      var sawyerYear =  yearCollections(y, "sawyer", sawyer.image, sawyer.imageAlt, sawyer.date, sawyer.description, sawyer.title, sawyer.imageWidth);
      var lakehouseYear =  yearCollections(y, "lakehouse", lakehouse.image, lakehouse.imageAlt, lakehouse.date, lakehouse.description, lakehouse.title, lakehouse.imageWidth);
      var wakefieldYear = yearCollections(y, "wakefield State University", wakefield.image, wakefield.imageAlt, wakefield.date, wakefield.description, wakefield.title, wakefield.imageWidth);
      var detroitYear = yearCollections(y, "Other Parts of detroit", detroit.image, detroit.imageAlt, detroit.date, detroit.description, detroit.title, detroit.imageWidth);
  
      const yearVImages = sawyerYear[1];
      const yearVImageAlt = sawyerYear[2];
      const yearVDates = sawyerYear[3];
      const yearVDescription = sawyerYear[4];
      const yearVTitle = sawyerYear[5];
      const yearVImageWidth = sawyerYear[6];
  
      yearVImages.push(...lakehouseYear[1]);
      yearVImageAlt.push(...lakehouseYear[2]);
      yearVDates.push(...lakehouseYear[3]);
      yearVDescription.push(...lakehouseYear[4]);
      yearVTitle.push(...lakehouseYear[5]);
      yearVImageWidth.push(...lakehouseYear[6]);
    
      yearVImages.push(...wakefieldYear[1]);
      yearVImageAlt.push(...wakefieldYear[2]);
      yearVDates.push(...wakefieldYear[3]);
      yearVDescription.push(...wakefieldYear[4]);
      yearVTitle.push(...wakefieldYear[5]);
      yearVImageWidth.push(...wakefieldYear[6]);
  
      yearVImages.push(...detroitYear[1]);
      yearVImageAlt.push(...detroitYear[2]);
      yearVDates.push(...detroitYear[3]);
      yearVDescription.push(...detroitYear[4]);
      yearVTitle.push(...detroitYear[5]);
      yearVImageWidth.push(...detroitYear[6]);
    
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
  
      yearSections(yearVImages, yearVImageAlt, yearVDates, yearVDescription, yearVTitle, yearVImageWidth); 
    }
    else if(y == "all") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Sawyer (The Dunes)", sawyer.image, sawyer.imageAlt, sawyer.date, sawyer.description, sawyer.title, sawyer.imageWidth);
      sections("Friend's Lakehouse", lakehouse.image, lakehouse.imageAlt, lakehouse.date, lakehouse.description, lakehouse.title, lakehouse.imageWidth);
      sections("Wakefield", wakefield.image, wakefield.imageAlt, wakefield.date, wakefield.description, wakefield.title, wakefield.imageWidth);
      sections("Detroit", detroit.image, detroit.imageAlt, detroit.date, detroit.description, detroit.title, detroit.imageWidth);
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
    if(imageWidth[a] === "not-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('michigan-images', 'not-wide');
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
      element_image.classList.add('michigan-images', 'mid-wide');
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
      element_image.classList.add('michigan-images', 'wide');
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
        element_image.classList.add('michigan-images', 'not-wide');
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
        element_image.classList.add('michigan-images', 'mid-wide');
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
        element_image.classList.add('michigan-images', 'wide');
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