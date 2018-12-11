// Global variables
var images = [
    ["Project Elevation", "assets/images/How-High.png", "https://jmemmett.github.io/Project1/", "Multiple APIs in connection", "Leaflet", "JQuery", "JavaScript", "Bootstrap styling"],
    ["Gif-Movie-News Finder", "assets/images/api.png", "https://ccastro502.github.io/API-Info/", "Multiple APIs used", "JQuery", "Javascript", "Bootstrap styling"],
    ["Trivia Game", "assets/images/Trivia-Game.png", "https://ccastro502.github.io/TriviaGame/", "JQuery", "JavaScript", "CSS Flexbox styling"],
    ["Onion Collector Game", "assets/images/Onion-Collector.png", "https://ccastro502.github.io/unit-4-game/", "JQuery", "JavaScript", "Boostrap styling"]
]
var count = 0;
var count2 = 0;

$("#clickInfo").on("click", function(event) {
    event.preventDefault();
    $('#modal1').modal();
})

function displayImage() {
    var [a, b, c, ...d] = images[count];
    d.forEach(function(item) {
        if (count2 === 0) {
            $("#row-" + count2).append("<td>" + item + "</td><td>" + "<a href='" + c + "' target='_blank'>" + a + "</a>")
        } else {
            $("#row-" + count2).append("<td>" + item + "</td>");
        }
        ;
        count2++;
    })
    count2 = 0;
    var img = $("<img>").attr({"src": b, "width": "100%", "height": "100%"});
    $("#slideshow").html(img);
    $("#link").html("<a href='" + c + "' target='_blank'>" + a + "</a>");
    setTimeout(nextImage, 5000);
}

function nextImage() {
    $("#row-0").html("");
    $("#row-1").html("");
    $("#row-2").html("");
    $("#row-3").html("");
    $("#row-4").html("");
    // $("#slideshow").html("")
    count++;
    if (count === images.length) {
        count = 0;
    }
    displayImage();
}

displayImage();