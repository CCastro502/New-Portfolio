// Global variables
var images = [
    ["Gif-Movie-News Finder", "assets/images/api.png", "Portfolio/API.html", "Multiple APIs used", "Javascript", "Jquery", "Bootstrap styling"],
    ["Trivia Game", "assets/images/Trivia-Game.png", "Portfolio/Trivia-Game.html", "JQuery", "Javascript", "Flexbox styling"],
    ["Onion Collector Game", "assets/images/Onion-Collector.png", "Portfolio/Onion-Collector.html", "JQuery", "Javascript", "Boostrap styling"],
    ["Word-Guessing Game", "assets/images/Word-Guessing-Game.png", "Portfolio/Word-Guessing-Game.html", "Javascript", "Bootstrap styling"]
]
var count = 0;
var count2 = 0;

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
    $("#slideshow").html("")
    count++;
    if (count === images.length) {
        count = 0;
    }
    displayImage();
}

displayImage();