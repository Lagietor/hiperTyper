function moveDownAnimation(sectionId, speed) {
    speed = speed + "s";
    $("#st" + sectionId).css("--duration", speed);
    $("#st" + sectionId).addClass("slideDown");
}

function isAnimationFinished(callback) {
    sections.forEach(section => {
        $("#st" + section.id).on("animationend", function() {
            callback(section.id);
        });
    });
}

function removeAnimationListeners() {
    sections.forEach(section => {
        $("#st" + section.id).off("animationend");
    });
}

function resetAnimaton(sectionId) {
    $("#st" + sectionId).removeClass("slideDown");
}

function resetAllAnimations() {
    sections.forEach(section => {
        $("#st" + section.id).removeClass("slideDown");
    })
}
