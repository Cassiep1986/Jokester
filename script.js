var jokeList = $("#ul");
var Button = $("#button");
var modalButton = $("#aboutUs");

function getjokeApi() {
    var requestUrl = 'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';


    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            var listItem = document.createElement("li");

            listItem.textContent = data.setup;

            //   jokeList.appendChild(listItem);
        });
}

fetch('https://api.pgamerx.com/v3/ai/response?message=encodeURIComponent("Hello")&type=stable', {
    method: 'get',
    headers: { 'x-api-key': 'BvCHj7SQIc4n' },
})
    .then(res => res.json())
    .then(json => console.log(json));


// Button.addEventListener('click', getjokeApi);
getjokeApi();






modalButton.on("click", function (event) {
    $("#aboutUsModal").addClass("is-active");

});

$(".modal-close").on("click", function (e) {
    $("#aboutUsModal").removeClass("is-active");

})

var dropdown = document.querySelector('.dropdown');

//addEventListener - attaches an event handler to the specified element.
dropdown.addEventListener('click', function (event) {
    //event.stopPropagation() - it stops the bubbling of an event to parent elements, by preventing parent event handlers from being executed
    event.stopPropagation();

    //classList.toggle - it toggles between adding and removing a class name from an element
    dropdown.classList.toggle('is-active');
});