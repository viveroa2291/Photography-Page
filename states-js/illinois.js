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

const chicagoImages = ["../states-images/illinois-images/germanfest.jpeg", "../states-images/illinois-images/spongebob.jpeg",  "../states-images/illinois-images/chicago-sean.jpeg", "../states-images/illinois-images/chicago-uic.jpeg", "../states-images/illinois-images/maggie-daley-group.jpeg", "../states-images/illinois-images/maggie-daley-nikki.jpeg", "../states-images/illinois-images/german-kristlemarket.jpeg", "../states-images/illinois-images/stpatty.jpeg", "../states-images/illinois-images/trump-alex.jpeg", "../states-images/illinois-images/club-alex-sean.jpeg", "../states-images/illinois-images/lolla-chloe.jpeg", "../states-images/illinois-images/lolla-jon-dmac.jpeg", "../states-images/illinois-images/zoo-chloe.jpeg", "../states-images/illinois-images/wndr-web.jpeg", "../states-images/illinois-images/wndr-illusion.jpeg",  "../states-images/illinois-images/wndr-group.jpeg", "../states-images/illinois-images/chicago-nikki-chloe.jpeg", "../states-images/illinois-images/trump-sami.jpeg", "../states-images/illinois-images/soldier-jon.jpeg", "../states-images/illinois-images/soldier-donda.jpeg",  "../states-images/illinois-images/chicago-river.jpeg", "../states-images/illinois-images/maggie-group.jpeg", "../states-images/illinois-images/contemporary-musuem.jpeg", "../states-images/illinois-images/chicago-kenzie.jpeg", "../states-images/illinois-images/balcony-me.jpeg", "../states-images/illinois-images/rocbar-chloe.jpeg", "../states-images/illinois-images/chicago-nikki.jpeg", "../states-images/illinois-images/cover.jpeg", "../states-images/illinois-images/chicago-me.jpeg", "../states-images/illinois-images/halloween.jpeg"];
const chicagoImagesAlt = ["This is a picture of me, Sean, and Karina at Germanfest in Chicago.", "This is a picture of Sean and I next to a Spongebob mailbox", "This is a picture of Sean and I at the Chicago water show.", "This is a picture of me in Chicago after my UIC visit.", "This is a group picture of my friends and I ice skating at Maggie Daley.", "This is a picture of Nikki and I ice skating at Maggie Daley in Chicago.", "This is a picture of my friends at the German market in Chicago.", "This is a picture of my friends and I at the St. Patricks Day parade in Chicago.", "This is a picture of my friend Alex and I in front of the Trump hotel.", "This is a picture of my friends and I outside of a club in Chicago.", "This is a picture of Chloe and I at Lollapalooza.", "This is a picture of my friends at Lollapalooza.",  "This is a picture of Chloe and I in the Christmas lights at Lincoln Park Zoo.", "This is a picture of my friends Sami and Chloe in a web at the WNDR Musuem.", "This is a picture of my friends and I in an optical illusion at the WNDR musuem.", "This is a picture of my friends and I at the WNDR musuem under a rock.", "This is a selfie of my friends Nikki and Chloe on Chloe's balcony.", "This is a picture of Sami and I by the Chicago River.", "This is a picture of my friend Jon and I at a Chicago Bears preseason game.", "This is a picture of the Donda Listening Party in Chicago.", "This is a picture of the beautiful Chicago River.", "This is a group picture of my friends and I ice skating at Maggie Daley in Chicago.", "This is a picture of me at the Chicago Contemmporary Art Musuem", "This is a picture of Kenzie and I as tourists in Chicago.", "This is a picture of me in the balcony.", "This is a picture of Chloe and I having fun at Rocbar in Chicago.", "This is a picture of Nikki and I at a ice skating rink in Chicago.", "This is a picture of Chicago from the lake", "This is a selfie of me on my friend Chloe's balcony.", "This is a halloween picture of my friends and I at a club in Chicago."];
const chicagoDates = ["September 8, 2013", "December 15, 2013", "August 16, 2014", "September 22, 2017", "December 21, 2017", "December 21, 2017", "December 21, 2017", "March 17, 2018", "March 18, 2018", "July 1, 2018", "August 3, 2018", "August 5, 2018", "January 2, 2019", "February 1, 2019", "February 1, 2019", "February 1, 2019", "July 30, 2021", "July 30, 2021", "August 21, 2021", "August 26, 2021", "August 27, 2021", "December 30, 2021", "March 20, 2022", "March 20, 2022", "July 29, 2022", "July 31, 2022", "December 28, 2022", "September 4, 2023", "September 10, 2023", "October 28, 2023"];
const chicagoDescription = ["This is a picture of me, Sean, and Karina at Germanfest in Chicago.", "This is a picture of Sean and I next to a Spongebob mailbox", "This is a picture of Sean and I at the Chicago water show.", "This is a picture of me in Chicago after my UIC visit.", "This is a group picture of my friends and I ice skating at Maggie Daley.", "This is a picture of Nikki and I ice skating at Maggie Daley in Chicago.", "This is a picture of my friends at the German market in Chicago.", "This is a picture of my friends and I at the St. Patricks Day parade in Chicago.", "This is a picture of my friend Alex and I in front of the Trump hotel.", "This is a picture of my friends and I outside of a club in Chicago.", "This is a picture of Chloe and I at Lollapalooza.", "This is a picture of my friends at Lollapalooza.", "This is a picture of Chloe and I in the Christmas lights at Lincoln Park Zoo.", "This is a picture of my friends Sami and Chloe in a web at the WNDR Musuem.", "This is a picture of my friends and I in an optical illusion at the WNDR musuem.", "This is a picture of my friends and I at the WNDR musuem under a rock.", "This is a selfie of my friends Nikki and Chloe on Chloe's balcony.", "This is a picture of Sami and I by the Chicago River.", "This is a picture of my friend Jon and I at a Chicago Bears preseason game.", "This is a picture of the Donda Listening Party in Chicago.", "This is a picture of the beautiful Chicago River.", "This is a group picture of my friends and I ice skating at Maggie Daley in Chicago.", "This is a picture of me at the Chicago Contemmporary Art Musuem", "This is a picture of Kenzie and I as tourists in Chicago.", "This is a picture of me in the balcony.", "This is a picture of Chloe and I having fun at Rocbar in Chicago.", "This is a picture of Nikki and I at a ice skating rink in Chicago.", "This is a picture of Chicago from the lake", "This is a selfie of me on my friend Chloe's balcony.", "This is a halloween picture of my friends and I at a club in Chicago."];
const chicagoTitle = ["GermanFest", "Chicago", "Chicago Lake", "Chicago", "Maggie Daley", "Maggie Daley", "German Kindlemarket", "St. Patricks Day Parade", "Trump Building", "Chicago", "Lollapalooza", "Lollapalooza", "Lincoln Park Zoo", "WNDR Musuem", "WNDR Musuem", "WNDR Musuem", "Chloe's Balcony", "Chicago River", "Bears Game", "Soldier Field", "Chicago River", "Maggie Daley", "Chicago Contemporary Art Institute Musuem", "Chicago", "Chloe's Balcony", "Rocbar", "Chicago", "Chicago", "Chloe's Balcony", "Chicago"];
const chicagoImageWidth = ["not-wide", "not-wide", "mid-wide", "mid-wide", "not-wide", "not-wide", "mid-wide", "not-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "not-wide", "not-wide", "mid-wide", "not-wide", "mid-wide", "not-wide", "mid-wide", "not-wide", "mid-wide", "mid-wide", "mid-wide"];

const navyImages = ["../states-images/illinois-images/chicago-2014.jpeg", "../states-images/illinois-images/navy-pier-chloe-sami.jpeg", "../states-images/illinois-images/navy-pier-me.jpeg", "../states-images/illinois-images/navy-pier-me2.jpeg"];
const navyImagesAlt = ["This is a picture of my friend Nikki from the state of Ohio and I at Navy Pier in Chicago.", "This is a picture of my friend Chloe and Sami at Navy Pier with me.", "This is a picture of me at the Navy Pier dock in Chicago.", "This is a picture of me at the Navy Pier Dock in Chicago."];
const navyDates = ["June 20, 2014", "December 20, 2019", "March 20, 2022", "March 20, 2022"];
const navyDescription = ["This is a picture of my friend Nikki from the state of Ohio and I at Navy Pier in Chicago.", "This is a picture of my friend Chloe and Sami at Navy Pier with me.", "This is a picture of me at the Navy Pier dock in Chicago.", "This is a picture of me at the Navy Pier Dock in Chicago."];
const navyTitle = ["Navy Pier", "Navy Pier", "Navy Pier Dock", "Navy Pier Dock"];
const navyImageWidth = ["not-wide", "not-wide", "not-wide", "not-wide"];

const cubsImages = ["../states-images/illinois-images/wrigley-chloe-me.jpeg", "../states-images/illinois-images/wrigley-group.jpeg"];
const cubsImagesAlt = ["This is a picture of Chloe and I at the cubs game.", "This is a picture of my friends and I at the Cubs baseball game."];
const cubsDates = ["August 8, 2021", "July 2, 2023"];
const cubsDescription = ["This is a picture of Chloe and I at the cubs game.", "This is a picture of my friends and I at the Cubs baseball game."];
const cubsTitle = ["Wrigley Field Stadium", "Wrigley Field Stadium"];
const cubsImageWidth = ["not-wide", "mid-wide"];

const suburbsImages = ["../states-images/illinois-images/barrington-d-j.jpeg", "../states-images/illinois-images/barrington-group.jpeg", "../states-images/illinois-images/barrington.jpeg", "../states-images/illinois-images/escaperoom-group.jpeg", "../states-images/illinois-images/nicole.jpeg", "../states-images/illinois-images/mp-sean.jpeg", "../states-images/illinois-images/escaperoom-chloe.jpeg", "../states-images/illinois-images/northwestern-sami.jpeg", "../states-images/illinois-images/fox-lake.jpeg", "../states-images/illinois-images/professional.jpeg",  "../states-images/illinois-images/bowling.jpeg"];
const suburbsImagesAlt = ["This is a picture of my friend Jon's backyard during his graduation party.", "This is a picture of my friend Jon's graduation party.", "This is a group picture of my friends at my friend Jon's graduation party", "This is a group picture of my friends Nikki, Chloe, Sami, and I at an escape room.", "This is a picture of Chloe and I at an escape room.", "This is a picture of Nicole and I at a beach playing catch with a football.", "This is a picture of my friend Sean and I.", "This is a picture of me and Sami roller blading at Northwestern.", "This is a picture of Nikki and Sami at Fox Lake.", "This is a picture of me taking professional pictures for my linkedin.", "This is a picture of my friend Nikki, Mikayla, and I bowling at Kings in Rosemont."];
const suburbsDates = ["June 27, 2015", "June 27, 2015", "June 27, 2015", "March 9, 2018", "March 9, 2018", "June 14, 2018", "August 9, 2018", "March 6, 2021", "May 29, 2023", "September 15, 2023", "October 7, 2023"];
const suburbsDescription = ["This is a picture of my friend Jon's backyard during his graduation party.", "This is a picture of my friend Jon's graduation party.", "This is a group picture of my friends at my friend Jon's graduation party", "This is a group picture of my friends Nikki, Chloe, Sami, and I at an escape room.", "This is a picture of Chloe and I at an escape room.", "This is a picture of Nicole and I at a beach playing catch with a football.", "This is a picture of my friend Sean and I.", "This is a picture of me and Sami roller blading at Northwestern.", "This is a picture of Nikki and Sami at Fox Lake.", "This is a picture of me taking professional pictures for my linkedin.", "This is a picture of my friend Nikki, Mikayla, and I bowling at Kings in Rosemont."];
const suburbsTitle = ["Barrington, Illinois", "Barrington, Illinois", "Barrington, Illinois", "Schaumburg, Illinois", "Schaumburg, Illinois", "Wilmette Beach, Illinois", "Mount Prospect, Illinois", "Evanston, Illinois", "Fox Lake, Illinois", "Mount Prospect, Illinois", "Rosemont, Illinois"];
const suburbsImageWidth = ["mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "not-wide", "mid-wide", "not-wide", "not-wide", "mid-wide", "mid-wide"]; 

const boatsImages = ["../states-images/illinois-images/boat-group.jpeg", "../states-images/illinois-images/boat-sami-chloe-nikki.jpeg", "../states-images/illinois-images/boat-me2.jpeg", "../states-images/illinois-images/boat-me1.jpeg", "../states-images/illinois-images/boat-me3.jpeg", "../states-images/illinois-images/boat-group1.jpeg", "../states-images/illinois-images/boat-me.jpeg"];
const boatsImagesAlt = ["This is a picture of my friends and I on a Chicago boat.", "This is a group picture of my best friends on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me as a captain on a boat in the Chicago River.", "This is a group picture of my friends and I on a boat.", "This is a picture of me on a boat in Chicago."];
const boatsDates = ["July 3, 2023", "September 4, 2023", "September 4, 2023", "September 4, 2023", "September 10, 2023", "September 30, 2023", "September 30, 2023"];
const boatsDescription = ["This is a picture of my friends and I on a Chicago boat.", "This is a group picture of my best friends on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me on a boat in Chicago.", "This is a picture of me as a captain on a boat in the Chicago River.", "This is a group picture of my friends and I on a boat.", "This is a picture of me on a boat in Chicago."];
const boatsTitle = ["Chicago, Illinois", "Chicago, Illinois", "Chicago, Illinois", "Chicago, Illinois", "Chicago River", "Chicago, Illinois", "Chicago, Illinois"];
const boatsImageWidth = ["mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide"];

const wrigleyImages = ["../states-images/illinois-images/wrigley-chloe.jpeg", "../states-images/illinois-images/wrigley-chloe2.jpeg"];
const wrigleyImagesAlt = ["This is a picture of Chloe and I outside of Wrigley Field stadium.", "This is a picture of Chloe and I outside of Wrigley Field stadium."];
const wrigleyDates = ["August 8, 2021", "August 6, 2022"];
const wrigleyDescription = ["This is a picture of Chloe and I outside of Wrigley Field stadium.", "This is a picture of Chloe and I outside of Wrigley Field stadium."];
const wrigleyTitle = ["Wrigley Field Stadium", "Wrigley Field Stadium"];
const wrigleyImageWidth = ["mid-wide", "not-wide"];

const starveImages = ["../states-images/illinois-images/starve-rock-nikki.jpeg", "../states-images/illinois-images/starve-rock-nnv.jpeg", "../states-images/illinois-images/starve-rock-nkg.jpeg"];
const starveImagesAlt = ["This is a picture of Nikki and I at Starve Rock.", "This is a picture of my friends at I at Starve Rock", "This is a group picture of my friends at Starve Rock."];
const starveDates = ["March 31, 2018", "July 29, 2018", "July 28, 2019"];
const starveDescription = ["This is a picture of Nikki and I at Starve Rock.", "This is a picture of my friends at I at Starve Rock", "This is a group picture of my friends at Starve Rock."];
const starveTitle = ["Starve Rock", "Starve Rock", "Starve Rock"];
const starveImageWidth = ["not-wide", "not-wide", "mid-wide"];

const sixflagsImages = ["../states-images/illinois-images/six-flags-sean-alex.jpeg", "../states-images/illinois-images/six-flags-sean.jpeg", "../states-images/illinois-images/six-flags-group.jpeg"];
const sixflagsImagesAlt = ["This is a picture of my friends at Hurricane Harbor, Six Flags water park.", "This is a picture of my friend Sean and I at Six Flags Great America's entrance.", "This is a picture of my friends from Eau Claire at Six Flags."];
const sixflagsDates = ["June 5, 2015", "August 7, 2016", "June 24, 2018"];
const sixflagsDescription = ["This is a picture of my friends at Hurricane Harbor, Six Flags water park.", "This is a picture of my friend Sean and I at Six Flags Great America's entrance.", "This is a picture of my friends from Eau Claire at Six Flags."];
const sixflagsTitle = ["Hurricane, Harbor", "Six Flags Great America"];
const sixflagsImageWidth = ["not-wide", "mid-wide", "not-wide"];

sections("Chicago", chicagoImages, chicagoImagesAlt, chicagoDates, chicagoDescription, chicagoTitle, chicagoImageWidth); 
sections("Navy Pier", navyImages, navyImagesAlt, navyDates, navyDescription, navyTitle, navyImageWidth);
sections("Chicago Cubs", cubsImages, cubsImagesAlt, cubsDates, cubsDescription, cubsTitle, cubsImageWidth);
sections("Suburbs", suburbsImages, suburbsImagesAlt, suburbsDates, suburbsDescription, suburbsTitle, suburbsImageWidth);
sections("Chicago Boats", boatsImages, boatsImagesAlt, boatsDates, boatsDescription, boatsTitle, boatsImageWidth); 
sections("Wrigleyfield", wrigleyImages, wrigleyImagesAlt, wrigleyDates, wrigleyDescription, wrigleyTitle, wrigleyImageWidth);
sections("Starved Rock", starveImages, starveImagesAlt, starveDates, starveDescription, starveTitle, starveImageWidth);
sections("Six Flags Great America", sixflagsImages, sixflagsImagesAlt, sixflagsDates, sixflagsDescription, sixflagsTitle, sixflagsImageWidth);

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);    

    function images() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    for(var a = 0; a < chicagoImages.length; a++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = chicagoImages[a];
        console.log(chicagoImages[a]);
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var i = 0; i < navyImages.length; i++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = navyImages[i];
        console.log(navyImages[i]);
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var b = 0; b <  cubsImages.length; b++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = cubsImages[b];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var c = 0; c < suburbsImages.length; c++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = suburbsImages[c];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var d = 0; d < boatsImages.length; d++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = boatsImages[d];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var e = 0; e < wrigleyImages.length; e++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = wrigleyImages[e];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
    }
    for(var f = 0; f < starveImages.length; f++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = starveImages[f];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images;  
    }
    for(var h = 0; h < sixflagsImages.length; h++) {
        var viewImages = document.createElement("img");
        viewImages.classList.add('view-images');
        viewImages.src = sixflagsImages[h];
        imagediv.appendChild(viewImages);
        viewImages.onclick = images; 
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
      function images() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      }
      for(var i = 0; i < img.length; i++)
        { 
            img[i].onclick = images;
        }
        /*
      for(var j = 0; j < img.length; j++)
      {
          boxImage[j].onclick = images;
      }
      */
      var span = document.getElementsByClassName("close")[0];
      
      span.onclick = function() { 
        modal.style.display = "none";
      }
    }