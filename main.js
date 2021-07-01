// Create random message segments [at least three data points]
var horoscopeSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces', ];
var msgVerb = ['will be', 'will never be', 'wished they were', 'would hate to be', 'is', 'was', 'wanted to be', 'never wanted to be'];
var jobTitle = ['a lawyer', 'a singer', 'a software engineer', 'a doctor', 'a superhero', 'a firefighter', 'an influencer', 'a plumber'];

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
    set senObject(obj) { return this._senObject; },
    // functions to retrieve random sentence segments
    getSubject() { return this._senSubject[Math.floor(Math.random() * this._senSubject.length)]; },
    getVerb() { return this._senVerb[Math.floor(Math.random() * this._senVerb.length)]; },
    getObj() { return this._senObject[Math.floor(Math.random() * this._senObject.length)]; },
    // function to generate random message fragment
    message() { return this.getSubject() + ' ' + this.getVerb() + ' ' + this.getObj() }
});

// Generate sentence object with above defined arrays
var horoscopeSentence = sentenceFactory(horoscopeSigns, msgVerb, jobTitle);

// Generate a few horoscope sentences
console.log(horoscopeSentence.message());
console.log(horoscopeSentence.message());
console.log(horoscopeSentence.message());
console.log(horoscopeSentence.message());