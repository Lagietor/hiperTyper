$(document).ready(function() {
    lives = 3;
    wave = 1;
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
                playSound("./src/sound/wordActive1.mp3");
                // HENTAI();

                updateScoreCount(activeWordsSectionsId);

                if (combo < 6) {
                    combo++;
                }

                removeWordFromSections(activeWordsSectionsId);
            } else {
                playSound("./src/sound/correctKey.mp3");
            }
        } else {
            // Logic of incorrect key...
            playSound("./src/sound/badKey.wav");
            combo = 1;
            resetScoreCount();
        }
    });

    function run() {
        console.log(allWords);
        console.log(sections);
        // addWordToSection(1, "dupa", 1);
        // addWordToSection(3, "test", 1);
        // addWordToSection(4, "test", 1);
        // addWordToSection(5, "testoo", 1);

        setInterval(function() {
            randomWordGenerator();
        }, 1000);
        // console.log(allWords);
        // console.log(sections);
        // Logic of the game...
    }

    function randomWordGenerator() {
        let randSectionId = Math.floor(Math.random() * (sections.length - 1 + 1)) + 1;
        let randWordLength = Math.floor(Math.random() * (allWords.length));
        let randWordIndex = Math.floor(Math.random() * (allWords[randWordLength].words.length));

        if (!sections[randSectionId - 1].isBusy) {
            addWordToSection(randSectionId, allWords[randWordLength].words[randWordIndex], 1);
        }
    }

    function HENTAI() {
        let hentaiNr = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        playSound("./src/sound/hentai" + hentaiNr + ".mp3");
    }
})