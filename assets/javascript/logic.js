// Global variables
var images = [
    ["Project Elevation", "assets/images/How-High.png", "https://jmemmett.github.io/Project1/", "Multiple APIs in connection", "Leaflet.js", "JQuery", "Bootstrap styling"],
    ["Multiplayer Rock Paper Scissors", "assets/images/RPS.png", "https://ccastro502.github.io/RPS-Multiplayer/", "Firebase", "JQuery", "Bootstrap styling"],
    ["Project Foodie", "assets/images/Project-Foodie.png", "https://fathomless-coast-18976.herokuapp.com/", "Node.js", "Mongoose.js", "Express.js", "Handlebars"],
    ["Friend Finder", "assets/images/Friend-Finder.png", "https://morning-everglades-22263.herokuapp.com/survey", "Node.js", "Express.js", "Boostrap styling"]
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