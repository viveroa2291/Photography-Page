var modal = document.getElementById("myModal");
var img = document.getElementsByClassName("tennessee-images");
var boxImage = document.getElementsByClassName("box-image");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");

var imagediv = document.createElement("div"); 
imagediv.classList.add('view-div');
document.getElementById("image-view-demo").appendChild(imagediv);  

const tennessee = new ImageSet(
  ["../states-images/tennessee-images/nikki.jpeg", "../states-images/tennessee-images/group.jpeg", "../states-images/tennessee-images/sami.jpeg", "../states-images/tennessee-images/me.jpeg", "../states-images/tennessee-images/sami-nikki.jpeg", "../states-images/tennessee-images/group-selfie.jpeg", "../states-images/tennessee-images/group-selfie2.jpeg", "../states-images/tennessee-images/mikayla.jpeg"],
  ["This is a picture of my friend Nikki and I taking a selfie on our way down from the infamous bridge in Gaitlinburg.", "This is a group picture of my friends in Gaitlinburg.", "This is a picture of my friend Sami and I in Gaitlinburg.", "This is an image of me in a Gaitlinburg waterfall.", "This is an image of my friends Nikki, Sami, and I in Gaitlinburg.", "This is a group selfie of my friends and I in a Gaitlinburg waterfall.", "This is a group selfie of my friends and I hiking in Gaitlinburg.", "This is an image of my friend Mikayla and I in Gaitlinburg by a waterfall."],
  ["October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020", "October 13, 2020"],
  ["This is a picture of my friend Nikki and I taking a selfie on our way down from the infamous bridge in Gaitlinburg.", "This is a group picture of my friends in Gaitlinburg.", "This is a picture of my friend Sami and I in Gaitlinburg.", "This is an image of me in a Gaitlinburg waterfall.", "This is an image of my friends Nikki, Sami, and I in Gaitlinburg.", "This is a group selfie of my friends and I in a Gaitlinburg waterfall.", "This is a group selfie of my friends and I hiking in Gaitlinburg.", "This is an image of my friend Mikayla and I in Gaitlinburg by a waterfall."],
  ["Lift Picture", "Gaitlinburg", "Gaitlinburg", "Gaitlinburg Waterfall", "Gaitlinburg", "Gaitlinburg Waterfall", "Gaitlinburg", "Gaitlinburg"],
  ["mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "not-wide"]
);  

sections("Gaitlinburg", tennessee.image, tennessee.imageAlt, tennessee.date, tennessee.description, tennessee.title, tennessee.imageWidth);
imagesView(tennessee.image, imagediv);

var imageList = [];
var descriptionList = [];

for(var a = 0; a < tennessee.image.length; a++) {
  imageList.push(tennessee.image[a]);
  descriptionList.push(tennessee.description[a]);
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
    if(imageWidth[a] != "mid-wide") {
      var element_content = document.createElement("div");
      element_content.classList.add('card', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('tennessee-images', 'not-wide');
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
      element_image.classList.add('tennessee-images', 'mid-wide');
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