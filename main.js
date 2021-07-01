// Create random message segments [at least three data points]
var horoscopeSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', ];
var msgVerb = ['will be', 'will never be', 'wished they were', 'would hate to be', 'are', 'were', 'wanted to be', 'never wanted to be'];
var jobTitle = ['a lawyer', 'a signer', 'a software engineer', 'a doctor', 'a superhero', 'a firefighter', 'an influencer', 'a plumber'];

// Factory function that generates a sentence object based on three main portions of a sentence
const sentenceFactory = (senSubject, senVerb, senObject) => ({
    // assigns properties to arrays
    _senSubject: senSubject,
    _senVerb: senVerb,
    _senObject: senObject,
    // defines getters/setters
    get senSubject() { return this._senSubject; },
    set senSubject(subj) { this._senSubject = subj; },
    get senVerb() { return this._senVerb; },
    set senVerb(verb) { this._senVerb = verb; },
    get senObject() { return this._senObject; },
    set senObject(obj) { return this._senObject; }
});

// Generate sentence object with above defined arrays
var horoscopeSentence = sentenceFactory(horoscopeSigns, msgVerb, jobTitle);

// Logs to test sentence object by using the getter and printing to console the first value in each property array
console.log(horoscopeSentence.senSubject[0]);
console.log(horoscopeSentence.senVerb[0]);
console.log(horoscopeSentence.senObject[0]);