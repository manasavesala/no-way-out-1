
var healthCounter = 3;

$(document).ready(function () {
  $("#room0").slideDown();
  $("#room0toRoom1").click(function() {
    $(".room").hide();
    $("#room1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#GameOver").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#gameOverToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
  
  $("#room1toRoom2").click(function() {
    $(".room").hide();
    $("#room2").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#room1toRoom2-damage").click(function() {
    $(".room").hide();
    healthCounter--;
    $("#room2-damage").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#room2toRoom3").click(function() {
    $(".room").hide();
    $("#room3").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#room2toRoom3-damage").click(function() {
    $(".room").hide();
    $("#room3-damage").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
  
  $("#room3toRoom4-damage").click(function() {
    $(".room").hide();
    $("#room4-damage").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#room3toRoom4").click(function() {
    $(".room").hide();
    $("#room4").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#room4toRoom5").click(function() {
    $(".room").hide();
    $("#room5").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#room4toRoom5-damage").click(function() {
    $(".room").hide();
    $("#room5-damage").slideDown();
    $(".healthDisplay").text(0);
  });


});


