var jokeList = document.querySelector('ul');
var Button = document.getElementById('button');

function getApi() { 
  // var requestUrl = 'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  // var requestUrl = 'https://api.github.com/users/octocat/repos';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        var listItem = document.createElement('li');

        listItem.textContent = data.setup;

        jokeList.appendChild(listItem);
    });
}

Button.addEventListener('click', getApi);