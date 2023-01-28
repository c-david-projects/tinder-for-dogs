callWs = function() {
    // The Endpoint URL
    let url = 'https://dog.ceo/api/breeds/image/random';
    fetch(url)
}

function getDog() {
    $.getJSON("https://dog.ceo/api/breeds/image/random", function(data) {
        $(".image-content").html("<img class='obj' src='" + data.message + "'>");
    });
}

$('.get-dog').click(function() {
    getDog();
});