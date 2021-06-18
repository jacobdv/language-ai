// Learning Variables, Arrays, and Objects
let currentInput = [];
// Global Variables
const punctuation = /[!“#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g;
// Closed Class Variables
// Determiners
const catOneDeterminers = ['the','a','an'];
const catTwoDetermines = ['some','those','these','that','this','my','your','his','her','their','our'];
// Degree Words
const catOneDegrees = ['very'];
const catTwoDegrees = ['so'];
// Conjunctions
const catOneConjunctions = ['and','or','but','nor','yet'];
const catTwoConjunctions = ['for','so'];
// Prepositions
const catOnePrepositions = ['in','on','by','to','at','with','under','of','above','beyond','around','within',
    'unto','into','onto','near','from'];
const catTwoPrepositions = ['for'];

// Get user input from text box on submit button click.
let submitButton = d3.select('#submitButton');
submitButton.on('click', function() {
    // Console log click and grab user input.
    console.log('Click @ Submit Button');
    let userInput = d3.select('#userInput');
    userInput = userInput._groups[0][0]['value'];
    // If there is user input run function, otherwise error.
    if (userInput != '') {
        console.log(userInput);
        processInput(userInput);
    } else {
        console.log('There was an error getting the user input or there was no user input.');
    };
});

// Initial processing input function.
function processInput(userInput) {
    // Removes punctuation and splits into an array on spaces.
    let inputArray = userInput.replace(punctuation,'').toLowerCase().split(' ');
    console.log(inputArray);
    inputArray.forEach(inputWord => {
        currentInput[inputWord] = { 'word':inputWord }
    });
    console.log(currentInput);
};