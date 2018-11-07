
var healthCounter = 3;

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

function laugh() {
  var laugh = document.getElementById("laugh");
  laugh.play();
}

function tearing() {
  var tearing = document.getElementById("tearing");
  tearing.play();
}
function bells() {
  var bells = document.getElementById("bells");
  bells.play();
}
function horror() {
  var horror = document.getElementById("horror");
  horror.play();
}

$(document).ready(function () {
  $("#room0").slideDown();
  $("#room0toRoom1").click(function() {
    $(".room").hide();
    $("#bedroomS1").slideDown();
    $(".healthDisplay").text(healthCounter);
    lightning();
  });


  $("#gameOverToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#OToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown();
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
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS2btn2").click(function() {
    $(".room").hide();
    healthCounter--;
    laugh();
    $("#parentsroomS1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS1btn1").click(function() {
    $(".room").hide();
    $("#parentsroomS2").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS1btn2").click(function() {
    lidCreak();
    $(".room").hide();
    $("#officeS1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS2btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS2btn2").click(function() {
    lidCreak()
    $(".room").hide();
    $("#officeS1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS1btn1").click(function() {
    $(".room").hide();
    $("#officeGameOver").slideDown();
    bells();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS1btn2").click(function() {
    $(".room").hide();
    $("#officeS2").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeGameOverbtn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS2btn2").click(function() {
    $(".room").hide();
    tearing();
    $("#officeS3").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
  $("#officeS3btn1").click(function() {
    $(".room").hide();
    $("#officeS4").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
  $("#officeS3btn2").click(function() {
    $(".room").hide();
    $("#officeS5").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS5btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS4btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS2btn1").click(function() {
    $(".room").hide();
    $("#atticS1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
  $("#atticS1btn1").click(function() {
    $(".room").hide();
    $("#atticS2").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
  $("#atticS1btn2").click(function() {
    $(".room").hide();
    $("#basementS1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#basementS1btn1").click(function() {
    $(".room").hide();
    $("#basementEnding").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
  $("#basementS1btn2").click(function() {
    $(".room").hide();
    $("#basementGameOver").slideDown();
    horror();
    $(".healthDisplay").text(healthCounter);
  });
  $("#atticS2btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
  $("#basementEndingbtn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
  $("#basementGameOverbtn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });
});
