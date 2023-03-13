var userClickedPattern = []
var gamePattern = []
var buttonColors = ["red", "green", "blue", "yellow"]
var started = false
var level = 0

$(document).keypress(function() {
    if(!started){
        gamePattern = []
        $("#level-title").text("level "+ level);
        nextSequnce(); 
        started = true;
    }
})
  
function nextSequnce() {

    userClickedPattern = [];

    level++

    $("#level-title").text("level "+ level);

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();

    console.log(randomChosenColor);

}

$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    var clickAudio = new Audio("sounds/" + userChosenColour + ".mp3");
    clickAudio.play()

    $("#" + userChosenColour).addClass("pressed");
    setTimeout(function(){
        $("#" + userChosenColour).removeClass("pressed")
    }, 100)
if(gamePattern.length != 0 ){
    checkAnswer(userClickedPattern.length-1);
}
})
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        if (userClickedPattern.length === gamePattern.length){

            setTimeout(function () {
              nextSequnce();
            }, 1500);
    
          }
    }
    else{
        startOver();
        $("#level-title").text("Game-over");
        $("body").addClass("game-over")

        setTimeout(function () {
            $("body").removeClass("game-over");
            $("#level-title").text("Press A key to restart")
          }, 1000);
          playSound("wrong")
    }

}
function startOver(){
    level = 0;
    started = false;
    gamePattern = []
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }