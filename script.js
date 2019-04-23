$(document).ready(function(){
    window.mdc.autoInit();

    loadScreen("home");
});

function loadScreen(screenName) {
    $("#content").load("" + screenName + ".html", function () {
      console.log("------ Screen load: " + screenName);
    });
}