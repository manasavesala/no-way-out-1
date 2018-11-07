
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

  $("#room0toRoom1").click(function() {
    $(".room").hide();
    $("#bedroomS1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS1btn1").click(function() {
    $(".room").hide();
    $("#bedroomS2").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS1btn2").click(function() {
    $(".room").hide();
    $("#bedroomS3").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS3btn1").click(function() {
    $(".room").hide();
    $("#gameover").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS2btn1").click(function() {
    $(".room").hide();
    healthCounter--;
    $("#gameover").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS2btn2").click(function() {
    $(".room").hide();
    healthCounter--;
    $("#parentsroomS1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS1btn1").click(function() {
    $(".room").hide();
    $("#parentsroomS2").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS1btn2").click(function() {
    $(".room").hide();
    $("#officeS1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS1btn1").click(function() {
    $(".room").hide();
    $("#officeS2").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS1btn2").click(function() {
    $(".room").hide();
    $("#attic").slideDown();
    $(".healthDisplay").text(healthCounter);
  });



});
