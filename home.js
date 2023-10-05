var mapview = document.getElementById('map-view');
var listview = document.getElementById('list-view');

function list() {
    listview.style.display = "block";
    mapview.style.display = "none";
}
function map() {
    listview.style.display = "none";
    mapview.style.display = "block"; 
}