var images = [
    ["assets/images/api.png", "Portfolio/API.html"],
    ["assets/images/Trivia-Game.png", "Portfolio/Trivia-Game.html"],
    ["assets/images/Onion-Collector.png", "Portfolio/Onion-Collector.html"],
    ["assets/images/Word-Guessing-Game.png", "Portfolio/Word-Guessing-Game.html"]
]

var showImage;
var count = 0;
function displayImage() {
    var img = $("<img>").attr({"src": images[count][0], "width": "100%", "height": "100%"});
    $("#slideshow").html(img);
    $("#info").html("<a href='" + images[count][1] + "' target='_blank'>Link To</a>");
    startSlideshow();
}

function nextImage() {
    $("#slideshow").html("")
    count++;
    if (count === images.length) {
        count = 0;
    }
    displayImage();
}

function startSlideshow() {
    showImage = setTimeout(nextImage, 5000);
}

displayImage();