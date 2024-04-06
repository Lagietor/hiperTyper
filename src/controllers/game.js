$(document).ready(function() {
    let lives = 3;
    let wave = 1;
    let score = 0;

    let allWords;
    let sections;

    // isReady checks if everything is loaded
    // before starting the game
    let isReady = false;

    $.getScript("./src/classes/game/keyPressed.js");
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
    });

    function run() {
        console.log(allWords);
        console.log(sections);

        // Logic of the game...
    }
})