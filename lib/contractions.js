'use strict';


var wordLookup = require('./word-lookup');


class Contractions {
	constructor(contractions) {
		var keys;

		this._expandLookup = contractions;
		// Put the longest keys first so they match before shorter, partial matches.
		keys = Object.keys(this._expandLookup);
		keys.sort(function(a, b){ return b.length - a.length; });
		this._expandRegexp = new RegExp(keys.join('|'), 'gi');

		// Build reverse lookup
		let contractLookup = {};

		Object.keys(contractions).forEach(function(key) {
			contractLookup[contractions[key]] = key;
		});

		this._contractLookup = contractLookup;
		keys = Object.keys(this._contractLookup);
		keys.sort(function(a, b){ return b.length - a.length; });
		this._contractRegexp = new RegExp(keys.join('|'), 'gi');


		// Expose class for custom word lists
		this.Contractions = Contractions;
	}

	expand(text) {
		return this._convert(text, this._expandLookup, this._expandRegexp);
	}


	contract(text) {
		return this._convert(text, this._contractLookup, this._contractRegexp);
	}


	_convert(text, lookup, regexp) {
		return text.replace(regexp, (matched) => {
			var replacement = lookup[matched.toLowerCase()];
			var firstCharCode = matched.charAt(0) === '\'' ? matched.charCodeAt(1) : matched.charCodeAt(0);

			// Check if first character of matched string is uppercase
			if (firstCharCode >= 65 && firstCharCode <= 90) {
				// Uppercase the first character of the replacement text
				if (replacement.charAt(0) === '\'') {
					replacement = '\'' + replacement.charAt(1).toUpperCase() + replacement.slice(2);
				}
				else {
					replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1);
				}
			}

			return replacement;
		});
	}
}


module.exports = new Contractions(wordLookup);


