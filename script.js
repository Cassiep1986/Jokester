var jokeList = document.querySelector("ul");
var Button = document.getElementById("button");
var Button = document.getElementById("container2");

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
      listItem.textContent = data.jokes.joke;
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

// Button.addEventListener('click', getjokeApi);
getjokeApi();
