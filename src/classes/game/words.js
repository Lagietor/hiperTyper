function getAllWords(callback) {
    // Read file
    $.get("./src/words.txt", function(data) {
        // Array of objects
        let words = [];

        // Split group of words by seperator 
        let groups = data.trim().split('---');

        groups.forEach(function(group) {
            // Remove blank spaces
            // Split words by the sign of new line
            let lines = group.trim().split('\n');
            let groupWords = [];

            lines.forEach(function(line) {
                // Remove blank spaces
                let word = line.trim();

                // Add new word to array
                groupWords.push(word);
            });

            // Assign array with words 
            // as field of the new object
            words.push({ "words": groupWords });
        });

        assignAttrToWords(words);
        callback(words);
    });
    // TODO: Create some error notification
}

function assignAttrToWords(words) {
    words.forEach(function(wordGroup) {
        length = wordGroup["words"][0].length;

        // Assigning new fields
        wordGroup["length"] = length;
        wordGroup["points"] = length * 10;
        
        // Depending on length of the word
        // assign from which wave this word will start appearing
        if (length <= 4) wordGroup["wave"] = 1;
        if (length > 4 && length <= 6) wordGroup["wave"] = 2;
        if (length > 6 && length <= 14) wordGroup["wave"] = 3;
    });
}

// Displays word
function displayWord(word, sectionId) {
    $("#st" + sectionId).text(word);
    adjustTextSize(sectionId);
}

// Resize text, not used yet, not tested
function adjustTextSize(sectionId) {
    // default size
    let fontSize = 1.5;
    let section = $('#s' + sectionId);
    let text = section.find('.enemy-word');

    while (text[0].scrollWidth > text[0].clientWidth) {
        fontSize -= 0.1;
        text.css('font-size', fontSize + 'rem');
    }
}
