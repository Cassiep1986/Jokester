var jokeList = $("#ul");
var Button = $("#button");
var modalButton = $("#aboutUs");
var saveButton = $("#saveBtn");
const savedContent = $("#savedFavorites");

//click on save btn
// saved to local storage
//and display multiple saves to our favorites category.
//make saved favorites clickable items on the page for display later.

jokeOftheDay();

function jokeOftheDay() {
  const requestUrl =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $("#jokeOfDay").text(data.joke);
      console.log(data);
    });
}
saveButton.on("click", function (event){
  var joke =$("#jokeOfDay").text()
  console.log(joke);
  localStorage.setItem('joke1 save', joke);
  appendjoke();
});

modalButton.on("click", function (event) {
  $("#aboutUsModal").addClass("is-active");
});

$(".modal-close").on("click", function (e) {
  $("#aboutUsModal").removeClass("is-active");
});

$(".modal-background").on("click", function (e) {
  $("#aboutUsModal").removeClass("is-active");
});

var dropdown = document.querySelector(".dropdown");

//addEventListener - attaches an event handler to the specified element.
dropdown.addEventListener("click", function (event) {
  //event.stopPropagation() - it stops the bubbling of an event to parent elements, by preventing parent event handlers from being executed
  event.stopPropagation();

  //classList.toggle - it toggles between adding and removing a class name from an element
  dropdown.classList.toggle("is-active");
  var category = event.target.text;
  console.log(category);
  fetch(`https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=1`)
  .then(function(response){return response.json()})
  .then(function(data) {
      console.log(data.joke);
      $("#jokesMain").text(data.joke);
  })
});

function appendjoke() {
var joke1 = localStorage.getItem('joke1 save');
$("<li>"+ joke1+"</li>").appendTo(savedContent);
 }
