function createFunctions() {
    for(var i = 0; i < 10; i++) {
        window['myFunction_' + (i + 1)] = getIndex(i + 1);
    }
    
    function getIndex(index) {
        var f = function() {
            return index;
        };
        
        return f;
    }
}

createFunctions();

console.group('TEMA 1 JS --- Zoli ---');
console.group('Execitiul 1');
console.log('window.myFunction_1()' + '::', window.myFunction_1());
console.log('window.myFunction_2()' + '::', window.myFunction_2());
console.log('window.[\'myFunction_6\']()' + '::',window['myFunction_6']());
console.groupEnd();