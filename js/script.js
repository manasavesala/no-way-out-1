
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
function decapatation() {
  var decapatation = document.getElementById("decapatation");
  decapatation.play();
}

function glass() {
  var glass = document.getElementById("glass");
  glass.play();
}

function breathing() {
  var breathing = document.getElementById("breathing");
  breathing.play();
}

$(document).ready(function () {
  lightning();
  $("#room0").slideDown(10000);
  $("#room0toRoom1").click(function() {
    $(".room").hide();
    $("#bedroomS1").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
    lightning();
  });


  $("#gameOverToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#OToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS1btn1").click(function() {
    $(".room").hide();
    $("#bedroomS2").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS1btn2").click(function() {
    $(".room").hide();
    $("#bedroomS3").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS3btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#bedroomS2btn2").click(function() {
    $(".room").hide();
    healthCounter--;
    laugh();
    $("#parentsroomS1").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS1btn1").click(function() {
    $(".room").hide();
    $("#parentsroomS2").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS1btn2").click(function() {
    lidCreak();
    $(".room").hide();
    $("#officeS1").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS2btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS2btn2").click(function() {
    lidCreak()
    $(".room").hide();
    $("#officeS1").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS1btn1").click(function() {
    bells();
    $(".room").hide();
    $("#officeGameOver").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS1btn2").click(function() {
    $(".room").hide();
    glass();
    $("#officeS2").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeGameOverbtn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
    decapatation();
  });

  $("#officeS2btn2").click(function() {
    $(".room").hide();
    tearing();
    $("#officeS3").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });
  $("#officeS3btn1").click(function() {
    $(".room").hide();
    $("#officeS4").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });
  $("#officeS3btn2").click(function() {
    $(".room").hide();
    $("#officeS5").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS5btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS4btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS2btn1").click(function() {
    $(".room").hide();
    $("#atticS1").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
    breathing();
  });
  $("#atticS1btn1").click(function() {
    $(".room").hide();
    $("#atticS2").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
    lightning();
  });
  $("#atticS1btn2").click(function() {
    $(".room").hide();
    $("#basementS1").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
    doorOpen();
  });

  $("#basementS1btn1").click(function() {
    $(".room").hide();
    $("#basementEnding").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });
  $("#basementS1btn2").click(function() {
    $(".room").hide();
    $("#basementGameOver").slideDown(10000);
    horror();
    $(".healthDisplay").text(healthCounter);
  });
  $("#atticS2btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });
  $("#basementEndingbtn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });
  $("#basementGameOverbtn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    $(".healthDisplay").text(healthCounter);
  });
});
