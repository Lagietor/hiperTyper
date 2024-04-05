$(document).ready(function() {
    $.getScript("./src/classes/game/keyPressed.js");
    $.getScript("./src/classes/game/sound.js");

    $(document).keydown(function(e) {
        let letter = getPressedLetter(e);

        if (!letter) {
            return;
        }

        displayPopupLetter(letter);
    });
})