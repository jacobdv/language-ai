// Learning Variables, Arrays, and Objects
let currentInput = [];
let lexiconInputArray = [];
// Global Variables
const punctuation = /[!“#$%&()*+,-./:;<=>?@[\]^_`{|}~]/g;
const verbs = ['is'];
const nouns = ['tree'];
const adjectives = ['green'];
// Closed Class Variables
// Determiners
const catOneDeterminers = ['the','a','an'];
const catTwoDeterminers = ['some','those','these','that','this','my','your','his','her','their','our'];
// Degree Words
const catOneDegrees = ['very'];
const catTwoDegrees = ['so','super','more','less','almost'];
// Conjunctions
const catOneConjunctions = ['and','or','but','nor','yet'];
const catTwoConjunctions = ['for','so'];
// Prepositions
const catOnePrepositions = ['in','on','by','to','at','with','under','of','above','beyond','around','within',
    'unto','into','onto','near','from'];
const catTwoPrepositions = ['for','flurb'];
// List of Closed Class Variables
const compiledClosedClassWords = catOneDeterminers.concat(catTwoDeterminers, catOneDegrees,
                                    catTwoDegrees, catOneConjunctions, catTwoConjunctions, 
                                    catOnePrepositions, catTwoPrepositions);
const closedClassWords = {'catOneDeterminers':catOneDeterminers,
                        'catTwoDeterminers':catTwoDeterminers,
                        'catOneDegrees':catOneDegrees,
                        'catTwoDegrees':catTwoDegrees,
                        'catOneConjunctions':catOneConjunctions,
                        'catTwoConjunctions':catTwoConjunctions,
                        'catOnePrepositions':catOnePrepositions,
                        'catTwoPrepositions':catTwoPrepositions};

                        
let lexicon = initialHardCoding();
console.log(lexicon)
function initialHardCoding() {
    let arrayForLexicon = [];
    Object.entries(closedClassWords).forEach(cat => {
        cat[1].forEach(closedWord => {
            if (Object.keys(arrayForLexicon).includes(closedWord)) {
                arrayForLexicon[closedWord]['lexical_cat'].push(cat[0]);
            } else {
                let closedObj = {
                    'word':closedWord,
                    'lexical_cat':[cat[0]]
                };
                arrayForLexicon[closedWord] = closedObj;
            };
        });
    });
    return arrayForLexicon;
};