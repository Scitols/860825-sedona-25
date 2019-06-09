var button = document.querySelector(".search-button");
var popup = document.querySelector(".popup");

button.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("search-close");
});