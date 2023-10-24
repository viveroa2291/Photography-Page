function hide() {
    var z = document.getElementById("hide-section");
    var overview = document.getElementById("brief");
    var ar = document.getElementById("arkansas");
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
  
  var modal = document.getElementById("myModal");
  var notWideImg = document.getElementsByClassName("arkansas-images not-wide");
  var wideImg = document.getElementsByClassName("arkansas-images wide");
  var img = document.getElementsByClassName("arkansas-images");
  var boxImage = document.getElementsByClassName("box-image");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  var sectionSelection = document.getElementById("section-selection");
  /**
   * Vandervoort Lists
   */
  const vandervoortImages = ["../states-images/arkansas-images/me.jpeg", "../states-images/arkansas-images/hunting.jpeg", "../states-images/arkansas-images/goats.jpeg", "../states-images/arkansas-images/cows.jpeg", "../states-images/arkansas-images/lake-me.jpeg", "../states-images/arkansas-images/goat-me2.jpeg", "../states-images/arkansas-images/goat-me.jpeg", "../states-images/arkansas-images/cow-me.jpeg"];
  const vandervoortImagesAlt = ["This is a mirror picture that I took in my cousins newly remodeled bathroom and was a time when taking mirror pictures was popular on the iphone.", 
  "This is an image of me holding a hunting rifle at my cousins house where we went target shooting on their land <b>safely</b>. It was a fun experience and learned information on gun safety.",
  "This is an image of goats eating their food in my cousins farm.",
  "This is an image of the cows on my cousin's farm.",
  "This is an image of me at the lake that my cousins took me to.",
  "This is an image of me holding a baby goat on my cousin's farm.",
  "This is an image of me and one of my cousin's goat on his farm.",
  "This is an image of me taking a picture with one of my cousin's cow."];
  const vandervoortDates = ["December 29, 2012", "December 28, 2015", "December 31, 2015", "December 31, 2015", "June 15, 2016", "August 19, 2017", "January 1, 2016", "December 28, 2020"];
  const vandervoortDescription = ["This is a mirror picture that I took in my <br> cousins newly remodeled bathroom and <br> was a time when taking mirror pictures <br> was popular on the iphone.",
  "This is an image of me holding a hunting <br> rifle at my cousins house where we <br> went target shooting on their land <br> <b>safely</b>. It was a fun experience and <br> learned information on gun safety.",
  "This is an image of goats eating their <br> food in my cousins farm.",
  "This is an image of the cows on my <br> cousin's farm.",
  "This is an image of me at the lake that <br> my cousins took me to.",
  "This is an image of me holding a baby <br> goat on my cousin's farm.",
  "This is an image of me and one of my cousin's goat on his farm.",
  "This is an image of me taking a <br> picture with one of my cousin's cow."];
  const vandervoortTitle = ["Cousin's Bathroom", "Cousin's Land", "Cousin's Farm", "Cousin's Farm", "Lake", "Cousin's Farm", "Cousin's Farm", "Cousin's Farm"];
  const vandervoortImageWidth = ["not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "wide", "not-wide"];
  
  
  /**
   * Ozark Lists
   */
  const ozarkImages = ["../states-images/arkansas-images/view.jpeg", "../states-images/arkansas-images/restaurant.jpeg"];
  const ozarkImagesAlt = ["This is a picture of me on the side of the road. We were driving and decided to take a picture of the view which is difficult to see with the barricade in the way.", 
  "This is a picture of me outside of one of my favorite Mexican restaurant when visiting my cousins. They provide very delicious food and give you large portions."];
  const ozarkDates = ["August 16, 2017", "August 16, 2017"];
  const ozarkDescription = ["This is a picture of me on the side of <br> the road. We were driving and decided <br> to take a picture of the view which is <br> difficult to see with the barricade in <br> the way.",
  "This is a picture of me outside of one of my favorite Mexican <br> restaurant when visiting my cousins. They provide very delicious <br> food and give you large portions."];
  const ozarkTitle = ["On The Road", "Mexican Restaurant"];
  const ozarkImageWidth = ["not-wide", "wide"];
  
  /**
   * Henderson Lists
   */
  const hendersonImages = ["../states-images/arkansas-images/university.jpeg", "../states-images/arkansas-images/university2.jpeg"];
  const hendersonImagesAlt = ["This is a picture of me at my cousin's undergrad and graduate school. He took me in for a tour of where he works and where he went to school.", 
  "This is a picture of me at my cousin's undergrad and graduate school. He took me in for a tour of where he works and where he went to school."];
  const hendersonDates = ["December 31, 2020", "December 31, 2020"];
  const hendersonDescription = ["This is a picture of me at my cousin's <br> undergrad and graduate school. He <br> took me in for a tour of where he works <br> and where he went to school.",
  "This is a picture of me at my cousin's <br> undergrad and graduate school. He <br> took me in for a tour of where he works <br> and where he went to school."];
  const hendersonTitle = ["Henderson State University", "Henderson State University"];
  const hendersonImageWidth = ["not-wide", "not-wide"];
  
  /**
   * Other Parts of Arkansas Lists
   */
  const arkansasImages = ["../states-images/arkansas-images/cousins.jpeg", "../states-images/arkansas-images/lake-me2.jpeg", "../states-images/arkansas-images/cousins2.jpeg"];
  const arkansasImageAlt = ["This is a picture of my cousins and I at their house.", 
  "This is an image of me at a Lake Horsehead in Clarksville Arkansas.",
  "This is an image of my cousins and I a year and a half later from the image on the left."];
  const arkansasDates = ["January 1, 2016", "June 20, 2016", "August 17, 2017"];
  const arkansasDescription = ["This is a picture of my cousins and I <br> at their house.", 
  "This is an image of me at a Lake <br> Horsehead in Clarksville Arkansas.", 
  "This is an image of my cousins and I a year and a half later <br> from the image on the left."];
  const arkansasTitle = ["Altus (Cousin's House)", "Clarksville Lake", "Waldron"];
  const arkansasImageWidth = ["not-wide", "not-wide", "wide"];
  
  /**
   * Area Selected 
   */
  sections("Vandervoort", vandervoortImages, vandervoortImagesAlt, vandervoortDates, vandervoortDescription, vandervoortTitle, vandervoortImageWidth);
  sections("Ozark", ozarkImages, ozarkImagesAlt, ozarkDates, ozarkDescription, ozarkTitle, ozarkImageWidth);
  sections("Henderson State University", hendersonImages, hendersonImagesAlt, hendersonDates, hendersonDescription, hendersonTitle, hendersonImageWidth);
  sections("Other Parts of Arkansas", arkansasImages, arkansasImageAlt, arkansasDates, arkansasDescription, arkansasTitle, arkansasImageWidth);
 
  var imagediv = document.createElement("div"); 
  imagediv.classList.add('view-div');
  document.getElementById("image-view-demo").appendChild(imagediv);    

    function images() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    for(var a = 0; a < vandervoortImages.length; a++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = vandervoortImages[a];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var b = 0; b <  ozarkImages.length; b++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = ozarkImages[b];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var c = 0; c < hendersonImages.length; c++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = hendersonImages[c];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var d = 0; d < arkansasImages.length; d++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = arkansasImages[d];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }

  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x =="Vandervoort") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Vandervoort", vandervoortImages, vandervoortImagesAlt, vandervoortDates, vandervoortDescription, vandervoortTitle, vandervoortImageWidth)); 
    }
    else if(x == "Ozark") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Ozark", ozarkImages, ozarkImagesAlt, ozarkDates, ozarkDescription, ozarkTitle, ozarkImageWidth)); 
    }
    else if(x == "Henderson") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Henderson State University", hendersonImages, hendersonImagesAlt, hendersonDates, hendersonDescription, hendersonTitle, hendersonImageWidth)); 
  
    }
    else if(x == "Other") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Other Parts of Arkansas", arkansasImages, arkansasImageAlt, arkansasDates, arkansasDescription, arkansasTitle, arkansasImageWidth));
    }
    else if(x == "all") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Vandervoort", vandervoortImages, vandervoortImagesAlt, vandervoortDates, vandervoortDescription, vandervoortTitle, vandervoortImageWidth);
      sections("Ozark", ozarkImages, ozarkImagesAlt, ozarkDates, ozarkDescription, ozarkTitle, ozarkImageWidth);
      sections("Henderson State University", hendersonImages, hendersonImagesAlt, hendersonDates, hendersonDescription, hendersonTitle, hendersonImageWidth);
      sections("Other Parts of Arkansas", arkansasImages, arkansasImageAlt, arkansasDates, arkansasDescription, arkansasTitle, arkansasImageWidth);
    }
  }
  
  function yearSelected() {
    var y = document.getElementById("year-selector").value; 
    if(y =="2012") 
    {
      var vandervoortYear =  yearCollections(y, "Vandervoort", vandervoortImages, vandervoortImagesAlt, vandervoortDates, vandervoortDescription, vandervoortTitle, vandervoortImageWidth);
      var ozarkYear =  yearCollections(y, "Ozark", ozarkImages, ozarkImagesAlt, ozarkDates, ozarkDescription, ozarkTitle, ozarkImageWidth);
      var hendersonYear = yearCollections(y, "Henderson State University", hendersonImages, hendersonImagesAlt, hendersonDates, hendersonDescription, hendersonTitle, hendersonImageWidth);
      var arkansasYear = yearCollections(y, "Other Parts of Arkansas", arkansasImages, arkansasImageAlt, arkansasDates, arkansasDescription, arkansasTitle, arkansasImageWidth);
  
      const yearVImages = vandervoortYear[1];
      const yearVImageAlt = vandervoortYear[2];
      const yearVDates = vandervoortYear[3];
      const yearVDescription = vandervoortYear[4];
      const yearVTitle = vandervoortYear[5];
      const yearVImageWidth = vandervoortYear[6];
  
      yearVImages.push(...ozarkYear[1]);
      yearVImageAlt.push(...ozarkYear[2]);
      yearVDates.push(...ozarkYear[3]);
      yearVDescription.push(...ozarkYear[4]);
      yearVTitle.push(...ozarkYear[5]);
      yearVImageWidth.push(...ozarkYear[6]);
    
      yearVImages.push(...hendersonYear[1]);
      yearVImageAlt.push(...hendersonYear[2]);
      yearVDates.push(...hendersonYear[3]);
      yearVDescription.push(...hendersonYear[4]);
      yearVTitle.push(...hendersonYear[5]);
      yearVImageWidth.push(...hendersonYear[6]);
  
      yearVImages.push(...arkansasYear[1]);
      yearVImageAlt.push(...arkansasYear[2]);
      yearVDates.push(...arkansasYear[3]);
      yearVDescription.push(...arkansasYear[4]);
      yearVTitle.push(...arkansasYear[5]);
      yearVImageWidth.push(...arkansasYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }  
     sections("Vandervoort", yearVImages, yearVImageAlt, yearVDates, yearVDescription, yearVTitle, yearVImageWidth); 
    }
    else if(y == "2015") 
    {
      var vandervoortYear =  yearCollections(y, "Vandervoort", vandervoortImages, vandervoortImagesAlt, vandervoortDates, vandervoortDescription, vandervoortTitle, vandervoortImageWidth);
      var ozarkYear =  yearCollections(y, "Ozark", ozarkImages, ozarkImagesAlt, ozarkDates, ozarkDescription, ozarkTitle, ozarkImageWidth);
      var hendersonYear = yearCollections(y, "Henderson State University", hendersonImages, hendersonImagesAlt, hendersonDates, hendersonDescription, hendersonTitle, hendersonImageWidth);
      var arkansasYear = yearCollections(y, "Other Parts of Arkansas", arkansasImages, arkansasImageAlt, arkansasDates, arkansasDescription, arkansasTitle, arkansasImageWidth);
  
      const yearVImages = vandervoortYear[1];
      const yearVImageAlt = vandervoortYear[2];
      const yearVDates = vandervoortYear[3];
      const yearVDescription = vandervoortYear[4];
      const yearVTitle = vandervoortYear[5];
      const yearVImageWidth = vandervoortYear[6];
  
      yearVImages.push(...ozarkYear[1]);
      yearVImageAlt.push(...ozarkYear[2]);
      yearVDates.push(...ozarkYear[3]);
      yearVDescription.push(...ozarkYear[4]);
      yearVTitle.push(...ozarkYear[5]);
      yearVImageWidth.push(...ozarkYear[6]);
    
      yearVImages.push(...hendersonYear[1]);
      yearVImageAlt.push(...hendersonYear[2]);
      yearVDates.push(...hendersonYear[3]);
      yearVDescription.push(...hendersonYear[4]);
      yearVTitle.push(...hendersonYear[5]);
      yearVImageWidth.push(...hendersonYear[6]);
  
      yearVImages.push(...arkansasYear[1]);
      yearVImageAlt.push(...arkansasYear[2]);
      yearVDates.push(...arkansasYear[3]);
      yearVDescription.push(...arkansasYear[4]);
      yearVTitle.push(...arkansasYear[5]);
      yearVImageWidth.push(...arkansasYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      yearSections(yearVImages, yearVImageAlt, yearVDates, yearVDescription, yearVTitle, yearVImageWidth); 
    }
    else if(y == "2016") 
    {
      var vandervoortYear =  yearCollections(y, "Vandervoort", vandervoortImages, vandervoortImagesAlt, vandervoortDates, vandervoortDescription, vandervoortTitle, vandervoortImageWidth);
      var ozarkYear =  yearCollections(y, "Ozark", ozarkImages, ozarkImagesAlt, ozarkDates, ozarkDescription, ozarkTitle, ozarkImageWidth);
      var hendersonYear = yearCollections(y, "Henderson State University", hendersonImages, hendersonImagesAlt, hendersonDates, hendersonDescription, hendersonTitle, hendersonImageWidth);
      var arkansasYear = yearCollections(y, "Other Parts of Arkansas", arkansasImages, arkansasImageAlt, arkansasDates, arkansasDescription, arkansasTitle, arkansasImageWidth);
  
      const yearVImages = vandervoortYear[1];
      const yearVImageAlt = vandervoortYear[2];
      const yearVDates = vandervoortYear[3];
      const yearVDescription = vandervoortYear[4];
      const yearVTitle = vandervoortYear[5];
      const yearVImageWidth = vandervoortYear[6];
  
      yearVImages.push(...ozarkYear[1]);
      yearVImageAlt.push(...ozarkYear[2]);
      yearVDates.push(...ozarkYear[3]);
      yearVDescription.push(...ozarkYear[4]);
      yearVTitle.push(...ozarkYear[5]);
      yearVImageWidth.push(...ozarkYear[6]);
    
      yearVImages.push(...hendersonYear[1]);
      yearVImageAlt.push(...hendersonYear[2]);
      yearVDates.push(...hendersonYear[3]);
      yearVDescription.push(...hendersonYear[4]);
      yearVTitle.push(...hendersonYear[5]);
      yearVImageWidth.push(...hendersonYear[6]);
  
      yearVImages.push(...arkansasYear[1]);
      yearVImageAlt.push(...arkansasYear[2]);
      yearVDates.push(...arkansasYear[3]);
      yearVDescription.push(...arkansasYear[4]);
      yearVTitle.push(...arkansasYear[5]);
      yearVImageWidth.push(...arkansasYear[6]);
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      yearSections(yearVImages, yearVImageAlt, yearVDates, yearVDescription, yearVTitle, yearVImageWidth); 
    }
    else if(y == "2017") 
    {
      var vandervoortYear =  yearCollections(y, "Vandervoort", vandervoortImages, vandervoortImagesAlt, vandervoortDates, vandervoortDescription, vandervoortTitle, vandervoortImageWidth);
      var ozarkYear =  yearCollections(y, "Ozark", ozarkImages, ozarkImagesAlt, ozarkDates, ozarkDescription, ozarkTitle, ozarkImageWidth);
      var hendersonYear = yearCollections(y, "Henderson State University", hendersonImages, hendersonImagesAlt, hendersonDates, hendersonDescription, hendersonTitle, hendersonImageWidth);
      var arkansasYear = yearCollections(y, "Other Parts of Arkansas", arkansasImages, arkansasImageAlt, arkansasDates, arkansasDescription, arkansasTitle, arkansasImageWidth);
  
      const yearVImages = vandervoortYear[1];
      const yearVImageAlt = vandervoortYear[2];
      const yearVDates = vandervoortYear[3];
      const yearVDescription = vandervoortYear[4];
      const yearVTitle = vandervoortYear[5];
      const yearVImageWidth = vandervoortYear[6];
  
      yearVImages.push(...ozarkYear[1]);
      yearVImageAlt.push(...ozarkYear[2]);
      yearVDates.push(...ozarkYear[3]);
      yearVDescription.push(...ozarkYear[4]);
      yearVTitle.push(...ozarkYear[5]);
      yearVImageWidth.push(...ozarkYear[6]);
    
      yearVImages.push(...hendersonYear[1]);
      yearVImageAlt.push(...hendersonYear[2]);
      yearVDates.push(...hendersonYear[3]);
      yearVDescription.push(...hendersonYear[4]);
      yearVTitle.push(...hendersonYear[5]);
      yearVImageWidth.push(...hendersonYear[6]);
  
      yearVImages.push(...arkansasYear[1]);
      yearVImageAlt.push(...arkansasYear[2]);
      yearVDates.push(...arkansasYear[3]);
      yearVDescription.push(...arkansasYear[4]);
      yearVTitle.push(...arkansasYear[5]);
      yearVImageWidth.push(...arkansasYear[6]);
    
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
  
      yearSections(yearVImages, yearVImageAlt, yearVDates, yearVDescription, yearVTitle, yearVImageWidth); 
    }
    else if(y == "2020") {
      var vandervoortYear =  yearCollections(y, "Vandervoort", vandervoortImages, vandervoortImagesAlt, vandervoortDates, vandervoortDescription, vandervoortTitle, vandervoortImageWidth);
      var ozarkYear =  yearCollections(y, "Ozark", ozarkImages, ozarkImagesAlt, ozarkDates, ozarkDescription, ozarkTitle, ozarkImageWidth);
      var hendersonYear = yearCollections(y, "Henderson State University", hendersonImages, hendersonImagesAlt, hendersonDates, hendersonDescription, hendersonTitle, hendersonImageWidth);
      var arkansasYear = yearCollections(y, "Other Parts of Arkansas", arkansasImages, arkansasImageAlt, arkansasDates, arkansasDescription, arkansasTitle, arkansasImageWidth);
  
      const yearVImages = vandervoortYear[1];
      const yearVImageAlt = vandervoortYear[2];
      const yearVDates = vandervoortYear[3];
      const yearVDescription = vandervoortYear[4];
      const yearVTitle = vandervoortYear[5];
      const yearVImageWidth = vandervoortYear[6];
  
      yearVImages.push(...ozarkYear[1]);
      yearVImageAlt.push(...ozarkYear[2]);
      yearVDates.push(...ozarkYear[3]);
      yearVDescription.push(...ozarkYear[4]);
      yearVTitle.push(...ozarkYear[5]);
      yearVImageWidth.push(...ozarkYear[6]);
    
      yearVImages.push(...hendersonYear[1]);
      yearVImageAlt.push(...hendersonYear[2]);
      yearVDates.push(...hendersonYear[3]);
      yearVDescription.push(...hendersonYear[4]);
      yearVTitle.push(...hendersonYear[5]);
      yearVImageWidth.push(...hendersonYear[6]);
  
      yearVImages.push(...arkansasYear[1]);
      yearVImageAlt.push(...arkansasYear[2]);
      yearVDates.push(...arkansasYear[3]);
      yearVDescription.push(...arkansasYear[4]);
      yearVTitle.push(...arkansasYear[5]);
      yearVImageWidth.push(...arkansasYear[6]);
      
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      yearSections(yearVImages, yearVImageAlt, yearVDates, yearVDescription, yearVTitle, yearVImageWidth); 
    }
    else if(y == "all") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Vandervoort", vandervoortImages, vandervoortImagesAlt, vandervoortDates, vandervoortDescription, vandervoortTitle, vandervoortImageWidth);
      sections("Ozark", ozarkImages, ozarkImagesAlt, ozarkDates, ozarkDescription, ozarkTitle, ozarkImageWidth);
      sections("Henderson State University", hendersonImages, hendersonImagesAlt, hendersonDates, hendersonDescription, hendersonTitle, hendersonImageWidth);
      sections("Other Parts of Arkansas", arkansasImages, arkansasImageAlt, arkansasDates, arkansasDescription, arkansasTitle, arkansasImageWidth);
    }
  }
  var area = document.getElementById("about");
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
        element_image_element.classList.add('arkansas-images', 'not-wide');
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
        element_content_element.classList.add('card', 'm-2', 'mx-sm-auto', 'wide-card');  // original is m-5
        element_div_element.appendChild(element_content_element);
        
  
        element_card_element = document.createElement("div");
        element_card_element.classList.add('card-header', 'text-center');
        element_card_element.innerHTML = title[b];
        element_content_element.appendChild(element_card_element);
  
        element_image_element = document.createElement("img");
        element_image_element.classList.add('arkansas-images', 'wide');
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
          element_image_element.classList.add('arkansas-images', 'not-wide');
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
          element_image_element.classList.add('arkansas-images', 'wide');
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
  // This block of code is when an image is clicked, it expands the image. 
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
  span.classList.add("x-small");
  span.onclick = function() { 
    modal.style.display = "none";
  }
}