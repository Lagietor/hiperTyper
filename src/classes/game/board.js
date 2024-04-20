// Get all default sections
function getSections() {
    let sectionsNum = 8;
    let sections = [];

    // Create sections (columns) objects with information of:
    // sectionId - section number
    // isBusy - is word already in there
    // speed - speed of how fast the word will go to the bottom
    for (let i = 0; i < sectionsNum; i++) {
        sections.push({
            "sectionId": i + 1,
            "isBusy": false,
            "word": [],
            "speed": 0,
        })
    }

    return sections;
}

function addWordToSection(sectionId, word, speed) {
    let splittedWord = splitWord(word);
    sections[sectionId - 1].word = splittedWord;
    sections[sectionId - 1].isBusy = true;
    sections[sectionId - 1].speed = speed;
    displayWord(word, sectionId);
}