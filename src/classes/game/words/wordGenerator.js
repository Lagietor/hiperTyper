function generateWords() {
    wordGenerateInterval = setInterval(function() {
        if (timerSec !== 0 && timerSec % 30 === 0 && speed < 15) {
            speed++;
            $("#speed").text(speed);
            playSound("./src/sound/speedUp.mp3");
        }
        addCalculatedWordToDisplay();
    }, 1000);
}

function addCalculatedWordToDisplay() {
    let randSectionId = Math.floor(Math.random() * (sections.length - 1 + 1)) + 1;

    if (timerSec < 30) {
        let randWordLength = Math.floor(Math.random() * 2);
        let randWordIndex = Math.floor(Math.random() * (allWords[randWordLength].words.length));

        if (!sections[randSectionId - 1].isBusy) {
            animationTime = calculateAnimationTime(randWordLength + 3, speed);
            addWordToSection(randSectionId, allWords[randWordLength].words[randWordIndex], speed);
            moveDownAnimation(randSectionId, animationTime);
        }
    } else if (timerSec <= 60) {
        let randWordLength = Math.floor(Math.random() * 4);
        let randWordIndex = Math.floor(Math.random() * (allWords[randWordLength].words.length));

        if (!sections[randSectionId - 1].isBusy) {
            animationTime = calculateAnimationTime(randWordLength + 3, speed);
            addWordToSection(randSectionId, allWords[randWordLength].words[randWordIndex], speed);
            moveDownAnimation(randSectionId, animationTime);
        }
    } else if (timerSec <= 90) {
        let randWordLength = Math.floor(Math.random() * 7);
        let randWordIndex = Math.floor(Math.random() * (allWords[randWordLength].words.length));

        if (!sections[randSectionId - 1].isBusy) {
            animationTime = calculateAnimationTime(randWordLength + 3, speed);
            addWordToSection(randSectionId, allWords[randWordLength].words[randWordIndex], speed);
            moveDownAnimation(randSectionId, animationTime);
        }
    } else {
        let randWordLength = Math.floor(Math.random() * allWords.length);
        let randWordIndex = Math.floor(Math.random() * (allWords[randWordLength].words.length));

        if (!sections[randSectionId - 1].isBusy) {
            animationTime = calculateAnimationTime(randWordLength + 3, speed);
            addWordToSection(randSectionId, allWords[randWordLength].words[randWordIndex], speed);
            moveDownAnimation(randSectionId, animationTime);
        }
    }
}

function calculateAnimationTime(wordLength, speed) {
    baseTime = 6;
    timePerLetter = baseTime / speed;
    totalTime = wordLength * timePerLetter;
    return totalTime;
}