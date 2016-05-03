Contractions
-----------


Convert English contractions to complete words.

Uses the word list from [https://en.wikipedia.org/wiki/Wikipedia:List_of_English_contractions](https://en.wikipedia.org/wiki/Wikipedia:List_of_English_contractions).



````bash
npm install contractions
````


````javascript
var contractions = require('contractions');

console.log(contractions.expand("I don't know who ya'll are."));
// Outputs: I do not know who you all are.

console.log(contractions.contract("You all will have not seen this."));
// Outputs: Y'all'll'ven't seen this.
````


You can also use your own list of contractions / strings.
Note: Longer strings take precedent over short strings.

````javascript
var Contractions = require('contractions').Contractions;

var contractions = new Contractions({
	'asap': 'as soon as possible', // only lower case characters should be used in the list
	'a.s.a.p.': 'as soon as possible'
});


var text = 'asap';

text = contractions.expand(text);
console.log(text);
// Outputs: as soon as possible

text = contractions.contract(text);
console.log(text);
// Outputs: a.s.a.p.
````
