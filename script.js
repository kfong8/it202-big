window.mdc.autoInit();

$("#content").load("home.html");

$("#home").on("click",function(){
  $("#content").load("home.html");
})

$("#crimes").on("click",function(){
  $("#content").load("crimes.html");
})

$("#stations").on("click",function(){
  $("#content").load("stations.html");
})

$("#about").on("click",function(){
  $("#content").load("about.html");
})