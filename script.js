$(document).ready(function(){
    window.mdc.autoInit();

    loadScreen("home");

    $("#about").on("click", function(){
        loadScreen("about");
    })
});

function loadScreen(screenName) {
    $("#content").load("" + screenName + ".html", function () {
      console.log("------ Screen load: " + screenName);
    });
}