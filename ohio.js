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
  var img = document.getElementsByClassName("ohio-images");
  var boxImage = document.getElementsByClassName("box-image");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");

/**
 * Cedar Point List
 */
const cedarImages = ["states-images/ohio-images/2015-beach.jpeg", "states-images/ohio-images/handstand.jpeg", "states-images/ohio-images/sean-pool.jpeg", "states-images/ohio-images/sean-pool2.jpeg", "states-images/ohio-images/sean-beach.jpeg", "states-images/ohio-images/sean-millennium.jpeg", "states-images/ohio-images/thumbs-up3.jpeg", "states-images/ohio-images/sean-dinner.jpeg", "states-images/ohio-images/hotel-view.jpeg", "states-images/ohio-images/hotel2.jpeg",
"states-images/ohio-images/cedar-point.jpeg", "states-images/ohio-images/dinosaur.jpeg", "states-images/ohio-images/dinosaur-group.jpeg", "states-images/ohio-images/2017-cedar-point-sign.jpeg", "states-images/ohio-images/2017-millennium.jpeg", "states-images/ohio-images/2017-top-thrill.jpeg", "states-images/ohio-images/2017-thumbs-up.jpeg", "states-images/ohio-images/2018-cedar-point-sign.jpeg", "states-images/ohio-images/2018-thumbs-up.jpeg", "states-images/ohio-images/valravn.jpeg", 
"states-images/ohio-images/millennium.jpeg", "states-images/ohio-images/2018-top-thrill.jpeg", "states-images/ohio-images/2018-beach.jpeg", "states-images/ohio-images/2019-thumbs-up.jpeg", "states-images/ohio-images/2019-top-thrill.jpeg", "states-images/ohio-images/valravn-group.jpeg", "states-images/ohio-images/alex-sean.jpeg", "states-images/ohio-images/maverick.jpeg", "states-images/ohio-images/steel.jpeg", "states-images/ohio-images/beach.jpeg",
"states-images/ohio-images/2021-beach4.jpeg","states-images/ohio-images/2021-beach2.jpeg", "states-images/ohio-images/2021-beach3.jpeg", "states-images/ohio-images/beach-view.jpeg", "states-images/ohio-images/2021-beach.jpeg", "states-images/ohio-images/jetski2.jpeg", "states-images/ohio-images/jetski.jpeg", "states-images/ohio-images/maverick.jpeg", "states-images/ohio-images/steel.jpeg", "states-images/ohio-images/beach.jpeg"];
const cedarImageAlt = ["This is a picture of me by the beach of Cedar Point enjoying a photoshoot.", "This is the picture of me doing a handstand at the beach in Cedar Point.",
"This is a picture of my friend sean and I in front of a water park of Cedar Point.", "This is a picture of Sean and I at the water park in Cedar Point.",
"This is a picture of my friend Sean and I at the beach of Cedar Point on our last day of our vacation.", "This is a picture of my friend Sean and I in front of the Millennium Force ride. It was also my first time riding the ride, meanwhile Sean has ridden the ride before.",
"This is a picture of me posing in some Cedar Point sign with my thumbs up where I would do the same thing in later years to come.", "This is a picture of Sean and I standing outside of a restaurant where we ate dinner at.",
"This is a picture from our hotel view of the Top Thrill Dragster ride.", "This is a picture of our hotel that we stayed at in Cedar Point. It was a very nice hotel.",
"This is a picture of the Cedar Point entrance. It was a rainy day.",
"This is a picture of me in the entrance of Cedar Point sitting on a chair with a dinosaur with sunglasses.",
"This is a group picture that I took with my friends at the entrance. One of my closest friends could not make it that day.",
"This is a picture of me at the front entrance of Cedar Point my second time visiting.", 
"This is a picture of me in front of the Millennium Force ride. It was my second time riding it.",
"This is a picture of me in front of the Top Thrill Dragster ride. It was my second time riding it.",
"This is a picture of me with the thumbs up.", 
"This is a picture of me in the front entrance of Cedar Point my third time visiting",
"This is a picture of me with the annual thumbs up.",
"This is a picture of me in front of the Valravn sign. It was my first time riding the ride.",
"This is a picture of me standing in front of the Millennium Force sign. It was my third time riding it.",
"This is a picture of me standing in front of the Top Thrill Dragster ride. It was my third time riding it.",
"This is a picture of me by the Cedar Point beach.",
"This is a picture of me doing my annual thumbs up.",
"This is a picture of me standing in front of the Top Thrill Dragster ride. It was my fourth time riding it.",
"This is a picture of me and my friends Alex and Sean sitting in front of the Valravn ride. It was my second time riding it and their first time riding it.",
"This is a picture of me and my friends Alex and Sean sitting.",
"This is a picture of me in front of my favorite ride Maverick.",
"This is a picture of me sitting in front of my favorite wooden ride Steel Vengeance.",
"This is a wide picture of the Cedar Point beach and the Hotel that I stayed at my first time visiting.",
"This is a picture of me doing a photo shoot by the Cedar Point beach.", 
"This is a picture of me doing a photo shoot by the beach.",
"This is another picture of me doing a photo shoot by the beach.", 
"This is a wide screen picture of the Cedar Point beach.",
"This is another picture of me during a photo shoot by the Cedar Point beach.",
"This is a picture of me on a jetski. This was my first time jetskiing and I enjoyed it.",
"This is a picture of me on a jetski."];
const cedarDates = ["July 27, 2015", "July 28, 2015", "July 29, 2015", "July 28, 2015", "July 29, 2015", "July 27, 2015", "July 27, 2015", "July 28, 2015", "July 29, 2015", "July 29, 2015",
"July 10, 2017", "July 10, 2017", "July 10, 2017", "July 10, 2017", "July 10, 2017", "July 10, 2017", "July 10, 2017",
"July 14, 2018", "July 14, 2018", "July 14, 2018", "July 14, 2018", "July 14, 2018", "July 14, 2018", 
"July 8, 2019", "July 8, 2019", "July 8, 2019", "July 8, 2019", "July 8, 2019", "July 8, 2019", "July 8, 2019", 
"July 2, 2021", "July 2, 2021", "July 2, 2021", "July 2, 2021", "July 2, 2021", "July 2, 2021", "July 2, 2021"];
const cedarDescription = ["This is a picture of me by the beach <br> of Cedar Point enjoying a photoshoot.", 
"This is the picture of me doing a <br> handstand at the beach in Cedar Point.",
"This is a picture of my friend sean <br> and I in front of a water park of Cedar Point.", 
"This is a picture of Sean and I at the water park in Cedar Point.",
"This is a picture of my friend Sean and I at the beach of Cedar Point on <br> our last day of our vacation.", 
"This is a picture of my friend Sean <br> and I in front of the Millennium Force ride. <br> It was also my first time riding the ride, <br> meanwhile Sean has ridden the ride before.",
"This is a picture of me posing in some <br> Cedar Point sign with my thumbs up <br> where I would do the same thing in later <br> years to come.", 
"This is a picture of Sean and I standing <br> outside of a restaurant where we ate <br> dinner at.",
"This is a picture from our hotel view of <br> the Top Thrill Dragster ride.", 
"This is a picture of our hotel that we <br> stayed at in Cedar Point. It was a <br> very nice hotel.", 
"This is a picture of the Cedar Point entrance. It was a rainy day.",
"This is a picture of me in the entrance of <br> Cedar Point sitting on a chair with a <br> dinosaur with sunglasses.",
"This is a group picture that I took with my friends at the entrance. <br> One of my closest friends could not make it that day.",
"This is a picture of me at the front entrance <br> of Cedar Point my second time visiting.", 
"This is a picture of me in front of the <br> Millennium Force ride. It was my <br>second time riding it.",
"This is a picture of me in front of the <br> Top Thrill Dragster ride. It was my <br>second time riding it.",
"This is a picture of me with the thumbs <br>up.", 
"This is a picture of me in the front <br>entrance of Cedar Point my third <br>time visiting",
"This is a picture of me with the annual <br>thumbs up.",
"This is a picture of me in front of the <br>Valravn sign. It was my first time riding <br>the ride.",
"This is a picture of me standing in front <br>of the Millennium Force sign. It was my <br>third time riding it.",
"This is a picture of me standing in front <br>of the Top Thrill Dragster ride. It was my <br>third time riding it.",
"This is a picture of me by the Cedar Point <br>beach.",
"This is a picture of me doing my annual <br>thumbs up.",
"This is a picture of me standing in front <br>of the Top Thrill Dragster ride. It was my <br>fourth time riding it.",
"This is a picture of me and my friends <br>Alex and Sean sitting in front of the <br>Valravn ride. It was my second time <br>riding it and their first time riding it.",
"This is a picture of me and my friends Alex and Sean sitting.",
"This is a picture of me in front of my <br>favorite ride Maverick.",
"This is a picture of me sitting in front <br> of my favorite wooden ride Steel <br>Vengeance.",
"This is a wide picture of the Cedar Point beach and the Hotel that I stayed at my first time visiting.",
"This is a picture of me doing a photo <br>shoot by the Cedar Point beach.", 
"This is a picture of me doing a photo <br>shoot by the beach.",
"This is another picture of me doing a <br>photo shoot by the beach.", 
"This is a wide screen picture of the Cedar Point beach.",
"This is another picture of me during a <br>photo shoot by the Cedar Point beach.",
"This is a picture of me on a jetski. This <br>was my first time jetskiing and I enjoyed <br>it.",
"This is a picture of me on a jetski."];
const cedarTitle = ["Cedar Point Beach", "Cedar Point Beach", "Cedar Point Water Park", "Cedar Point Water Park", "Cedar Point Beach", "Millennium Force", "Cedar Point", "Cedar Point", "Hotel View Top Thrill Dragster", "Cedar Point Hotel Breakers", 
"Cedar Point Entrance", "Cedar Point Entrance", "Cedar Point Entrance", "Cedar Point Entrance Sign", "Millennium Force", "Top Thrill Dragster", "Cedar Point", "Cedar Point Entrance Sign", "Cedar Point", "Valravn", "Millennium Force", "Top Thrill Dragster",
"Cedar Point Beach", "Cedar Point", "Top Thrill Dragster", "Valravn", "Cedar Point", "Maverick", "Steel of Vengeance", "Cedar Point Beach", "Cedar Point Beach", "Cedar Point Beach", "Cedar Point Beach", "Cedar Point Beach", "Cedar Point Beach", 
"Cedar Point Beach", "Cedar Point Beach"];
const cedarImageWidth = ["not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "wide",
"not-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "not-wide", "mid-wide", "not-wide", "not-wide", "wide",
"not-wide", "not-wide", "not-wide", "wide", 
"not-wide", "not-wide", "not-wide"];
sections("Sandusky (Cedar Point)", cedarImages, cedarImageAlt, cedarDates, cedarDescription, cedarTitle, cedarImageWidth);

/**
 * Akron Lists
 */

const akronImage = ["states-images/ohio-images/akron.jpeg", "states-images/ohio-images/akron-downtown.jpeg", "states-images/ohio-images/akron2.jpeg", "states-images/ohio-images/group.jpeg", "states-images/ohio-images/jon.jpeg"];
const akronImageAlt = ["This is an image of me putting up the peace sign outside a church in Akron.", 
"This is a low quality picture of downtown Akron.",
"This is a picture of me by the Akron river.",
"This is a group picture of my friends and I at a campsite.",
"This is a picture of my friend Jon and I by the pond at the campsite."];
const akronDates = ["July 7, 2017", "July 7, 2017", "July 7, 2017", "July 8, 2017", "July 9, 2017"];
const akronDescription = ["This is an image of me putting up the <br> peace sign outside a church in Akron.", 
"This is a low quality picture of downtown <br> Akron.",
"This is a picture of me by the Akron river.",
"This is a group picture of my friends and I at a campsite.",
"This is a picture of my friend Jon and I <br>by the pond at the campsite."];
const akronTitle = ["Akron Church", "Downtown Akron", "Akron", "Campsite", "Campsite"];
const akronImageWidth = ["not-wide", "not-wide", "not-wide", "mid-wide", "not-wide"];

sections("Akron", akronImage, akronImageAlt, akronDates, akronDescription, akronTitle, akronImageWidth);

/**
 * Cleveland Lists
 */
const clevelandImage = ["states-images/ohio-images/jim-brown.jpeg", "states-images/ohio-images/downtown-cleveland.jpeg", "states-images/ohio-images/cleveland-sign2.jpeg", "states-images/ohio-images/musuem.jpeg", "states-images/ohio-images/michael-jackson.jpeg","states-images/ohio-images/elvis.jpeg",  "states-images/ohio-images/michael-jackson2.jpeg", "states-images/ohio-images/golf.jpeg",
"states-images/ohio-images/browns-practice.jpeg", 
"states-images/ohio-images/cleveland-cliffs.jpeg", 
"states-images/ohio-images/cleveland-sign-group.jpeg", 
"states-images/ohio-images/cleveland-sign.jpeg"
];
const clevelandImageAlt = ["This is a picture of me outside the Browns stadium next to the Jim Brown statue.",
"This is a picture of me standing outside in downtown Cleveland.",
"This is a picture of my friend Nikki and I at the Cleveland sign.", 
"This is a picture of my friend Nikki and I at the Rock and Roll Hall of Fame in Cleveland Ohio.", 
"This is a picture of me in the Michael Jackson section in the Rock & Roll Hall of Fame. Michael Jackson is one of my favorite artists that I grew up listening to.",
"This is a picture of the Elvis section in the Rock & Roll Hall of Fame.",
"This is a picture of Michael Jackson name on the wall. In order to qualify to be on the wall of the Rock & Roll Hall of Fame, the artist must at least have been in the music industry for over 25 years and an influence.", 
"This is a picture of me in the suburbs of Cleveland mini golfing.", 
"This is a picture of me outside of the Cleveland Browns practice center.",
"This is a picture of in downtown Cleveland by the Cleveland Cliffs cruiser which I know own 2 shares of stocks in it.",
"This is a group picture of my friend Alex and Sean in front of Cleveland sign.",
"This is a picture of me sitting in front of the Cleveland sign."];
const clevelandDates = ["July 13, 2018", "July, 13, 2018", "July 13, 2018", "July 13, 2018", "July 13, 2018","July 13, 2018", "July 13, 2018", "July 13, 2018", "July 16, 2018", "July 7, 2019", "July 7, 2019", "July 7, 2019"];
const clevelandDescription = ["This is a picture of me outside the Browns <br>stadium next to the Jim Brown statue.", 
"This is a picture of me standing outside in downtown Cleveland.",
"This is a picture of my friend Nikki and I at the Cleveland sign.",
"This is a picture of my friend Nikki and I at the Rock and Roll Hall of Fame <br> in Cleveland Ohio.",
"This is a picture of me in the Michael Jackson section in the <br>Rock & Roll Hall of Fame. Michael Jackson is one of my <br>favorite artists that I grew up listening to.",
"This is a picture of the Elvis section in the Rock & Roll Hall of Fame.",
"This is a picture of Michael Jackson <br> name on the wall. In order to qualify <br> to be on the wall of the Rock & Roll <br> Hall of Fame, the artist must at least <br>have been in the music industry for <br> over 25 years and an influence.",
"This is a picture of me in the suburbs <br>of Cleveland mini golfing.", 
"This is a picture of me outside of the <br>Cleveland Browns practice center.",
"This is a picture of in downtown Cleveland by the Cleveland Cliffs <br> cruiser which I know own 2 shares of stocks in it.",
"This is a group picture of my friend Alex and Sean in front of <br>Cleveland sign.",
"This is a picture of me sitting in front of the Cleveland sign."];
const clevelandTitle = ["Jim Brown Statue", "Downtown Cleveland", "Cleveland Sign", "Rock & Roll Hall of Fame", "Michael Jackson Section", "Elvis Section", "Michael Jackson", "Mini Golfing", "Cleveland Browns Practice Center", "Cleveland Cliffs", "Downtown Cleveland", "Downtown Cleveland"];
const clevelandImageWidth = ["not-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "mid-wide", "not-wide", "not-wide", "not-wide", "mid-wide", "mid-wide", "mid-wide"];

sections("Cleveland", clevelandImage, clevelandImageAlt, clevelandDates, clevelandDescription, clevelandTitle, clevelandImageWidth);

/**
 * Cincinnati Lists 
 */

const cincinnatiImage = ["states-images/ohio-images/hotel3.jpeg", "states-images/ohio-images/labor-day.jpeg", "states-images/ohio-images/maria.jpeg", "states-images/ohio-images/hotel.jpeg"];
const cincinnatiImageAlt = ["This is a picture of me taking a mirror picture in my hotel.", 
"This is a group picture of my friends Evan, Jonathan, and Rachel at the event.",
"This is a picture of Maria and I at the labor day event.",
"This is a picture of Alexa and Emily in the hotel we were staying at."];
const cincinnatiDates = ["September 2, 2017", "September 3, 2017", "September 3, 2017", "September 4, 2017"];
const cincinnatiDescription = ["This is a picture of me taking a mirror <br>picture in my hotel.",
"This is a group picture of my friends <br>Evan, Jonathan, and Rachel at the event.",
"This is a picture of Maria and I at the <br>labor day event.",
"This is a picture of Alexa and Emily in the <br>hotel we were staying at."];
const cincinnatiTitle = ["Cincinnati Hotel", "Labor Day Event", "Labor Day Event", "Cincinnati Hotel"];
const cincinnatiImageWidth = ["not-wide", "not-wide", "not-wide", "not-wide"];

sections("Cincinnati", cincinnatiImage, cincinnatiImageAlt, cincinnatiDates, cincinnatiDescription, cincinnatiTitle, cincinnatiImageWidth);

function sectionSelected() {
  var x = document.getElementById("area-selector").value;
  if(x == "Cedar") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    } 
    document.getElementById("demo").appendChild(sections("Sandusky (Cedar Point)", cedarImages, cedarImageAlt, cedarDates, cedarDescription, cedarTitle, cedarImageWidth)); 
  }
  else if(x == "Akron") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Akron", akronImage, akronImageAlt, akronDates, akronDescription, akronTitle, akronImageWidth)); 
  }
  else if(x == "Cleveland") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Cleveland", clevelandImage, clevelandImageAlt, clevelandDates, clevelandDescription, clevelandTitle, clevelandImageWidth)); 
  }
  else if(x == "Cincinnati") 
  {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    document.getElementById("demo").appendChild(sections("Cincinnati", cincinnatiImage, cincinnatiImageAlt, cincinnatiDates, cincinnatiDescription, cincinnatiTitle, cincinnatiImageWidth)); 

  }
  else if(x == "all") {

    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    sections("Sandusky (Cedar Point)", cedarImages, cedarImageAlt, cedarDates, cedarDescription, cedarTitle, cedarImageWidth);
    sections("Akron", akronImage, akronImageAlt, akronDates, akronDescription, akronTitle, akronImageWidth);
    sections("Cleveland", clevelandImage, clevelandImageAlt, clevelandDates, clevelandDescription, clevelandTitle, clevelandImageWidth);
    sections("Cincinnati", cincinnatiImage, cincinnatiImageAlt, cincinnatiDates, cincinnatiDescription, cincinnatiTitle, cincinnatiImageWidth);

  }
}
function yearSelected() {
  var y = document.getElementById("year-selector").value; 
  if(y =="2015") 
  {
    var cedarYear =  yearCollections(y, "cedar", cedarImages, cedarImageAlt, cedarDates, cedarDescription, cedarTitle, cedarImageWidth);
    var akronYear =  yearCollections(y, "akron", akronImage, akronImageAlt, akronDates, akronDescription, akronTitle, akronImageWidth);
    var clevelandYear = yearCollections(y, "cleveland State University", clevelandImage, clevelandImageAlt, clevelandDates, clevelandDescription, clevelandTitle, clevelandImageWidth);
    var cincinnatiYear = yearCollections(y, "Other Parts of cincinnati", cincinnatiImage, cincinnatiImageAlt, cincinnatiDates, cincinnatiDescription, cincinnatiTitle, cincinnatiImageWidth);

    const yearImages = cedarYear[1];
    const yearImageAlt = cedarYear[2];
    const yearDates = cedarYear[3];
    const yearDescription = cedarYear[4];
    const yearTitle = cedarYear[5];
    const yearImageWidth = cedarYear[6];

    yearImages.push(...akronYear[1]);
    yearImageAlt.push(...akronYear[2]);
    yearDates.push(...akronYear[3]);
    yearDescription.push(...akronYear[4]);
    yearTitle.push(...akronYear[5]);
    yearImageWidth.push(...akronYear[6]);
  
    yearImages.push(...clevelandYear[1]);
    yearImageAlt.push(...clevelandYear[2]);
    yearDates.push(...clevelandYear[3]);
    yearDescription.push(...clevelandYear[4]);
    yearTitle.push(...clevelandYear[5]);
    yearImageWidth.push(...clevelandYear[6]);

    yearImages.push(...cincinnatiYear[1]);
    yearImageAlt.push(...cincinnatiYear[2]);
    yearDates.push(...cincinnatiYear[3]);
    yearDescription.push(...cincinnatiYear[4]);
    yearTitle.push(...cincinnatiYear[5]);
    yearImageWidth.push(...cincinnatiYear[6]);

    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }  
  yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
  }
  else if(y == "2017") 
  {
    var cedarYear =  yearCollections(y, "cedar", cedarImages, cedarImageAlt, cedarDates, cedarDescription, cedarTitle, cedarImageWidth);
    var akronYear =  yearCollections(y, "akron", akronImage, akronImageAlt, akronDates, akronDescription, akronTitle, akronImageWidth);
    var clevelandYear = yearCollections(y, "cleveland State University", clevelandImage, clevelandImageAlt, clevelandDates, clevelandDescription, clevelandTitle, clevelandImageWidth);
    var cincinnatiYear = yearCollections(y, "Other Parts of cincinnati", cincinnatiImage, cincinnatiImageAlt, cincinnatiDates, cincinnatiDescription, cincinnatiTitle, cincinnatiImageWidth);

    const yearImages = cedarYear[1];
    const yearImageAlt = cedarYear[2];
    const yearDates = cedarYear[3];
    const yearDescription = cedarYear[4];
    const yearTitle = cedarYear[5];
    const yearImageWidth = cedarYear[6];

    yearImages.push(...akronYear[1]);
    yearImageAlt.push(...akronYear[2]);
    yearDates.push(...akronYear[3]);
    yearDescription.push(...akronYear[4]);
    yearTitle.push(...akronYear[5]);
    yearImageWidth.push(...akronYear[6]);
  
    yearImages.push(...clevelandYear[1]);
    yearImageAlt.push(...clevelandYear[2]);
    yearDates.push(...clevelandYear[3]);
    yearDescription.push(...clevelandYear[4]);
    yearTitle.push(...clevelandYear[5]);
    yearImageWidth.push(...clevelandYear[6]);

    yearImages.push(...cincinnatiYear[1]);
    yearImageAlt.push(...cincinnatiYear[2]);
    yearDates.push(...cincinnatiYear[3]);
    yearDescription.push(...cincinnatiYear[4]);
    yearTitle.push(...cincinnatiYear[5]);
    yearImageWidth.push(...cincinnatiYear[6]);

    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
  }
  else if(y == "2018") 
  {
    var cedarYear =  yearCollections(y, "cedar", cedarImages, cedarImageAlt, cedarDates, cedarDescription, cedarTitle, cedarImageWidth);
    var akronYear =  yearCollections(y, "akron", akronImage, akronImageAlt, akronDates, akronDescription, akronTitle, akronImageWidth);
    var clevelandYear = yearCollections(y, "cleveland State University", clevelandImage, clevelandImageAlt, clevelandDates, clevelandDescription, clevelandTitle, clevelandImageWidth);
    var cincinnatiYear = yearCollections(y, "Other Parts of cincinnati", cincinnatiImage, cincinnatiImageAlt, cincinnatiDates, cincinnatiDescription, cincinnatiTitle, cincinnatiImageWidth);

    const yearImages = cedarYear[1];
    const yearImageAlt = cedarYear[2];
    const yearDates = cedarYear[3];
    const yearDescription = cedarYear[4];
    const yearTitle = cedarYear[5];
    const yearImageWidth = cedarYear[6];

    yearImages.push(...akronYear[1]);
    yearImageAlt.push(...akronYear[2]);
    yearDates.push(...akronYear[3]);
    yearDescription.push(...akronYear[4]);
    yearTitle.push(...akronYear[5]);
    yearImageWidth.push(...akronYear[6]);
  
    yearImages.push(...clevelandYear[1]);
    yearImageAlt.push(...clevelandYear[2]);
    yearDates.push(...clevelandYear[3]);
    yearDescription.push(...clevelandYear[4]);
    yearTitle.push(...clevelandYear[5]);
    yearImageWidth.push(...clevelandYear[6]);

    yearImages.push(...cincinnatiYear[1]);
    yearImageAlt.push(...cincinnatiYear[2]);
    yearDates.push(...cincinnatiYear[3]);
    yearDescription.push(...cincinnatiYear[4]);
    yearTitle.push(...cincinnatiYear[5]);
    yearImageWidth.push(...cincinnatiYear[6]);

    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    yearSections(yearImages, yearImageAlt, yearDates, yearDescription, yearTitle, yearImageWidth); 
  }
  else if(y == "2019") 
  {
    var cedarYear =  yearCollections(y, "cedar", cedarImages, cedarImageAlt, cedarDates, cedarDescription, cedarTitle, cedarImageWidth);
    var akronYear =  yearCollections(y, "akron", akronImage, akronImageAlt, akronDates, akronDescription, akronTitle, akronImageWidth);
    var clevelandYear = yearCollections(y, "cleveland State University", clevelandImage, clevelandImageAlt, clevelandDates, clevelandDescription, clevelandTitle, clevelandImageWidth);
    var cincinnatiYear = yearCollections(y, "Other Parts of cincinnati", cincinnatiImage, cincinnatiImageAlt, cincinnatiDates, cincinnatiDescription, cincinnatiTitle, cincinnatiImageWidth);

    const yearVImages = cedarYear[1];
    const yearVImageAlt = cedarYear[2];
    const yearVDates = cedarYear[3];
    const yearVDescription = cedarYear[4];
    const yearVTitle = cedarYear[5];
    const yearVImageWidth = cedarYear[6];

    yearVImages.push(...akronYear[1]);
    yearVImageAlt.push(...akronYear[2]);
    yearVDates.push(...akronYear[3]);
    yearVDescription.push(...akronYear[4]);
    yearVTitle.push(...akronYear[5]);
    yearVImageWidth.push(...akronYear[6]);
  
    yearVImages.push(...clevelandYear[1]);
    yearVImageAlt.push(...clevelandYear[2]);
    yearVDates.push(...clevelandYear[3]);
    yearVDescription.push(...clevelandYear[4]);
    yearVTitle.push(...clevelandYear[5]);
    yearVImageWidth.push(...clevelandYear[6]);

    yearVImages.push(...cincinnatiYear[1]);
    yearVImageAlt.push(...cincinnatiYear[2]);
    yearVDates.push(...cincinnatiYear[3]);
    yearVDescription.push(...cincinnatiYear[4]);
    yearVTitle.push(...cincinnatiYear[5]);
    yearVImageWidth.push(...cincinnatiYear[6]);
  
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    yearSections(yearVImages, yearVImageAlt, yearVDates, yearVDescription, yearVTitle, yearVImageWidth); 
  }
  else if(y == "2021") 
  {
    var cedarYear =  yearCollections(y, "cedar", cedarImages, cedarImageAlt, cedarDates, cedarDescription, cedarTitle, cedarImageWidth);
    var akronYear =  yearCollections(y, "akron", akronImage, akronImageAlt, akronDates, akronDescription, akronTitle, akronImageWidth);
    var clevelandYear = yearCollections(y, "cleveland State University", clevelandImage, clevelandImageAlt, clevelandDates, clevelandDescription, clevelandTitle, clevelandImageWidth);
    var cincinnatiYear = yearCollections(y, "Other Parts of cincinnati", cincinnatiImage, cincinnatiImageAlt, cincinnatiDates, cincinnatiDescription, cincinnatiTitle, cincinnatiImageWidth);

    const yearVImages = cedarYear[1];
    const yearVImageAlt = cedarYear[2];
    const yearVDates = cedarYear[3];
    const yearVDescription = cedarYear[4];
    const yearVTitle = cedarYear[5];
    const yearVImageWidth = cedarYear[6];

    yearVImages.push(...akronYear[1]);
    yearVImageAlt.push(...akronYear[2]);
    yearVDates.push(...akronYear[3]);
    yearVDescription.push(...akronYear[4]);
    yearVTitle.push(...akronYear[5]);
    yearVImageWidth.push(...akronYear[6]);
  
    yearVImages.push(...clevelandYear[1]);
    yearVImageAlt.push(...clevelandYear[2]);
    yearVDates.push(...clevelandYear[3]);
    yearVDescription.push(...clevelandYear[4]);
    yearVTitle.push(...clevelandYear[5]);
    yearVImageWidth.push(...clevelandYear[6]);

    yearVImages.push(...cincinnatiYear[1]);
    yearVImageAlt.push(...cincinnatiYear[2]);
    yearVDates.push(...cincinnatiYear[3]);
    yearVDescription.push(...cincinnatiYear[4]);
    yearVTitle.push(...cincinnatiYear[5]);
    yearVImageWidth.push(...cincinnatiYear[6]);
  
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    yearSections(yearVImages, yearVImageAlt, yearVDates, yearVDescription, yearVTitle, yearVImageWidth); 
  }
  else if(y == "all") {
    while(document.getElementById("demo").firstChild) {
      document.getElementById("demo").removeChild(document.getElementById("demo").firstChild);
    }
    sections("Sandusky (Cedar Point)", cedarImages, cedarImageAlt, cedarDates, cedarDescription, cedarTitle, cedarImageWidth);
    sections("Akron", akronImage, akronImageAlt, akronDates, akronDescription, akronTitle, akronImageWidth);
    sections("Cleveland", clevelandImage, clevelandImageAlt, clevelandDates, clevelandDescription, clevelandTitle, clevelandImageWidth);
    sections("Cincinnati", cincinnatiImage, cincinnatiImageAlt, cincinnatiDates, cincinnatiDescription, cincinnatiTitle, cincinnatiImageWidth);
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
      element_content.classList.add('card', 'm-5', 'mx-sm-auto', 'not-wide-card');
      element_div.appendChild(element_content);
  
      element_card = document.createElement("div");
      element_card.classList.add('card-header', 'text-center');
      element_card.innerHTML = title[a];
      element_content.appendChild(element_card);
  
      element_image = document.createElement("img");
      element_image.classList.add('ohio-images', 'not-wide');
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
      if((imageWidth[a+1] === "mid-wide" || imageWidth[a+1] === "wide") && count >= 1.5) 
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
      element_image.classList.add('ohio-images', 'mid-wide');
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
      if((imageWidth[a+1] === "mid-wide" || imageWidth[a+1] === "wide") && count >= 1.5) 
        {
          count = count + 4.0;
        }
        else {
          count = count + 2.0;
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
      element_image.classList.add('ohio-images', 'wide');
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
        element_image.classList.add('ohio-images', 'not-wide');
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
        if((imageWidth[a+1] === "mid-wide" || imageWidth[a+1] === "wide") && count >= 1.5) 
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
        element_image.classList.add('ohio-images', 'mid-wide');
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
        if((imageWidth[a+1] === "mid-wide" || imageWidth[a+1] === "wide") && count >= 1.5) 
        {
          count = count + 4.0;
        }
        else {
          count = count + 2.0;
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
        element_image.classList.add('ohio-images', 'wide');
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