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
function arizona() {
    document.location.href="arizona.html";
}
function arkansas() {
    document.location.href="arkansas.html";
}
function california() {
    document.location.href="california.html";
}
function florida() {
    document.location.href="florida.html";
}