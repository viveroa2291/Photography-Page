const searchInput = document.getElementById("search-input");
const states = document.getElementById("search-states");
const namesFromStates = document.getElementsByClassName("state");
const stateList = document.getElementsByClassName("state-list");

searchInput.addEventListener("click", function() {
    states.style.display = "block";
    e.stopPropagation(); // Prevent the click event from propagating to the document
})

// Event listener to hide the dropdown when clicking outside
document.addEventListener("click", function(e) {
    const isClickInsideSearchInput = searchInput.contains(e.target);
    const isClickInsideStates = states.contains(e.target);
  
    if (!isClickInsideSearchInput && !isClickInsideStates) {
      states.style.display = "none";
    }
  });

  searchInput.addEventListener("input", function() {
    const inputValue = searchInput.value.toLowerCase();
    
    for (let i = 0; i < namesFromStates.length; i++) {
      const stateName = namesFromStates[i].textContent.toLowerCase();
      
      // Check if the state name contains the typed input
      if (stateName.includes(inputValue)) {
        namesFromStates[i].style.display = "block";
        stateList[i].style.display = "block";
      } else {
        namesFromStates[i].style.display = "none";
        stateList[i].style.display = "none";
      }
    }
  });