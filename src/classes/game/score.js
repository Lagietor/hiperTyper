function updateScoreCount(sectionsId) {
    sectionsId.forEach(sectionId => {
        wordLength = sections[sectionId - 1].word.length;
        scoreCount += combo * allWords[wordLength - 3].points;
    });

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
    console.log(scoreCount);
    $("#scoreCount").text("+" + scoreCount);
}

function removeScoreCountDisplay() {
    $("#scoreCount").text("");
}

function updateComboDisplay() {
    $("#combo").text("x" + combo);
}

function removeComboDisplay() {
    $("#combo").text("");
}

function updateScoreDisplay() {
    $("#score").text(score);
}