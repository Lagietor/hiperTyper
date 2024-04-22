function moveDownAnimation(sectionId) {
    $("#st" + sectionId).addClass("slideDown");
}

function isAnimationFinished(callback) {
    sections.forEach(section => {
        $("#st" + section.id).on("animationend", function() {
            callback(section.id);
        });
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
