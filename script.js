  // var jokeList = document.querySelector('ul');
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

fetch('https://api.pgamerx.com/v3/ai/response?message=encodeURIComponent("Hello")&type=stable', {
        method: 'get',
        headers: { 'x-api-key': 'dBzuyLCxJ06r' },
    })
    .then(res => res.json())
    .then(json => console.log(json));

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
