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
            "speed": 0
        })
    }

    return sections;
}