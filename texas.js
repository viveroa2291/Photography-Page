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
  var img = document.getElementsByClassName("texas-images");
  var boxImage = document.getElementsByClassName("box-image");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

  /**
   * Hotel Lists
   */
const hotelImage = ["states-images/texas-images/texas.jpeg", "states-images/texas-images/hotel3.jpeg", "states-images/texas-images/hotel2.jpeg", "states-images/texas-images/hotel4.jpeg", "states-images/texas-images/hotel.jpeg"];
const hotelImageAlt = ["This is a picture of me sitting on a fence during our walk to walmart in the suburbs of San Antonio Texas. We were walking in a neighborhood with nice homes and golf courses.",
"This is an image of the pool of my hotel.", 
"This is a picture of me in my swimsuit on a photoshoot outside my hotel.",                  
"This is an image of me standing outside my hotel holding two dorsal fins from an orca.",
"This is a picture of me outside my hotel room enjoying the landscaping outside."];
const hotelDates = ["June 28, 2017", "June 28, 2017", "June 28, 2017", "June 29, 2017", "June 28, 2017"];
const hotelDescription = ["This is a picture of me sitting on a fence during our walk <br> to walmart in the suburbs of San Antonio Texas. We were <br> walking in a neighborhood with nice homes and golf courses.",
"This is an image of the pool of my hotel.",
"This is a picture of me in my swimsuit <br> on a photoshoot outside my hotel.",
"This is an image of me standing outside <br> my hotel holding two dorsal fins from <br> an orca.",
"This is a picture of me outside my hotel <br> room enjoying the landscaping outside."];
const hotelTitle = ["San Antonio suburb", "Hotel Pool", "Hotel", "Hotel", "Hotel"];
const hotelImageWidth = ["wide", "ultra-wide", "not-wide", "not-wide", "not-wide"];

sections("Hotel", hotelImage, hotelImageAlt, hotelDates, hotelDescription, hotelTitle, hotelImageWidth);
/**
 * SeaWorld Lists 
 */
const seaworldImage = ["states-images/texas-images/seaworld3.jpeg", "states-images/texas-images/great-white.jpeg", "states-images/texas-images/seaworld2.jpeg", "states-images/texas-images/seaworld-park.jpeg", "states-images/texas-images/seaworld.jpeg", "states-images/texas-images/snake.jpeg", "states-images/texas-images/seaworld-park2.jpeg", "states-images/texas-images/orca.jpeg", "states-images/texas-images/orca-selfie.jpeg"];
const seaworldImageAlt = ["This is a picture of me of my first visit at Seaworld in Texas.",
"This is a picture of me standing in front of the Great White Roller Coaster.",
"This is a picture standing at the entrance of Seaworld's park holding a map.",
"This is a picture of the park in Seaworld San Antonio. It is a view from the food court.",
"This is a picture of me standing in front of the SeaWorld sign in San Antonio.",
"This is a picture of me petting a snake at the Seaworld park.",
"This is a picture of me standing at the SeaWorld park.",
"This is a picture of an orca at the SeaWorld San Antonio park. They were performing a show for us.",
"This is a selfie of me with the orca and their trainer at Shamu Stadium."];
const seaworldDates = ["June 29, 2017", "June 29, 2017", "July 1, 2017", "June 29, 2017", "July 3, 2017", "July 2, 2017", "July 1, 2017", "July 3, 2017", "July 3, 2017"];
const seaworldDescription = ["This is a picture of me of my <br> first visit at Seaworld in Texas.",
"This is a picture of me standing in <br> front of the Great White Roller Coaster.",
"This is a picture standing at the <br> entrance of Seaworld's park holding a map.",
"This is a picture of the park in Seaworld San Antonio. It is a view from the food court.",
"This is a picture of me standing in front of the SeaWorld sign in San Antonio.",
"This is a picture of me petting a snake at the Seaworld park.",
"This is a picture of me standing at <br> the SeaWorld park.",
"This is a picture of an orca at the <br> SeaWorld San Antonio park. They <br> were performing a show for us.",
"This is a selfie of me with the orca <br> and their trainer at Shamu Stadium."];
const seaworldTitle = ["Seaworld", "The Great White Roller Coaster", "Seaworld", "Seaworld Park", "Seaworld", "Seaworld", "Seaworld", "Shamu Stadium", "Shamu Stadium"];
const seaworldImageWidth = ["not-wide", "not-wide", "not-wide", "ultra-wide", "wide", "wide", "not-wide", "not-wide", "not-wide"];

sections("Seaworld", seaworldImage, seaworldImageAlt, seaworldDates, seaworldDescription, seaworldTitle, seaworldImageWidth);
/**
 * Discovery Cove Lists 
 */
const discoveryImage = ["states-images/texas-images/turtoise.jpeg", "states-images/texas-images/discovery-cove2.jpeg", "states-images/texas-images/dolphin.jpeg", "states-images/texas-images/discovery-cove.jpeg", "states-images/texas-images/dolphin2.jpeg"];
const discoveryImageAlt = ["This is a picture of two turtoises at SeaWorld's San Antonio park Discovery Cove. They were pretty large and I thought they were turtles at first.",
"This is a picture of me in Discovery Cove. I really enjoyed the park.", 
"This is a selfie of me posing in front of a dolphin.",
"This is a picture of me in Discovery Cove posing in front of the landscaping",
"This is a picture of a dolphin in Discovery Cove."];
const discoveryDates = ["July 1, 2017", "July 1, 2017", "July 3, 2017", "July 1, 2017", "July 3, 2017"];
const discoveryDescription = ["This is a picture of two turtoises at SeaWorld's San Antonio park <br> Discovery Cove. They were pretty large and I thought they were <br> turtles at first.",
"This is a picture of me in Discovery Cove. I really enjoyed the park.",
"This is a selfie of me posing in <br> front of a dolphin.",
"This is a picture of me in Discovery Cove <br> posing in front of the landscaping.",
"This is a picture of a dolphin in <br> Discovery Cove."];
const discoveryTitle = ["Discovery Cove Turtoises", "Discovery Cove waterpark", "Discovery Cove Dolphin", "Discovery Cove", "Discovery Cove"];
const discoveryImageWidth = ["wide", "wide", "not-wide", "not-wide", "not-wide"];

sections("Discovery Cove", discoveryImage, discoveryImageAlt, discoveryDates, discoveryDescription, discoveryTitle, discoveryImageWidth);
/**
 * Six Flags Lists
 */
const sixImage = ["states-images/texas-images/fiesta-texas.jpeg", "states-images/texas-images/fiesta-texas2.jpeg", "states-images/texas-images/america.jpeg", "states-images/texas-images/fiesta-texas-statue.jpeg"];
const sixImageAlt = ["This a picture of me in front of the sign of Six Flags Fiesta Texas.",
"This is a picture of me at the Six Flags Fiesta Texas park. I thought the scenery was pretty nice.",
"This is a picture of me at the Six Flags Fiesta Texas in front of a 'America the Beautiful' sign. I thought it was a cool billboard.",
"This a picture of me standing in front of a statue at Six Flags Fiesta Texas park."];
const sixDates = ["June 30, 2017", "June 30, 2017", "June 30, 2017", "June 30, 2017"];
const sixDescription = ["This a picture of me in front of the sign <br> of Six Flags Fiesta Texas.",
"This is a picture of me at the Six Flags Fiesta <br> Texas park. I thought the scenery was <br> pretty nice.",
"This is a picture of me in front of a <br> 'America the Beautiful' sign. I thought <br> it was a cool billboard.", 
"This a picture of me standing in front of a <br> statue at Six Flags Fiesta Texas park."];
const sixTitle = ["Six Flags Fiesta Texas", "Six Flags Fiesta Texas", "Six Flags Fiesta Texas", "Six Flags Fiesta Texas"];
const sixImageWidth = ["not-wide", "not-wide", "not-wide", "not-wide"];

sections("Six Flags Fiesta Texas", sixImage, sixImageAlt, sixDates, sixDescription, sixTitle, sixImageWidth);
/**
 * San Antonio Lists
 */
const sanAntonioImage = ["states-images/texas-images/river-walk2.jpeg", "states-images/texas-images/river-walk.jpeg", "states-images/texas-images/city.jpeg", "states-images/texas-images/san-antonio2.jpeg", "states-images/texas-images/alamo.jpeg", "states-images/texas-images/alamo-selfie.jpeg", "states-images/texas-images/san-antonio.jpeg", "states-images/texas-images/art4.jpeg", "states-images/texas-images/art2.jpeg", "states-images/texas-images/art.jpeg", "states-images/texas-images/art3.jpeg", "states-images/texas-images/musuem.jpeg"];
const sanAntonioImageAlt = ["This a picture of me in the river walk in downtown San Antonio. There were lots of stores and restaurants next to the river and was a nice peaceful walk to go through.",
"This is a picture of me in San Antonio's river walk in the middle of a tour.",
"This is a picture of me by the San Antonio River Walk.",
"This is a picture of inside a building that is next to the River Walk in San Antonio.",
"This is a picture of me at the Alamo in San Antonio, Texas.",
"This is a selfie of me taken of the Alamo in San Antonio, Texas.",
"This is a picture of a section in downtown San Antonio.",
"This is a picture of traditional tables hanging with books holding the tables up inside an art cultural display in downtown San Antonio.",
"This is an image of what seems to be soccer balls hanging inside a culutarly display in downtown San Antonio.",
"This is a picture of a script that makes the comparison with the invention of corn and invention of fire.",
"This is a picture of corn surrounding a tire inside the San Antonio cultural art display.",
"This is a picture of me taking a picture of myself off a round mirror inside the cultural art display in downtown San Antonio."];
const sanAntonioDates = ["July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017"];
const sanAntonioDescription = ["This a picture of me in the river walk in downtown San Antonio. <br> There were lots of stores and restaurants next to the river and <br> was a nice peaceful walk to go through.",
"This is a picture of me in San Antonio's river walk in the middle of a tour.",
"This is a picture of me by the <br> San Antonio River Walk.", 
"This is a picture of inside a building <br> that is next to the River Walk in San Antonio.",
"This is a picture of me at the Alamo in San Antonio, Texas.", 
"This is a selfie of me taken of the Alamo <br> in San Antonio, Texas.",
"This is a picture of a section in downtown San Antonio.", 
"This is a picture of traditional tables hanging with books holding <br> the tables up inside an art cultural display in downtown San Antonio.",
"This is an image of what seems to be soccer balls hanging inside <br> a culutarly display in downtown San Antonio.",
"This is a picture of a script that <br> makes the comparison with the <br> invention of corn and invention <br> of fire.",
"This is a picture of corn surrounding a tire inside the San Antonio <br> cultural art display.",
"This is a picture of me taking a picture <br> of myself off a round mirror inside the <br> cultural art display in downtown <br> San Antonio."];
const sanAntonioTitle = ["San Antonio River Walk", "San Antonio River Walk", "San Antonio River Walk", "San Antonio River Walk", "Alamo", "Alamo", "Downtown San Antonio", "Instituto Cultural De Mexico", "Instituto Cultural De Mexico", "Instituto Cultural De Mexico", "Instituto Cultural De Mexico", "Instituto Cultural De Mexico"];
const sanAntonioImageWidth = ["wide", "wide", "not-wide", "not-wide", "wide", "not-wide", "ultra-wide", "wide", "wide", "not-wide", "wide", "not-wide"];

sections("San Antonio", sanAntonioImage, sanAntonioImageAlt, sanAntonioDates, sanAntonioDescription, sanAntonioTitle, sanAntonioImageWidth);

function sectionSelected() {
  var x = document.getElementById("area-selector").value;
  if(x == "Hotel") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    } 
    document.getElementById("demo").appendChild(sections("Hotel", hotelImage, hotelImageAlt, hotelDates, hotelDescription, hotelTitle, hotelImageWidth)); 
  }
  else if(x == "Seaworld") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Seaworld", seaworldImage, seaworldImageAlt, seaworldDates, seaworldDescription, seaworldTitle, seaworldImageWidth)); 
  }
  else if(x == "Discovery") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Discovery Cove", discoveryImage, discoveryImageAlt, discoveryDates, discoveryDescription, discoveryTitle, discoveryImageWidth)); 
  }
  else if(x == "Six") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Six Flags Fiesta Texas", sixImage, sixImageAlt, sixDates, sixDescription, sixTitle, sixImageWidth)); 
  }
  else if(x == "San") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("San Antonio", sanAntonioImage, sanAntonioImageAlt, sanAntonioDates, sanAntonioDescription, sanAntonioTitle, sanAntonioImageWidth)); 
  }
  else if(x == "all") {

    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    sections("Hotel", hotelImage, hotelImageAlt, hotelDates, hotelDescription, hotelTitle, hotelImageWidth);
    sections("Seaworld", seaworldImage, seaworldImageAlt, seaworldDates, seaworldDescription, seaworldTitle, seaworldImageWidth);
    sections("Discovery Cove", discoveryImage, discoveryImageAlt, discoveryDates, discoveryDescription, discoveryTitle, discoveryImageWidth);
    sections("Six Flags Fiesta Texas", sixImage, sixImageAlt, sixDates, sixDescription, sixTitle, sixImageWidth);
    sections("San Antonio", sanAntonioImage, sanAntonioImageAlt, sanAntonioDates, sanAntonioDescription, sanAntonioTitle, sanAntonioImageWidth);
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
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('texas-images', 'not-wide');
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
    if(imageWidth[a] === "wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'wide-card');
      element_div.appendChild(element_content);
      
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('texas-images', 'wide');
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
    if(imageWidth[a] === "ultra-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'wide-card');
      element_div.appendChild(element_content);
      
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('texas-images', 'wide');
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
      count = count + 4.0;
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