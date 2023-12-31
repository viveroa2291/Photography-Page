var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("florida-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv); 

  const disneyworld = new ImageSet(
    ["../states-images/florida-images/epcot.jpeg", "../states-images/florida-images/disney.jpeg", "../states-images/florida-images/disney-family.jpeg", "../states-images/florida-images/castle.jpeg", "../states-images/florida-images/president.jpeg", "../states-images/florida-images/disney2.jpeg"],
    ["This is a picture of me standing outside of Epcot. I did not have a chance to go into Epcot, but wanted to take a picture since I found the entrance very cool.", "This is a picture of a statue of Walt Disney and Mickey Mouse at the Disneyworld Magic Kingdom park.", "This is a picture of my family and I at the entrance of Disneyworld's Magic Kingdom park.", "This is a picture of me posing in front of the castle in Disneyworld's Magic Kingdom park.", "This is an image of the outside of the Hall of Presidents display. At the time, we could not enter as they were undergoing changes.", "This is an image of me taking pictures by the area we were eating."],
    ["March 20, 2017", "March 20, 2017", "March 20, 2017", "March 20, 2017", "March 20, 2017", "March 20, 2017"],
    ["This is a picture of me standing outside of Epcot. I did not have a chance to go into Epcot, but wanted to take a picture since I found the entrance very cool.", "This is a picture of a statue of Walt Disney and Mickey Mouse at the Disneyworld Magic Kingdom park.", "This is a picture of my family and I at the entrance of Disneyworld's Magic Kingdom park.", "This is a picture of me posing in front of the castle in Disneyworld's Magic Kingdom park.", "This is an image of the outside of the Hall of Presidents display. At the time, we could not enter as they were undergoing changes.", "This is an image of me taking pictures by the area we were eating."],
    ["Epcot", "Walt Disney Statue", "Kingdom Entrance", "Castle", "Hall of Presidents", "Disneyworld"],
    ["not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide"]
  );
  sections("Disneyworld", disneyworld.image, disneyworld.imageAlt, disneyworld.date, disneyworld.description, disneyworld.title, disneyworld.imageWidth);
  imagesView(disneyworld.image, imagediv);
  const universal = new ImageSet(
    ["../states-images/florida-images/jurassic.jpeg", "../states-images/florida-images/nbc.jpeg", "../states-images/florida-images/jurassic2.jpeg", "../states-images/florida-images/harrypotter.jpeg", "../states-images/florida-images/universal-sign.jpeg", "../states-images/florida-images/universal.jpeg"],
    ["This is an image of me looking up at the Jurassic Park sign.", "This is an image of me outside of the NBC building after watching a 'Tonight's Show'.", "This is an image of me looking at the dinosaur acting in shock. I thought the display was very well done and was my favorite park.", "This is a picture of me standing outside of Hogwarts.", "This is an image of me standing outside of the Universal Studios sign that rotates 360 degrees.", "This is an image of me taking a look at the view of the Universal Studios park."],
    ["March 22, 2017", "March 22, 2017", "March 22, 2017", "March 22, 2017", "March 22, 2017", "March 22, 2017", "March 22, 2017"],
    ["This is an image of me looking up at the Jurassic Park sign.", "This is an image of me outside of the NBC building after watching a 'Tonight's Show'.", "This is an image of me looking at the dinosaur acting in shock. I thought the display was very well done and was my favorite park.", "This is a picture of me standing outside of Hogwarts.", "This is an image of me standing outside of the Universal Studios sign that rotates 360 degrees.", "This is an image of me taking a look at the view of the Universal Studios park."],
    ["Jurassic Park", "NBC Tonight's Show", "Jurassic Park", "Hogwarts", "Universal Sign", "Universal Studios"],
    ["not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "mid-wide"]
  );
  sections("Universal Studios", universal.image, universal.imageAlt, universal.date, universal.description, universal.title, universal.imageWidth);
imagesView(universal.image, imagediv);
  const seaworld = new ImageSet(
    ["../states-images/florida-images/seaworld2.jpeg", "../states-images/florida-images/penguin.jpeg", "../states-images/florida-images/penguin-me.jpeg", "../states-images/florida-images/orca.jpeg", "../states-images/florida-images/orcas-glass.jpeg", "../states-images/florida-images/seaworld-green.jpeg", "../states-images/florida-images/seaworld.jpeg", "../states-images/florida-images/fish.jpeg", "../states-images/florida-images/seahorses.jpeg"],
    ["This is an image of me standing by the Seaworld lake of the theme park.", "This is an image of penguins inside a penguin exhibit.", "This is an image of me interacting with a penguin from the glass. I thought it was pretty cool that the penguin came up to me and made eye contact.", "This is an image of an orca swimming around its tank.", "This is an image of orcas and their trainers providing information about orcas to the visitors.", "This is an image of me in an unknown area of Seaworld's park. It was pretty empty but had nice theming and was surrounded with a lot colorful flowers.", "This is an image of me sitting by the Seaworld sign.", "This is a picture of a fish that I took at Seaworld.", "This is an picture of seahorses that I took at Seaworld."],
    ["March 19, 2017", "March 19, 2017", "March 19, 2017", "March 19, 2017", "March 19, 2017", "March 21, 2017", "March 21, 2017", "March 23, 2017", "March 23, 2017"],
    ["This is an image of me standing by the Seaworld lake of the theme park.", "This is an image of penguins inside a penguin exhibit.", "This is an image of me interacting with a penguin from the glass. I thought it was pretty cool that the penguin came up to me and made eye contact.", "This is an image of an orca swimming around its tank.", "This is an image of orcas and their trainers providing information about orcas to the visitors.", "This is an image of me in an unknown area of Seaworld's park. It was pretty empty but had nice theming and was surrounded with a lot colorful flowers.", "This is an image of me sitting by the Seaworld sign.", "This is a picture of a fish that I took at Seaworld.", "This is an picture of seahorses that I took at Seaworld."],
    ["Seaworld Lake", "Penguin Exhibit", "Penguin Exhibit", "Shamu Stadium", "Shamu Stadium", "Seaworld", "Seaworld Sign", "Fish", "Seahorses"],
    ["not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide"]
  );
  sections("Seaworld", seaworld.image, seaworld.imageAlt, seaworld.date, seaworld.description, seaworld.title, seaworld.imageWidth);
imagesView(seaworld.image, imagediv);
  const florida = new ImageSet(
    ["../states-images/florida-images/hotel.jpeg", "../states-images/florida-images/bathroom.jpeg"],
    ["This is an image of me standing outside of my hotel.", "This is a bathroom picture that I took in the bathroom of the hotel I was staying at."],
    ["March 19, 2017", "March 23, 2017"],
    ["This is an image of me standing outside of my hotel.", "This is a bathroom picture that I took in the bathroom of the hotel I was staying at."],
    ["Hotel", "Hotel"],
    ["not-wide", "not-wide"]
  );
  sections("Other Parts of Florida", florida.image, florida.imageAlt, florida.date, florida.description, florida.title, florida.imageWidth);
  imagesView(florida.image, imagediv);
  function sectionSelected() {
    var x = document.getElementById("area-selector").value;
    if(x == "Disneyworld") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      } 
      document.getElementById("demo").appendChild(sections("Disneyworld", disneyworld.image, disneyworld.imageAlt, disneyworld.date, disneyworld.description, disneyworld.title, disneyworld.imageWidth)); 
    }
    else if(x == "Universal") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Universal Studios", universal.image, universal.imageAlt, universal.date, universal.description, universal.title, universal.imageWidth)); 
    }
    else if(x == "Seaworld") 
    {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Seaworld", seaworld.image, seaworld.imageAlt, seaworld.date, seaworld.description, seaworld.title, seaworld.imageWidth)); 
  
    }
    else if(x == "Other") {
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      document.getElementById("demo").appendChild(sections("Other Parts of Florida", florida.image, florida.imageAlt, florida.date, florida.description, florida.title, florida.imageWidth));  
    }
    else if(x == "all") {
  
      while(document.getElementById("demo").firstChild) {
        document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
      }
      sections("Disneyworld", disneyworld.image, disneyworld.imageAlt, disneyland.date, disneyland.description, disneyland.title, disneyland.imageWidth);
      sections("Universal Studios", universal.image, universal.imageAlt, universal.date, universal.description, universal.title, universal.imageWidth);
      sections("Seaworld", seaworld.image, seaworld.imageAlt, seaworld.date, seaworld.description, seaworld.title, seaworld.imageWidth);
      sections("Other Parts of Florida", florida.image, florida.imageAlt, florida.date, florida.description, florida.title, florida.imageWidth);
    }
  } 
var imageList = [];
var descriptionList = [];

for(var a = 0; a < disneyworld.image.length; a++) {
  imageList.push(disneyworld.image[a]);
  descriptionList.push(disneyworld.description[a]);
}
for(var b = 0; b < universal.image.length; b++) {
  imageList.push(universal.image[b]);
  descriptionList.push(universal.description[b]);
}
for(var c = 0; c < seaworld.image.length; c++) {
  imageList.push(seaworld.image[c]);
  descriptionList.push(seaworld.description[c]);
}
for(var d = 0; d < florida.image.length; d++) {
  imageList.push(florida.image[d]);
  descriptionList.push(florida.description[d]);
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
      element_image.classList.add('florida-images', 'not-wide');
      element_image.src = image[a];
      element_image.alt = imagesAlt[a];
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
      element_image.classList.add('florida-images', 'mid-wide');
      element_image.src = image[a];
      element_image.alt = imagesAlt[a];
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
  function images(){
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