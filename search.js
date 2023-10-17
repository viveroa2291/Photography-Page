const searchInput = document.getElementById("search-input");

const namesFromStates = document.getElementsByClassName("card-header");

searchInput.addEventListener("keyup", (e) => {
    const {value} = e.target;

    const searchQuery = value.toLowerCase();

    for(const states of namesFromStates) {
        let state = states.textContent.toLowerCase();

        if(state.includes(searchQuery)) {
            state.style.display = "block";
        } else {
            state.style.display = "none";
        }
    }
});