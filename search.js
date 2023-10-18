const searchInput = document.getElementById("search-input");

const namesFromStates = document.getElementsByClassName("state");
 
searchInput.addEventListener("keyup", (e) => {
    const {value} = e.target;

    const searchQuery = value.toLowerCase();

    for(const states of namesFromStates) {
        let state = states.textContent.toLowerCase();

        if(state.includes(searchQuery)) {
            states.style.display = "block";
        } else {
            states.style.display = "none";
        }
    }
});