function generateWords() {
    wordGenerateInterval = setInterval(function() {
        addCalculatedWordToDisplay();
    }, 1000);
}

function addCalculatedWordToDisplay() {
    let randSectionId = Math.floor(Math.random() * (sections.length - 1 + 1)) + 1;
    let speed = 1;

    // TODO: add algorithm scaling speed based on time and length of word
    // if (timerSec < 30) {
    //     let randWordLength = Math.floor(Math.random() * 3);
    //     let randWordIndex = Math.floor(Math.random() * (allWords[randWordLength].words.length));

    //     if (!sections[randSectionId - 1].isBusy) {
    //         addWordToSection(randSectionId, allWords[randWordLength].words[randWordIndex], speed);
    //     }
    // } else {
        let randWordLength = Math.floor(Math.random() * (allWords.length));
        let randWordIndex = Math.floor(Math.random() * (allWords[randWordLength].words.length));

        if (!sections[randSectionId - 1].isBusy) {
            addWordToSection(randSectionId, allWords[randWordLength].words[randWordIndex], speed);
            moveDownAnimation(randSectionId);
        }
    // }
}