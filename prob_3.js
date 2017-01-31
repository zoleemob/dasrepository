var myArr = ['1', 23, null, 46.5, '34e2', , false, 'true', , 40];

function filterArray(array) {
    var newArray = array.filter(function(element) {
        if(!isNaN(element)) {
            return element;
        }
    });
    
    return newArray;
}

function divBy_10(array) {
    var newArray = array.map(function (element) {
        if(!isNaN(element)) {
            return parseFloat(element*1) / 10;
        } else {
           return element; 
        }
    });
    
    return newArray;
}

function showNaN(array) {
    var len = array.length;
    var arrayname = 'array'; //am vrut sa obtin numele array-ului pasat, n-am reusit
    function parseArray(array) {
        var notNumber = [];
        for(var i = 0; i < len; i++) {
            if(isNaN(array[i])) {
                notNumber.push(' ' + arrayname + '[' + i + ']:' + array[i]);
            }
        }
        
        function display() {
            if(notNumber.length === 0) {
                return "Lista nu contine elemente care nu sunt numerice " +
                        "sau nu pot fi transformate in valori numerice.";
            } else {
                return "Urmatoarele elemente din lista nu sunt valori numerice "+
                        "si nici nu pot fi transformate in valori numerice:"+ '\n' +
                        '    ' + notNumber;
            }
        }
        
        return display();
    }
    
    return parseArray(array);
}

console.group('Exercitiul 3');
console.log('myArr=', myArr);
console.log('filterArray(myArr)' + '::', filterArray(myArr));
console.log('divBy_10(myArr)' + '::', divBy_10(myArr));
console.log('showNaN(myArr)' + '::', showNaN(myArr));
console.groupEnd();