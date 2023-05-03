const search () {
    const searchField = document.querySelector(".search-field");
    searchField.onkeyup = function () {
        const input = event.target.value.trim().toLowerCase();
        console.log(input);
    }
}