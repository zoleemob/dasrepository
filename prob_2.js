var myString = "palma de mallorca";

function stringMod(string) {
    var newString = function() {
        return string.replace(/[aeiou]/gi, function(match) {
            var char = match.toLowerCase();
            if(char !== 'o') {
                return match + '.';
            } else {
                return match + '..';
            }
        });
    };
    
    return newString();
}

console.group('Exercitiul 2');
console.log('myString =', myString);
console.log('stringMod(myString)' + '::',stringMod(myString));
console.groupEnd();