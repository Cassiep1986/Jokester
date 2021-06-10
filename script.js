<<<<<<< Updated upstream
var jokeList = $("#ul");
var Button = $("#button");
var modalButton = $("#aboutUs");
=======
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

  
  
  // var jokeList = document.querySelector('ul')
  // var Button = document.getElementById('button');
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
fetch(
  'https://api.pgamerx.com/v3/ai/response?message=encodeURIComponent("Hello")&type=stable',
  {
    method: "get",
    headers: { "x-api-key": "dBzuyLCxJ06r" },
  }
)
  .then((res) => res.json())
  .then((json) => console.log(json));

var getWeather = function (city) {
  var apiUrl = `https://api.openweathermap$.org/data/2.5/weather?q=+${city}&units=imperial&APPID=904755abfca69992b8a848481a87baea`;

  return fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          return displayWeather(data);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function (error) {
      alert("Unable to gather weather data!");
    });
};

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
=======
// fetch('https://api.pgamerx.com/v3/ai/response?message=encodeURIComponent("Hello")&type=stable', {
//         method: 'get',
//         headers: { 'x-api-key': 'dBzuyLCxJ06r' },
//     })
//     .then(res => res.json())
//     .then(json => console.log(json));

//     var getWeather = function (city) {
//       var apiUrl = `https://api.openweathermap$.org/data/2.5/weather?q=+${city}&units=imperial&APPID=904755abfca69992b8a848481a87baea`;
    
//       return fetch(apiUrl)
//         .then(function (response) {
//           if (response.ok) {
//             response.json().then(function (data) {
//               return displayWeather(data);
//             });
//           } else {
//             alert("Error: " + response.statusText);
//           }
//         })
//         .catch(function (error) {
//           alert("Unable to gather weather data!");
//         });
//     };



>>>>>>> Stashed changes
