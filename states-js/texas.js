var modal = document.getElementById("myModal"); 
var img = document.getElementsByClassName("texas-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);    

const hotel = new ImageSet(
  ["../states-images/texas-images/texas.jpeg", "../states-images/texas-images/hotel3.jpeg", "../states-images/texas-images/hotel2.jpeg", "../states-images/texas-images/hotel4.jpeg", "../states-images/texas-images/hotel.jpeg"],
  ["This is a picture of me sitting on a fence during our walk to walmart in the suburbs of San Antonio Texas. We were walking in a neighborhood with nice homes and golf courses.", "This is an image of the pool of my hotel.", "This is a picture of me in my swimsuit on a photoshoot outside my hotel.", "This is an image of me standing outside my hotel holding two dorsal fins from an orca.", "This is a picture of me outside my hotel room enjoying the landscaping outside."],
  ["June 28, 2017", "June 28, 2017", "June 28, 2017", "June 29, 2017", "June 28, 2017"],
  ["This is a picture of me sitting on a fence during our walk to walmart in the suburbs of San Antonio Texas. We were walking in a neighborhood with nice homes and golf courses.", "This is an image of the pool of my hotel.", "This is a picture of me in my swimsuit on a photoshoot outside my hotel.", "This is an image of me standing outside my hotel holding two dorsal fins from an orca.", "This is a picture of me outside my hotel room enjoying the landscaping outside."],
  ["San Antonio suburb", "Hotel Pool", "Hotel", "Hotel", "Hotel"],
  ["mid-wide", "ultra-wide", "not-wide", "not-wide", "not-wide"]
);
sections("Hotel", hotel.image, hotel.imageAlt, hotel.date, hotel.description, hotel.title, hotel.imageWidth);
imagesView(hotel.image, imagediv);
const seaworld = new ImageSet(
  ["../states-images/texas-images/seaworld3.jpeg", "../states-images/texas-images/great-white.jpeg", "../states-images/texas-images/seaworld2.jpeg", "../states-images/texas-images/seaworld-park.jpeg", "../states-images/texas-images/seaworld.jpeg", "../states-images/texas-images/snake.jpeg", "../states-images/texas-images/seaworld-park2.jpeg", "../states-images/texas-images/orca.jpeg", "../states-images/texas-images/orca-selfie.jpeg"],
  ["This is a picture of me of my first visit at Seaworld in Texas.", "This is a picture of me standing in front of the Great White Roller Coaster.", "This is a picture standing at the entrance of Seaworld's park holding a map.", "This is a picture of the park in Seaworld San Antonio. It is a view from the food court.", "This is a picture of me standing in front of the SeaWorld sign in San Antonio.", "This is a picture of me petting a snake at the Seaworld park.", "This is a picture of me standing at the SeaWorld park.", "This is a picture of an orca at the SeaWorld San Antonio park. They were performing a show for us.", "This is a selfie of me with the orca and their trainer at Shamu Stadium."],
  ["June 29, 2017", "June 29, 2017", "July 1, 2017", "June 29, 2017", "July 3, 2017", "July 2, 2017", "July 1, 2017", "July 3, 2017", "July 3, 2017"],
  ["This is a picture of me of my first visit at Seaworld in Texas.", "This is a picture of me standing in front of the Great White Roller Coaster.", "This is a picture standing at the entrance of Seaworld's park holding a map.", "This is a picture of the park in Seaworld San Antonio. It is a view from the food court.", "This is a picture of me standing in front of the SeaWorld sign in San Antonio.", "This is a picture of me petting a snake at the Seaworld park.", "This is a picture of me standing at the SeaWorld park.", "This is a picture of an orca at the SeaWorld San Antonio park. They were performing a show for us.", "This is a selfie of me with the orca and their trainer at Shamu Stadium."],
  ["Seaworld", "The Great White Roller Coaster", "Seaworld", "Seaworld Park", "Seaworld", "Seaworld", "Seaworld", "Shamu Stadium", "Shamu Stadium"],
  ["not-wide", "not-wide", "not-wide", "ultra-wide", "mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide"]
);
sections("Seaworld", seaworld.image, seaworld.imageAlt, seaworld.date, seaworld.description, seaworld.title, seaworld.imageWidth);
imagesView(seaworld.image, imagediv);
const discovery = new ImageSet(
  ["../states-images/texas-images/turtoise.jpeg", "../states-images/texas-images/discovery-cove2.jpeg", "../states-images/texas-images/dolphin.jpeg", "../states-images/texas-images/discovery-cove.jpeg", "../states-images/texas-images/dolphin2.jpeg"],
  ["This is a picture of two turtoises at SeaWorld's San Antonio park Discovery Cove. They were pretty large and I thought they were turtles at first.", "This is a picture of me in Discovery Cove. I really enjoyed the park.", "This is a selfie of me posing in front of a dolphin.", "This is a picture of me in Discovery Cove posing in front of the landscaping", "This is a picture of a dolphin in Discovery Cove."],
  ["July 1, 2017", "July 1, 2017", "July 3, 2017", "July 1, 2017", "July 3, 2017"],
  ["This is a picture of two turtoises at SeaWorld's San Antonio park Discovery Cove. They were pretty large and I thought they were turtles at first.", "This is a picture of me in Discovery Cove. I really enjoyed the park.", "This is a selfie of me posing in front of a dolphin.", "This is a picture of me in Discovery Cove posing in front of the landscaping", "This is a picture of a dolphin in Discovery Cove."],
  ["Discovery Cove Turtoises", "Discovery Cove waterpark", "Discovery Cove Dolphin", "Discovery Cove", "Discovery Cove"],
  ["mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide"]
);
sections("Discovery Cove", discovery.image, discovery.imageAlt, discovery.date, discovery.description, discovery.title, discovery.imageWidth);
imagesView(discovery.image, imagediv);
const six = new ImageSet(
  ["../states-images/texas-images/fiesta-texas.jpeg", "../states-images/texas-images/fiesta-texas2.jpeg", "../states-images/texas-images/america.jpeg", "../states-images/texas-images/fiesta-texas-statue.jpeg"],
  ["This a picture of me in front of the sign of Six Flags Fiesta Texas.", "This is a picture of me at the Six Flags Fiesta Texas park. I thought the scenery was pretty nice.", "This is a picture of me at the Six Flags Fiesta Texas in front of a 'America the Beautiful' sign. I thought it was a cool billboard.", "This a picture of me standing in front of a statue at Six Flags Fiesta Texas park."],
  ["June 30, 2017", "June 30, 2017", "June 30, 2017", "June 30, 2017"],
  ["This a picture of me in front of the sign of Six Flags Fiesta Texas.", "This is a picture of me at the Six Flags Fiesta Texas park. I thought the scenery was pretty nice.", "This is a picture of me at the Six Flags Fiesta Texas in front of a 'America the Beautiful' sign. I thought it was a cool billboard.", "This a picture of me standing in front of a statue at Six Flags Fiesta Texas park."],
  ["Six Flags Fiesta Texas", "Six Flags Fiesta Texas", "Six Flags Fiesta Texas", "Six Flags Fiesta Texas"],
  ["not-wide", "not-wide", "not-wide", "not-wide"]
);
sections("Six Flags Fiesta Texas", six.image, six.imageAlt, six.date, six.description, six.title, six.imageWidth);
imagesView(six.image, imagediv);
const sanAntonio = new ImageSet(
  ["../states-images/texas-images/river-walk2.jpeg", "../states-images/texas-images/river-walk.jpeg", "../states-images/texas-images/city.jpeg", "../states-images/texas-images/san-antonio2.jpeg", "../states-images/texas-images/alamo.jpeg", "../states-images/texas-images/alamo-selfie.jpeg", "../states-images/texas-images/san-antonio.jpeg", "../states-images/texas-images/art4.jpeg", "../states-images/texas-images/art2.jpeg", "../states-images/texas-images/art.jpeg", "../states-images/texas-images/art3.jpeg", "../states-images/texas-images/musuem.jpeg"],
  ["This a picture of me in the river walk in downtown San Antonio. There were lots of stores and restaurants next to the river and was a nice peaceful walk to go through.", "This is a picture of me in San Antonio's river walk in the middle of a tour.", "This is a picture of me by the San Antonio River Walk.", "This is a picture of inside a building that is next to the River Walk in San Antonio.", "This is a picture of me at the Alamo in San Antonio, Texas.", "This is a selfie of me taken of the Alamo in San Antonio, Texas.", "This is a picture of a section in downtown San Antonio.", "This is a picture of traditional tables hanging with books holding the tables up inside an art cultural display in downtown San Antonio.", "This is an image of what seems to be soccer balls hanging inside a culutarly display in downtown San Antonio.", "This is a picture of a script that makes the comparison with the invention of corn and invention of fire.", "This is a picture of corn surrounding a tire inside the San Antonio cultural art display.", "This is a picture of me taking a picture of myself off a round mirror inside the cultural art display in downtown San Antonio."],
  ["July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017", "July 2, 2017"],
  ["This a picture of me in the river walk in downtown San Antonio. There were lots of stores and restaurants next to the river and was a nice peaceful walk to go through.", "This is a picture of me in San Antonio's river walk in the middle of a tour.", "This is a picture of me by the San Antonio River Walk.", "This is a picture of inside a building that is next to the River Walk in San Antonio.", "This is a picture of me at the Alamo in San Antonio, Texas.", "This is a selfie of me taken of the Alamo in San Antonio, Texas.", "This is a picture of a section in downtown San Antonio.", "This is a picture of traditional tables hanging with books holding the tables up inside an art cultural display in downtown San Antonio.", "This is an image of what seems to be soccer balls hanging inside a culutarly display in downtown San Antonio.", "This is a picture of a script that makes the comparison with the invention of corn and invention of fire.", "This is a picture of corn surrounding a tire inside the San Antonio cultural art display.", "This is a picture of me taking a picture of myself off a round mirror inside the cultural art display in downtown San Antonio."],
  ["San Antonio River Walk", "San Antonio River Walk", "San Antonio River Walk", "San Antonio River Walk", "Alamo", "Alamo", "Downtown San Antonio", "Instituto Cultural De Mexico", "Instituto Cultural De Mexico", "Instituto Cultural De Mexico", "Instituto Cultural De Mexico", "Instituto Cultural De Mexico"],
  ["mid-wide", "mid-wide", "not-wide", "not-wide", "mid-wide", "not-wide", "wide", "mid-wide", "mid-wide", "not-wide", "mid-wide", "not-wide"]
);
sections("San Antonio", sanAntonio.image, sanAntonio.imageAlt, sanAntonio.date, sanAntonio.description, sanAntonio.title, sanAntonio.imageWidth);
imagesView(sanAntonio.image, imagediv);
function sectionSelected() {
  var x = document.getElementById("area-selector").value;
  if(x == "Hotel") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    } 
    document.getElementById("demo").appendChild(sections("Hotel", hotel.image, hotel.imageAlt, hotel.date, hotel.description, hotel.title, hotel.imageWidth)); 
  }
  else if(x == "Seaworld") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Seaworld", seaworld.image, seaworld.imageAlt, seaworld.date, seaworld.description, seaworld.title, seaworld.imageWidth)); 
  }
  else if(x == "Discovery") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Discovery Cove", discovery.image, discovery.imageAlt, discovery.date, discovery.description, discovery.title, discovery.imageWidth)); 
  }
  else if(x == "Six") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Six Flags Fiesta Texas", six.image, six.imageAlt, six.date, six.description, six.title, six.imageWidth)); 
  }
  else if(x == "San") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("San Antonio", sanAntonio.image, sanAntonio.imageAlt, sanAntonio.date, sanAntonio.description, sanAntonio.title, sanAntonio.imageWidth)); 
  }
  else if(x == "all") {

    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    sections("Hotel", hotel.image, hotel.imageAlt, hotel.date, hotel.description, hotel.title, hotel.imageWidth);
    sections("Seaworld", seaworld.image, seaworld.imageAlt, seaworld.date, seaworld.description, seaworld.title, seaworld.imageWidth);
    sections("Discovery Cove", discovery.image, discovery.imageAlt, discovery.date, discovery.description, discovery.title, discovery.imageWidth);
    sections("Six Flags Fiesta Texas", six.image, six.imageAlt, six.date, six.description, six.title, six.imageWidth);
    sections("San Antonio", sanAntonio.image, sanAntonio.imageAlt, sanAntonio.date, sanAntonio.description, sanAntonio.title, sanAntonio.imageWidth);
  }
}
var imageList = [];
var descriptionList = [];

for(var a = 0; a < hotel.image.length; a++) {
  imageList.push(hotel.image[a]);
  descriptionList.push(hotel.description[a]);
}
for(var b = 0; b < seaworld.image.length; b++) {
  imageList.push(seaworld.image[b]);
  descriptionList.push(seaworld.description[b]);
}
for(var c = 0; c < discovery.image.length; c++) {
  imageList.push(discovery.image[c]);
  descriptionList.push(discovery.description[c]);
}
for(var d = 0; d < six.image.length; d++) {
  imageList.push(six.image[d]);
  descriptionList.push(six.description[d]);
}
for(var e = 0; e < sanAntonio.image.length; e++) {
  imageList.push(sanAntonio.image[e]);
  descriptionList.push(sanAntonio.description[e]);
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
    else if(imageWidth[a] === "mid-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'mid-wide-card');
      element_div.appendChild(element_content);
      
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('texas-images', 'mid-wide');
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
      if((imageWidth[a+1] === "wide" || imageWidth[a+1] === "ultra-wide")) 
          {
            count = count + 4.0;
          }
          else {
             count = count + 2.0;
          }
    }
    else if(imageWidth[a] === "wide") {
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
    else if(imageWidth[a] === "ultra-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'ultra-wide-card');
      element_div.appendChild(element_content);
      
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('texas-images', 'ultra-wide');
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