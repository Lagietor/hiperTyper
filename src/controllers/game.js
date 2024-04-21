$(document).ready(function() {
    lives = 3;
    timerSec = 0;
    score = 0;
    scoreCount = 0;
    combo = 1;

    allWords = [];
    sections = [];

    // isReady checks if everything is loaded
    // before starting the game
    let isReady = false;

    $.getScript("./src/classes/game/popupLetter.js");
    $.getScript("./src/classes/game/letterDetection.js");
    $.getScript("./src/classes/game/sound.js");
    $.getScript("./src/classes/game/score.js");
    $.getScript("./src/classes/game/sections.js");
    $.getScript("./src/classes/game/words.js", function() {
        getAllWords(function(words) {
            allWords = words;
            sections = getSections();
            isReady = true;

            // Start the game
            run();
        });
    });

    $(document).keydown(function(e) {
        if (!isReady) {
            return
        }

        let letter = getPressedLetter(e);

        if (!letter) {
            return;
        }

        displayPopupLetter(letter);

        let correctSections = getCorrectSections(letter);

        // Checking if key pressed matches any inactive first letters
        if (correctSections.length) {
            // Logic of correct key...
            let correctSectionsId = correctSections.map(correctSection => correctSection.sectionId);
            activateLetters(correctSectionsId);

            // Get sections with activated words if exists
            let activeWordsSectionsId = getSectionsIdOfActivatedWords(correctSectionsId);

            // Check if word is activated
            if (activeWordsSectionsId.length) {
                // HENTAI();

                updateScoreCount(activeWordsSectionsId);
                playSound("./src/sound/wordActive" + combo + ".mp3");

                removeWordFromSections(activeWordsSectionsId);
            } else {
                playSound("./src/sound/correctKey.mp3");
            }
        } else {
            // Logic of incorrect key...
            playSound("./src/sound/badKey.wav");
            resetScoreCount();
            combo = 1;
        }
    });

    function run() {
        console.log(allWords);
        console.log(sections);

        timeCounter();

        setInterval(function() {
            randomWordGenerator();
        }, 1000);
    }

    function randomWordGenerator() {
        let randSectionId = Math.floor(Math.random() * (sections.length - 1 + 1)) + 1;
        let speed = 1;

        if (timerSec < 30) {
            let randWordLength = Math.floor(Math.random() * 3);
            let randWordIndex = Math.floor(Math.random() * (allWords[randWordLength].words.length));
    
            if (!sections[randSectionId - 1].isBusy) {
                addWordToSection(randSectionId, allWords[randWordLength].words[randWordIndex], speed);
            }
        } else {
            // TODO: add algorithm scaling speed based on time and legth of word
            let randWordLength = Math.floor(Math.random() * (allWords.length));
            let randWordIndex = Math.floor(Math.random() * (allWords[randWordLength].words.length));

            if (!sections[randSectionId - 1].isBusy) {
                addWordToSection(randSectionId, allWords[randWordLength].words[randWordIndex], speed);
            }
        }
    }

    function timeCounter() {
        let seconds = 0;
        let minutes = 0;
        let timerElement = $('#timer');

        setInterval(function() {
            seconds++;
            timerSec++;

            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }

            let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
            let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

            timerElement.text(formattedMinutes + ":" + formattedSeconds);
        }, 1000);
    }

    function HENTAI() {
        let hentaiNr = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        playSound("./src/sound/hentai" + hentaiNr + ".mp3");
    }
})