var form = document.querySelector(".modal-search-form");
var button = document.querySelector(".search-button");
var arrivalDate = document.querySelector("[name=check-in-date]");
var departureDate = document.querySelector("[name=check-out-date]");
var adults = document.querySelector("[name=adults]");
var kids = document.querySelector("[name=kids]");

form.classList.add("modal-hide");
button.addEventListener("click", function (evt) {
    evt.preventDefault();
    form.classList.add("modal-hide");
    arrivalDate.focus();
    form.classList.toggle("active");
    form.classList.remove("error");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!arrivalDate.value || !departureDate.value || !adults.value || !kids.value) {
        form.classList.add("error");
    }
});