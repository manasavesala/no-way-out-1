
var healthCounter = 3;


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

  $("#parentsroomS2btn1").click(function() {
    $(".room").hide();
    $("#gameOver").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#parentsroomS2btn2").click(function() {
    $(".room").hide();
    $("#officeS1").slideDown();
    $(".healthDisplay").text(healthCounter);
  });

  $("#officeS1btn1").click(function() {
    $(".room").hide();
    $("#officeGameOver").slideDown();
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
