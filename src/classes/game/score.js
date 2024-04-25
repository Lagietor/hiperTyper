function updateScoreCount(sectionsId) {
    sectionsId.forEach(sectionId => {
        wordLength = sections[sectionId - 1].word.length;
        scoreCount += combo * allWords[wordLength - 3].points;
    });

    if (combo < 6) {
        combo++;
    }

    updateScoreCountDisplay();
    updateComboDisplay();
}

function resetScoreCount() {
    score += scoreCount;
    scoreCount = 0;
    updateScoreDisplay();
    removeScoreCountDisplay();
    removeComboDisplay();
}

function updateHighscore(score) {
    let highscore = (window.localStorage.getItem("highscore")) ? window.localStorage.getItem("highscore") : 0;

    highscore = parseInt(highscore);
    score = parseInt(score);

    if (score >= highscore) {
        window.localStorage.setItem("highscore", score);
    }
}

function updateScoreCountDisplay() {
    $("#scoreCount").text("+" + scoreCount);
}

function removeScoreCountDisplay() {
    $("#scoreCount").text("");
    $("#combo").removeClass("x" + combo);
}

function updateComboDisplay() {
    $("#combo").text("x" + combo);
    $("#combo").addClass("x" + combo).removeClass("x" + (combo - 1));

}

function removeComboDisplay() {
    $("#combo").text("");
}

function updateScoreDisplay() {
    $("#score").text(score);
}
