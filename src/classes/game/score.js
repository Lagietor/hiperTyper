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