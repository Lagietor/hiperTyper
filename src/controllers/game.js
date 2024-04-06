$(document).ready(function() {
    let allWords;

    // isReady checks if everything is loaded
    // before starting the game
    let isReady = false;

    $.getScript("./src/classes/game/keyPressed.js");
    $.getScript("./src/classes/game/sound.js");
    $.getScript("./src/classes/game/words.js", function() {
        getAllWords(function(words) {
            allWords = words;
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
        // displayWord("testttttttttttt", 2);
        // Logic of the game...
    }
})