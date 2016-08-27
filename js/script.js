var button = document.querySelector(".search-but");
var popup = document.querySelector(".search-hotels");

button.addEventListener("click", function(event) {
    if (popup.classList.contains("search-hotels-show")) {
        event.preventDefault();
        popup.classList.remove("search-hotels-show");
    } 
    else {
        event.preventDefault();
        popup.classList.add("search-hotels-show");
    }
});

// Анимация

popup.addEventListener("click", function(event))