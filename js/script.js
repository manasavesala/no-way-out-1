
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

$(document).ready(function () {
  $("#room0").slideDown();
  // itsComing();
  $("#room0toRoom1").click(function() {
    $(".room").hide();
    $("#room1").slideDown();
    $("#healthDisplay").text(healthCounter);
  });

  $("#GameOver").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
  });

  $("#gameOverToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown();
  });

  $("#room1toRoom2").click(function() {
    $(".room").hide();
    $("#room2").slideDown();
  });

  $("#room1toRoom2-damage").click(function() {
    $(".room").hide();
    $("#room2-damage").slideDown();
    healthCounter--;
  });

  $("#room2toRoom3").click(function() {
    $(".room").hide();
    $("#room3").slideDown();
  });

  $("#room2toRoom3-damage").click(function() {
    $(".room").hide();
    $("#room3-damage").slideDown();
    healthCounter--;
  });

  $("#room3toRoom4").click(function() {
    $(".room").hide();
    $("#room4").slideDown();
  });


});
