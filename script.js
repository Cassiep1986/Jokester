var jokeList = $("#ul");
var Button = $("#button");
var modalButton = $("#aboutUs");
var container2 = $("#container2");

function getjokeApi() {
  var requestUrl =
    "https://v2.jokeapi.dev/joke/any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&idRange=0-1&amount=2";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var listItem = document.createElement("p");
      listItem.textContent = data.jokes[0].joke;
      container2.append(listItem);
    });
}

fetch(
  'https://api.pgamerx.com/v3/ai/response?message=encodeURIComponent("Hello")&type=stable',
  {
    method: "get",
    headers: { "x-api-key": "BvCHj7SQIc4n" },
  }
)
  .then((res) => res.json())
  .then((json) => console.log(json));
const saveButton = $("#saveBtn");
const savedContent = $("#savedFavorites");

//click on save btn
// saved to local storage
//and display multiple saves to our favorites category.
//make saved favorites clickable items on the page for display later.
function creatSave(){
  const saveFavs = $("<li>"); 
}

$(saveButton).on("click", creatSave)


modalButton.on("click", function (event) {
  $("#aboutUsModal").addClass("is-active");
});

$(".modal-close").on("click", function (e) {
  $("#aboutUsModal").removeClass("is-active");
});
    $("#aboutUsModal").removeClass("is-active");


$(".modal-background").on("click", function (e) {
    $("#aboutUsModal").removeClass("is-active");
})

var dropdown = document.querySelector(".dropdown");

//addEventListener - attaches an event handler to the specified element.
dropdown.addEventListener("click", function (event) {
  //event.stopPropagation() - it stops the bubbling of an event to parent elements, by preventing parent event handlers from being executed
  event.stopPropagation();

  //classList.toggle - it toggles between adding and removing a class name from an element
  dropdown.classList.toggle("is-active");
});
