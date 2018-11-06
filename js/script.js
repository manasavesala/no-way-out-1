
var healthCounter = 3;


function itsComing() {
  var itsComing = document.getElementById("introMusic");
  itsComing.play();
}

function doorOpen() {
  var dooropen = document.getElementById("doorOpen");
  dooropen.play();
}
function bathroomNoise() {
  var bathroomNoise = document.getElementById("bathroomNoise");
  bathroomNoise.play();
}
function footSteps1() {
  var footSteps1 = document.getElementById("footSteps1");
  footSteps1.play();
}
function heartBeat() {
  var heartBeat = document.getElementById("heartBeat");
  heartBeat.play();
}
function bellSound() {
  var bellSound = document.getElementById("bellSound");
  bellSound.play();
}
function lidCreak() {
  var lidCreak = document.getElementById("lidCreak");
  lidCreak.play();
}
function lightning() {
  var lightning = document.getElementById("lightning");
  lightning.play();
}
function windowNoise() {
  var windowNoise = document.getElementById("windowNoise");
  windowNoise.play();
}
/*
function stopItsComing() {
  var stopItsComing = document.getElementById("introMusic");
  stopItsComing.pause();
}
*/

=======

$(document).ready(function () {
  $("#room0").slideDown();
  // itsComing();
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
