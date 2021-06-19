// Get user input from text box on submit button click.
let submitButton = d3.select('#submitButton');
submitButton.on('click', function() {
    // Console log click and grab user input.
    console.log('Click @ Submit Button');
    let userInput = d3.select('#userInput');
    userInput = userInput['_groups'][0][0].value;
    // If there is user input run function, otherwise error.
    if (userInput != '') {
        console.log(`User Input As Is: ${userInput}`);
        processInput(userInput);
    } else {
        console.log('There was an error getting the user input or there was no user input.');
    };
});

// Initial processing input function.
function processInput(userInput) {
    // Removes punctuation and splits into an array on spaces.
    let inputArray = userInput.replace(punctuation,'').toLowerCase().split(' ');
    knownWordsInputArray(inputArray);
    console.log(`User Input As Array: ${inputArray}`);
    // For each input word...
    let previousWord = ''; 
    inputArray.forEach(inputWord => {
        // If input word in compiled closedClass list...
        if (compiledClosedClassWords.includes(inputWord)) {
            processClosedClass(inputWord);
        } else {
            processOpenClass(inputWord, previousWord, inputArray);
        };
        previousWord = inputWord;    
    });
    console.log(currentInput);
    console.log(lexicon);
    console.log(lexiconInputArray);
};

function processClosedClass(inputWord) {
    // For each closed class type...
    Object.entries(closedClassWords).forEach(closedClass => {
        // For each word in the closedClass...
        closedClass[1].forEach(closedClassWord => {
            // If input word is in a closedClass...
            let inputWordObj = {};
            if (closedClassWord === inputWord) {
                currentInput[inputWord] = {
                    'word':inputWord,
                    'lexical_cat':[closedClass[0]]
                };
                updateLexicon(inputWord, closedClass[0]);
            };              
        });
    });
};

function knownWordsInputArray(inputArray) {
    inputArray.forEach(word => {
        if (Object.keys(lexicon).includes(word)) {
            lexiconInputArray.push(lexicon[word])
        } else {
            lexiconInputArray.push(word)
        };
    });
};

function processOpenClass(inputWord, previousWord, inputArray) {
    
};

function updateLexicon(inputWord, className) {
    if (Object.keys(lexicon).includes(inputWord)) {
        if (Object.keys(lexicon[inputWord]['lexical_cat']).includes(className)) {
            lexicon[inputWord]['lexical_cat'][className]++;
        } else {
            lexicon[inputWord]['lexical_cat'][className] = 1;
        }
    } else {
        inputWordObj = {
            'word':inputWord,
            'lexical_cat': {}
        };
        inputWordObj['lexical_cat'][className] = 1;
        lexicon[inputWord] = inputWordObj;
    };
};

// Testing word storage.
// let greenObj = {
//     'word':'green',
//     'lexical_cat':['adjective','noun'],
//     'semantic_fields':{'color': 3,'grass': 45},
//     'freq':48
// }; 
// let blueObj = {
//     'word':'blue',
//     'lexical_cat':['adjective','noun'],
//     'semantic_fields':{'color': 3,'grass': 45},
//     'freq':974
// }; 
// let redObj = {
//     'word':'red',
//     'lexical_cat':['adjective','noun'],
//     'semantic_fields':{'color': 3,'grass': 45},
//     'freq':125
// }; 
// let list = [greenObj, blueObj, redObj];
// list.sort(function(a,b) {
//     return b.freq-a.freq;
// });
// console.log(list)
// console.log(Object.entries(greenObj));
// console.log(Object.keys(greenObj));
// console.log(Object.values(greenObj.semantic_fields));