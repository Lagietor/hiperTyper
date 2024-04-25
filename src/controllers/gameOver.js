$(document).ready(function() {
    gameOverProcess();

    $(document).keydown(function(event) {
        restartGame(event);
    });
})

function gameOverProcess() {
    const interval = 1000;
    let textAnimation;

    textAnimation = animateText(interval, "gameOverRetry");

    let finalTime = $("#timer").text();
    let finalScore = $("#score").text();

    updateHighscore(finalScore);

    $("#finalTime").text(finalTime);
    $("#finalScore").text(finalScore);
    $("#highscore").text(window.localStorage.getItem("highscore"));
}

function hideGameOverElements() {
    $("#gameOver").hide();
}

function showGameElements() {
    $("#game").show();
}

function restartGame(event) {
    if (event.keyCode === 32) {
        $(document).off("keydown", restartGame);
        hideGameOverElements();
        showGameElements();
        resetGame();
        run(true);
    }
}

function resetGame() {
    lives = 3;
    timerSec = 0;
    scoreCount = 0;
    score = 0;
    combo = 1;
    wordGenerateInterval = '';
    timerInterval = '';

    $("#timer").text("00:00");
    $("#score").text("0");
    $("#lives").text(lives);
}