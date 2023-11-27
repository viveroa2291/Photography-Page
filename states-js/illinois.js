function hide() {
    var z = document.getElementById("hide-section");
    var overview = document.getElementById("brief");
    var ar = document.getElementById("illinois");
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
var notWideImg = document.getElementsByClassName("illinois not-wide");
var wideImg = document.getElementsByClassName("illinois-images wide");
var img = document.getElementsByClassName("illinois-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);    

const chicago = new ImageSet(
  ["../states-images/illinois-images/germanfest.jpeg", "../states-images/illinois-images/spongebob.jpeg", "../states-images/illinois-images/chicago-sean.jpeg", "../states-images/illinois-images/chicago-uic.jpeg", "../states-images/illinois-images/maggie-daley-group.jpeg", "../states-images/illinois-images/maggie-daley-nikki.jpeg", "../states-images/illinois-images/german-kristlemarket.jpeg", "../states-images/illinois-images/stpatty.jpeg", "../states-images/illinois-images/trump-alex.jpeg", "../states-images/illinois-images/club-alex-sean.jpeg", "../states-images/illinois-images/lolla-chloe.jpeg", "../states-images/illinois-images/lolla-jon-dmac.jpeg", "../states-images/illinois-images/zoo-chloe.jpeg", "../states-images/illinois-images/wndr-web.jpeg", "../states-images/illinois-images/wndr-illusion.jpeg",  "../states-images/illinois-images/wndr-group.jpeg", "../states-images/illinois-images/chicago-nikki-chloe.jpeg", "../states-images/illinois-images/trump-sami.jpeg", "../states-images/illinois-images/soldier-jon.jpeg", "../states-images/illinois-images/soldier-donda.jpeg",  "../states-images/illinois-images/chicago-river.jpeg", "../states-images/illinois-images/maggie-group.jpeg", "../states-images/illinois-images/contemporary-musuem.jpeg", "../states-images/illinois-images/chicago-kenzie.jpeg", "../states-images/illinois-images/balcony-me.jpeg", "../states-images/illinois-images/rocbar-chloe.jpeg", "../states-images/illinois-images/chicago-nikki.jpeg", "../states-images/illinois-images/cover.jpeg", "../states-images/illinois-images/chicago-me.jpeg", "../states-images/illinois-images/halloween.jpeg"],
  ["This is a picture of me, Sean, and Karina at Germanfest in Chicago.", "This is a picture of Sean and I next to a Spongebob mailbox", "This is a picture of Sean and I at the Chicago water show.", "This is a picture of me in Chicago after my UIC visit.", "This is a group picture of my friends and I ice skating at Maggie Daley.", "This is a picture of Nikki and I ice skating at Maggie Daley in Chicago.", "This is a picture of my friends at the German market in Chicago.", "This is a picture of my friends and I at the St. Patricks Day parade in Chicago.", "This is a picture of my friend Alex and I in front of the Trump hotel.", "This is a picture of my friends and I outside of a club in Chicago.", "This is a picture of Chloe and I at Lollapalooza.", "This is a picture of my friends at Lollapalooza.",  "This is a picture of Chloe and I in the Christmas lights at Lincoln Park Zoo.", "This is a picture of my friends Sami and Chloe in a web at the WNDR Musuem.", "This is a picture of my friends and I in an optical illusion at the WNDR musuem.", "This is a picture of my friends and I at the WNDR musuem under a rock.", "This is a selfie of my friends Nikki and Chloe on Chloe's balcony.", "This is a picture of Sami and I by the Chicago River.", "This is a picture of my friend Jon and I at a Chicago Bears preseason game.", "This is a picture of the Donda Listening Party in Chicago.", "This is a picture of the beautiful Chicago River.", "This is a group picture of my friends and I ice skating at Maggie Daley in Chicago.", "This is a picture of me at the Chicago Contemmporary Art Musuem", "This is a picture of Kenzie and I as tourists in Chicago.", "This is a picture of me in the balcony.", "This is a picture of Chloe and I having fun at Rocbar in Chicago.", "This is a picture of Nikki and I at a ice skating rink in Chicago.", "This is a picture of Chicago from the lake", "This is a selfie of me on my friend Chloe's balcony.", "This is a halloween picture of my friends and I at a club in Chicago."],
  ["September 8, 2013", "December 15, 2013", "August 16, 2014", "September 22, 2017", "December 21, 2017", "December 21, 2017", "December 21, 2017", "March 17, 2018", "March 18, 2018", "July 1, 2018", "August 3, 2018", "August 5, 2018", "January 2, 2019", "February 1, 2019", "February 1, 2019", "February 1, 2019", "July 30, 2021", "July 30, 2021", "August 21, 2021", "August 26, 2021", "August 27, 2021", "December 30, 2021", "March 20, 2022", "March 20, 2022", "July 29, 2022", "July 31, 2022", "December 28, 2022", "September 4, 2023", "September 10, 2023", "October 28, 2023"],
  ["This is a picture of me, Sean, and Karina at Germanfest in Chicago.", "This is a picture of Sean and I next to a Spongebob mailbox", "This is a picture of Sean and I at the Chicago water show.", "This is a picture of me in Chicago after my UIC visit.", "This is a group picture of my friends and I ice skating at Maggie Daley.", "This is a picture of Nikki and I ice skating at Maggie Daley in Chicago.", "This is a picture of my friends at the German market in Chicago.", "This is a picture of my friends and I at the St. Patricks Day parade in Chicago.", "This is a picture of my friend Alex and I in front of the Trump hotel.", "This is a picture of my friends and I outside of a club in Chicago.", "This is a picture of Chloe and I at Lollapalooza.", "This is a picture of my friends at Lollapalooza.", "This is a picture of Chloe and I in the Christmas lights at Lincoln Park Zoo.", "This is a picture of my friends Sami and Chloe in a web at the WNDR Musuem.", "This is a picture of my friends and I in an optical illusion at the WNDR musuem.", "This is a picture of my friends and I at the WNDR musuem under a rock.", "This is a selfie of my friends Nikki and Chloe on Chloe's balcony.", "This is a picture of Sami and I by the Chicago River.", "This is a picture of my friend Jon and I at a Chicago Bears preseason game.", "This is a picture of the Donda Listening Party in Chicago.", "This is a picture of the beautiful Chicago River.", "This is a group picture of my friends and I ice skating at Maggie Daley in Chicago.", "This is a picture of me at the Chicago Contemmporary Art Musuem", "This is a picture of Kenzie and I as tourists in Chicago.", "This is a picture of me in the balcony.", "This is a picture of Chloe and I having fun at Rocbar in Chicago.", "This is a picture of Nikki and I at a ice skating rink in Chicago.", "This is a picture of Chicago from the lake", "This is a selfie of me on my friend Chloe's balcony.", "This is a halloween picture of my friends and I at a club in Chicago."],
  ["GermanFest", "Chicago", "Chicago Lake", "Chicago", "Maggie Daley", "Maggie Daley", "German Kindlemarket", "St. Patricks Day Parade", "Trump Building", "Chicago", "Lollapalooza", "Lollapalooza", "Lincoln Park Zoo", "WNDR Musuem", "WNDR Musuem", "WNDR Musuem", "Chloe's Balcony", "Chicago River", "Bears Game", "Soldier Field", "Chicago River", "Maggie Daley", "Chicago Contemporary Art Institute Musuem", "Chicago", "Chloe's Balcony", "Rocbar", "Chicago", "Chicago", "Chloe's Balcony", "Chicago"],
  ["not-wide", "not-wide", "mid-wide", "mid-wide", "not-wide", "not-wide", "mid-wide", "not-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "not-wide", "not-wide", "mid-wide", "not-wide", "mid-wide", "not-wide", "mid-wide", "not-wide", "mid-wide", "mid-wide", "mid-wide"] 
);
const navyPier = new ImageSet(
  ["../states-images/illinois-images/chicago-2014.jpeg", "../states-images/illinois-images/navy-pier-chloe-sami.jpeg", "../states-images/illinois-images/navy-pier-me.jpeg", "../states-images/illinois-images/navy-pier-me2.jpeg"],
  ["This is a picture of my friend Nikki from the state of Ohio and I at Navy Pier in Chicago.", "This is a picture of my friend Chloe and Sami at Navy Pier with me.", "This is a picture of me at the Navy Pier dock in Chicago.", "This is a picture of me at the Navy Pier Dock in Chicago."],
  ["June 20, 2014", "December 20, 2019", "March 20, 2022", "March 20, 2022"],
  ["This is a picture of my friend Nikki from the state of Ohio and I at Navy Pier in Chicago.", "This is a picture of my friend Chloe and Sami at Navy Pier with me.", "This is a picture of me at the Navy Pier dock in Chicago.", "This is a picture of me at the Navy Pier Dock in Chicago."],
  ["Navy Pier", "Navy Pier", "Navy Pier Dock", "Navy Pier Dock"],
  ["not-wide", "not-wide", "not-wide", "not-wide"]
);
const cubs = new ImageSet(
  ["../states-images/illinois-images/wrigley-chloe-me.jpeg", "../states-images/illinois-images/wrigley-group.jpeg"],
  ["This is a picture of Chloe and I at the cubs game.", "This is a picture of my friends and I at the Cubs baseball game."],
  ["August 8, 2021", "July 2, 2023"],
  ["This is a picture of Chloe and I at the cubs game.", "This is a picture of my friends and I at the Cubs baseball game."],
  ["Wrigley Field Stadium", "Wrigley Field Stadium"],
  ["not-wide", "mid-wide"]
);
const suburbs = new ImageSet(
  ["../states-images/illinois-images/barrington-d-j.jpeg", "../states-images/illinois-images/barrington-group.jpeg", "../states-images/illinois-images/barrington.jpeg", "../states-images/illinois-images/escaperoom-group.jpeg", "../states-images/illinois-images/escaperoom-chloe.jpeg", "../states-images/illinois-images/nicole.jpeg", "../states-images/illinois-images/mp-sean.jpeg", "../states-images/illinois-images/northwestern-sami.jpeg", "../states-images/illinois-images/fox-lake.jpeg", "../states-images/illinois-images/professional.jpeg",  "../states-images/illinois-images/bowling.jpeg"],
  ["This is a picture of my friend Jon's backyard during his graduation party.", "This is a picture of my friend Jon's graduation party.", "This is a group picture of my friends at my friend Jon's graduation party", "This is a group picture of my friends Nikki, Chloe, Sami, and I at an escape room.", "This is a picture of Chloe and I at an escape room.", "This is a picture of Nicole and I at a beach playing catch with a football.", "This is a picture of my friend Sean and I.", "This is a picture of me and Sami roller blading at Northwestern.", "This is a picture of Nikki and Sami at Fox Lake.", "This is a picture of me taking professional pictures for my linkedin.", "This is a picture of my friend Nikki, Mikayla, and I bowling at Kings in Rosemont."],
  ["June 27, 2015", "June 27, 2015", "June 27, 2015", "March 9, 2018", "March 9, 2018", "June 14, 2018", "August 9, 2018", "March 6, 2021", "May 29, 2023", "September 15, 2023", "October 7, 2023"],
  ["This is a picture of my friend Jon's backyard during his graduation party.", "This is a picture of my friend Jon's graduation party.", "This is a group picture of my friends at my friend Jon's graduation party", "This is a group picture of my friends Nikki, Chloe, Sami, and I at an escape room.", "This is a picture of Chloe and I at an escape room.", "This is a picture of Nicole and I at a beach playing catch with a football.", "This is a picture of my friend Sean and I.", "This is a picture of me and Sami roller blading at Northwestern.", "This is a picture of Nikki and Sami at Fox Lake.", "This is a picture of me taking professional pictures for my linkedin.", "This is a picture of my friend Nikki, Mikayla, and I bowling at Kings in Rosemont."],
  ["Barrington, Illinois", "Barrington, Illinois", "Barrington, Illinois", "Schaumburg, Illinois", "Schaumburg, Illinois", "Wilmette Beach, Illinois", "Mount Prospect, Illinois", "Evanston, Illinois", "Fox Lake, Illinois", "Mount Prospect, Illinois", "Rosemont, Illinois"],
  ["mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "not-wide", "mid-wide", "not-wide", "not-wide", "mid-wide", "mid-wide"] 
);
const boats = new ImageSet(
  ["../states-images/illinois-images/boat-group.jpeg", "../states-images/illinois-images/boat-sami-chloe-nikki.jpeg", "../states-images/illinois-images/boat-me2.jpeg", "../states-images/illinois-images/boat-me1.jpeg", "../states-images/illinois-images/boat-me3.jpeg", "../states-images/illinois-images/boat-group1.jpeg", "../states-images/illinois-images/boat-me.jpeg"],
  ["This is a picture of my friends and I on a Chicago boat.", "This is a group picture of my best friends on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me as a captain on a boat in the Chicago River.", "This is a group picture of my friends and I on a boat.", "This is a picture of me on a boat in Chicago."],
  ["July 3, 2023", "September 4, 2023", "September 4, 2023", "September 4, 2023", "September 10, 2023", "September 30, 2023", "September 30, 2023"],
  ["This is a picture of my friends and I on a Chicago boat.", "This is a group picture of my best friends on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me as a captain on a boat in the Chicago River.", "This is a group picture of my friends and I on a boat.", "This is a picture of me on a boat in Chicago."],
  ["Chicago, Illinois", "Chicago, Illinois", "Chicago, Illinois", "Chicago, Illinois", "Chicago River", "Chicago, Illinois", "Chicago, Illinois"],
  ["mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide"]
);
const wrigley = new ImageSet(
  ["../states-images/illinois-images/wrigley-chloe.jpeg", "../states-images/illinois-images/wrigley-chloe2.jpeg"],
  ["This is a picture of Chloe and I outside of Wrigley Field stadium.", "This is a picture of Chloe and I outside of Wrigley Field stadium."],
  ["August 8, 2021", "August 6, 2022"],
  ["This is a picture of Chloe and I outside of Wrigley Field stadium.", "This is a picture of Chloe and I outside of Wrigley Field stadium."],
  ["Wrigley Field Stadium", "Wrigley Field Stadium"],
  ["mid-wide", "not-wide"]
);
const starveRock = new ImageSet(
  ["../states-images/illinois-images/starve-rock-nikki.jpeg", "../states-images/illinois-images/starve-rock-nnv.jpeg", "../states-images/illinois-images/starve-rock-nkg.jpeg"],
  ["This is a picture of Nikki and I at Starve Rock.", "This is a picture of my friends at I at Starve Rock", "This is a group picture of my friends at Starve Rock."],
  ["March 31, 2018", "July 29, 2018", "July 28, 2019"],
  ["This is a picture of Nikki and I at Starve Rock.", "This is a picture of my friends at I at Starve Rock", "This is a group picture of my friends at Starve Rock."],
  ["Starve Rock", "Starve Rock", "Starve Rock"],
  ["not-wide", "not-wide", "mid-wide"]
);
const sixFlags = new ImageSet(
  ["../states-images/illinois-images/six-flags-sean-alex.jpeg", "../states-images/illinois-images/six-flags-sean.jpeg", "../states-images/illinois-images/six-flags-group.jpeg"],
  ["This is a picture of my friends at Hurricane Harbor, Six Flags water park.", "This is a picture of my friend Sean and I at Six Flags Great America's entrance.", "This is a picture of my friends from Eau Claire at Six Flags."],
  ["June 5, 2015", "August 7, 2016", "June 24, 2018"],
  ["This is a picture of my friends at Hurricane Harbor, Six Flags water park.", "This is a picture of my friend Sean and I at Six Flags Great America's entrance.", "This is a picture of my friends from Eau Claire at Six Flags."],
  ["Hurricane, Harbor", "Six Flags Great America"],
  ["not-wide", "mid-wide", "not-wide"]
);

sections("Chicago", chicago.image, chicago.imageAlt, chicago.date, chicago.description, chicago.title, chicago.imageWidth);
sections("Navy Pier", navyPier.image, navyPier.imageAlt, navyPier.date, navyPier.description, navyPier.title, navyPier.imageWidth);
sections("Chicago Cubs", cubs.image, cubs.imageAlt, cubs.date, cubs.description, cubs.title, cubs.imageWidth);
sections("Suburbs", suburbs.image, suburbs.imageAlt, suburbs.date, suburbs.description, suburbs.title, suburbs.imageWidth);
sections("Chicago Boats", boats.image, boats.imageAlt, boats.date, boats.description, boats.title, boats.imageWidth); 
sections("Wrigleyfield", wrigley.image, wrigley.imageAlt, wrigley.date, wrigley.description, wrigley.title, wrigley.imageWidth);
sections("Starved Rock", starveRock.image, starveRock.imageAlt, starveRock.date, starveRock.description, starveRock.title, starveRock.imageWidth);
sections("Six Flags Great America", sixFlags.image, sixFlags.imageAlt, sixFlags.date, sixFlags.description, sixFlags.title, sixFlags.imageWidth);

imagesView(chicago.image, imagediv);
imagesView(navyPier.image, imagediv);
imagesView(cubs.image, imagediv);
imagesView(suburbs.image, imagediv);
imagesView(boats.image, imagediv);
imagesView(wrigley.image, imagediv);
imagesView(starveRock.image, imagediv);
imagesView(sixFlags.image, imagediv);

var imageList = [];
var descriptionList = [];

for(var a = 0; a < chicago.image.length; a++) {
  imageList.push(chicago.image[a]);
  descriptionList.push(chicago.description[a]);
}
for(var b = 0; b < navyPier.image.length; b++) {
  imageList.push(navyPier.image[b]);
  descriptionList.push(navyPier.description[b]);
}
for(var c = 0; c < cubs.image.length; c++) {
  imageList.push(cubs.image[c]);
  descriptionList.push(cubs.description[c]);
}
for(var d = 0; d < suburbs.image.length; d++) {
  imageList.push(suburbs.image[d]);
  descriptionList.push(suburbs.description[d]);
}
for(var e = 0; e < boats.image.length; e++) {
  imageList.push(boats.image[e]);
  descriptionList.push(boats.description[e]);
}
for(var f = 0; f < wrigley.image.length; f++) {
  imageList.push(wrigley.image[f]);
  descriptionList.push(wrigley.description[f]);
}
for(var g = 0; g < starveRock.image.length; g++) {
  imageList.push(starveRock.image[g]);
  descriptionList.push(starveRock.description[g]);
}
for(var h = 0; h < sixFlags.image.length; h++) {
  imageList.push(sixFlags.image[h]);
  descriptionList.push(sixFlags.description[h]);
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
        if(imageWidth[b] === "not-wide") {
          var element_content_element = document.createElement("div");
          element_content_element.classList.add('card', 'm-5', 'mx-sm-auto', 'not-wide-card');
          element_div_element.appendChild(element_content_element);
          
    
          element_card_element = document.createElement("div");
          element_card_element.classList.add('card-header', 'text-center');
          element_card_element.innerHTML = title[b];
          element_content_element.appendChild(element_card_element);
    
          element_image_element = document.createElement("img");
          element_image_element.classList.add('illinois-images', 'not-wide');
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
        if(imageWidth[b] === "mid-wide") {
          var element_content_element = document.createElement("div");
          element_content_element.classList.add('card', 'm-2', 'mx-sm-auto', 'mid-wide-card');  // original is m-5
          element_div_element.appendChild(element_content_element);
          
    
          element_card_element = document.createElement("div");
          element_card_element.classList.add('card-header', 'text-center');
          element_card_element.innerHTML = title[b];
          element_content_element.appendChild(element_card_element);
    
          element_image_element = document.createElement("img");
          element_image_element.classList.add('illinois-images', 'mid-wide');
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
          
          if((imageWidth[b+1] === "mid-wide" || imageWidth[b+1] === "wide") && count > 1.0) 
          {
            count = count + 4.0;
          }
          else {
            count = count + 2.0;
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
          element_image_element.classList.add('illinois-images', 'wide');
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
          if((imageWidth[b+1] === "mid-wide" || imageWidth[b+1] === "wide") && count >= 4.5) 
          {
            count = count + 4.0;
          }
          else {
            count = count + 2.0;
          }
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
