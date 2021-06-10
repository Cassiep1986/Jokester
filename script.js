var jokeList = $("#ul");
var Button = $("#button");
var modalButton = $("#aboutUs");
const saveButton = $("#saveBtn");
const savedContent = $("#savedFavorites");
let jokeDay = $("#jokeOfTheDay")

function getjokeApi() {
  var requestUrl =
    "https://v2.jokeapi.dev/joke/any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=0-1&amount=2";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var listItem = $("<p>");
      data.jokes.forEach((element) => {
        listItem.textContent = data.jokes;
        jokeDay.append();
      });

      //click on save btn
      // saved to local storage
      //and display multiple saves to our favorites category.
      //make saved favorites clickable items on the page for display later.
      // function creatSave(){
      //   const saveFavs = $("<li>");

      // }

      // $(saveButton).on("click", creatSave)

      // var jokeList = document.querySelector('ul')
      // var Button = document.getElementById('button');

      // function getApi() {
      //   var requestUrl = 'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

      //   fetch(requestUrl)
      //     .then(function (response) {
      //       return response.json();
      //     })
      //     .then(function (data) {

      //         var listItem = document.createElement('li');

      //         listItem.textContent = data.setup;

      //         // jokeList.appendChild(listItem);
      //     });
      // }

      // Button.addEventListener('click', getApi);

      // Button.addEventListener('click', getjokeApi);
      // getjokeApi();

      modalButton.on("click", function (event) {
        $("#aboutUsModal").addClass("is-active");
      });

      $(".modal-close").on("click", function (e) {
        $("#aboutUsModal").removeClass("is-active");
      });

      var dropdown = document.querySelector(".dropdown");

      //addEventListener - attaches an event handler to the specified element.
      dropdown.addEventListener("click", function (event) {
        //event.stopPropagation() - it stops the bubbling of an event to parent elements, by preventing parent event handlers from being executed
        event.stopPropagation();

        //classList.toggle - it toggles between adding and removing a class name from an element
        dropdown.classList.toggle("is-active");
      });
    });
}
