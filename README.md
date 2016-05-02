Contractions
-----------


Convert English contractions to complete words.

Uses the word list from [https://en.wikipedia.org/wiki/Wikipedia:List_of_English_contractions](https://en.wikipedia.org/wiki/Wikipedia:List_of_English_contractions).



````bash
npm install contractions
````


````javascript
var Contractions = require('contractions');

console.log(Contractions.expand("I don't know who ya'll are."));
// Outputs: I do not know who you all are.

console.log(Contractions.contract("You all will have not seen this."));
// Outputs: Y'all'll'ven't seen this.
````
