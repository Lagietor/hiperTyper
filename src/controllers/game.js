$(document).ready(function() {
    lives = 3;
    wave = 1;
    score = 0;

    allWords = [];
    sections = [];

    // isReady checks if everything is loaded
    // before starting the game
    let isReady = false;

    $.getScript("./src/classes/game/popupLetter.js");
    $.getScript("./src/classes/game/letterDetection.js");
    $.getScript("./src/classes/game/sound.js");
    $.getScript("./src/classes/game/board.js");
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

        if (correctSections.length) {
            // Logic of correct key...
        } else {
            // Logic of incorrect key...
        }
    });

    function run() {
        addWordToSection(1, "dupa", 1);
        addWordToSection(3, "test", 1);
        // console.log(allWords);
        // console.log(sections);
        // Logic of the game...
    }
})