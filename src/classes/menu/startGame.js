$(document).ready(function() {
    // Time of reappearing animation
    const interval = 1000;
    let textAnimation;
    let gameRunnig = false;

    textAnimation = animateText(interval);

    // Check if the key was pressed
    $(document).keydown(function() {
        // Checks if the game is already running to prevent multiple game starts
        if (!gameRunnig) {
            gameRunnig = true;
            startGame(function() {
                // Loading the view of the game
                $('#game').load('./src/view/game.html', function() {
                    // Loading the logic of the game
                    $.getScript("./src/controller/game.js");
                });
            });
        }
    })
});

// Animation of appearing and disappearing text
function animateText(interval) {
    return setInterval(function() {
        $("#menuStart").animate({opacity: 0}, interval).animate({opacity: 1}, interval);
    }, interval * 2);
}

function playSound(soundFile) {
    let audio = new Audio(soundFile);
    audio.play();
}

// Animation of disappearing menu and playing the sound effect
function startGame(callback) {
    playSound("./src/sound/startGame.wav");
    $("#menuStart").stop(true).css('opacity', 0);
    $("#menuStart").animate({fontSize: 0}, 1800);
    $("#menuTitle").animate({fontSize: 0}, 1800);
    $("#bg-video").animate({opacity: 0}, 1800, function() {
        callback();
    });
}
