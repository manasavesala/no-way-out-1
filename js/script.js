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

function gun() {
  var gun = document.getElementById("gun");
  gun.play();
}

function breathing() {
  var breathing = document.getElementById("breathing");
  breathing.play();
}

function siren() {
  var siren = document.getElementById("siren");
  siren.play();
}

function sniff() {
  var sniff = document.getElementById("sniff");
  sniff.play();
}

$(document).ready(function () {
  lightning();
  $("#room0").slideDown(10000);
  $("#room0toRoom1").click(function() {
    $(".room").hide();
    $("#bedroomS1").slideDown(10000);
    lightning();
  });


  $("#gameOverToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown(10000);
    tearing();
  });

  $("#OToRoom0").click(function() {
    $(".room").hide();
    $("#room0").slideDown(10000);
    tearing();
  });

  $("#bedroomS1btn1").click(function() {
    $(".room").hide();
    $("#bedroomS2").slideDown(10000);
  });

  $("#bedroomS1btn2").click(function() {
    $(".room").hide();
    $("#bedroomS3").slideDown(10000);
  });

  $("#bedroomS3btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    decapatation();
  });

  $("#bedroomS2btn2").click(function() {
    $(".room").hide();
    laugh();
    $("#parentsroomS1").slideDown(10000);
  });

  $("#parentsroomS1btn1").click(function() {
    $(".room").hide();
    $("#parentsroomS2").slideDown(10000);
  });

  $("#parentsroomS1btn2").click(function() {
    lidCreak();
    $(".room").hide();
    $("#officeS1").slideDown(10000);
  });

  $("#parentsroomS2btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
  });

  $("#parentsroomS2btn2").click(function() {
    lidCreak()
    $(".room").hide();
    $("#officeS1").slideDown(10000);
  });

  $("#officeS1btn1").click(function() {
    bells();
    $(".room").hide();
    $("#officeGameOver").slideDown(10000);
  });

  $("#officeS1btn2").click(function() {
    $(".room").hide();
    gun();
    $("#officeS2").slideDown(10000);
  });

  $("#officeGameOverbtn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    decapatation();
  });

  $("#officeS2btn2").click(function() {
    $(".room").hide();
    tearing();
    $("#officeS3").slideDown(10000);
  });
  $("#officeS3btn1").click(function() {
    $(".room").hide();
    $("#officeS4").slideDown(10000);
  });
  $("#officeS3btn2").click(function() {
    $(".room").hide();
    $("#officeS5").slideDown(10000);
    gun();
  });

  $("#officeS5btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
  });

  $("#officeS4btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
  });

  $("#officeS2btn1").click(function() {
    $(".room").hide();
    $("#atticS1").slideDown(10000);
    breathing();
  });
  $("#atticS1btn1").click(function() {
    $(".room").hide();
    $("#atticS2").slideDown(10000);
    lightning();
  });
  $("#atticS1btn2").click(function() {
    $(".room").hide();
    $("#basementS1").slideDown(10000);
    doorOpen();
  });

  $("#basementS1btn1").click(function() {
    $(".room").hide();
    $("#basementEnding").slideDown(10000);
  });
  $("#basementS1btn2").click(function() {
    $(".room").hide();
    siren();
    $("#basementGameOver").slideDown(10000);
    sniff();
    
  });
  $("#atticS2btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    decapatation();
  });
  $("#basementEndingbtn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    decapatation();
  });
  $("#basementGameOverbtn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown(10000);
    decapatation();
  });
});
