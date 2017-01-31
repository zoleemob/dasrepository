var personsList = [
    {
        firstName: 'Addison',
        lastName: 'Jane',
        age: 25,
        specialization: 'engineer'
    },
    {
        firstName: 'Kenley',
        lastName: 'Michael',
        age: 21,
        specialization: 'tech-support'
    },
    {
        firstName: 'Richards',
        lastName: 'James',
        age: 31,
        specialization: 'copyrighter'
    },
    {
        firstName: 'Daley',
        lastName: 'Jennifer',
        age: 29,
        specialization: 'engineer'
    },
    {
        firstName: 'Vaughn',
        lastName: 'Dalton',
        age: 25,
        specialization: 'designer'
    },
    {
        firstName: 'Jacobs',
        lastName: 'Richard',
        age: 35,
        specialization: 'engineer'
    },
    {
        firstName: 'Gannon',
        lastName: 'John',
        age: 28,
        specialization: 'marketing'
    },
    {
        firstName: 'Landry',
        lastName: 'Leslie',
        age: 24,
        specialization: 'designer'
    },
    {
        firstName: 'Maccabee',
        lastName: 'Laura',
        age: 27,
        specialization: 'tech-support'
    },
    {
        firstName: 'Caldwell',
        lastName: 'Michele',
        age: 30,
        specialization: 'engineer'
    }
];

function sortAlphabetical(list, property) {
    var cloneList = list.map(function (element) {
        return element; 
    });
    
    return cloneList.sort(function(a, b) {
        var A = a[property];//.toUpperCase(); // ignore upper and lowercase
        var B = b[property];//.toUpperCase(); // ignore upper and lowercase
        return comparator(A, B);
    });
}

function comparator(a, b) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

function sortAndGroup(list, groupBy, sortBy) {
    var cloneList = list.map(function (element) {
        return element; 
    });
    
    return cloneList.sort(function(a, b) {
        return comparator(a[groupBy], b[groupBy]) || comparator(a[sortBy], b[sortBy]);
    });
}

function fullName(list) {
    var cloneList = list.map(function (element) {
        return element; 
    });
    
    var fullName = [];
    var specialization = [];
    var newList = [];
    var len = cloneList.length;
    for(var i = 0; i < len; i++) {
        fullName[i] = ''.concat(cloneList[i]['lastName'],' ', cloneList[i]['firstName']);
        specialization[i] = cloneList[i]['specialization'];
        newList.push({
            name: fullName[i],
            specialization: specialization[i]
        });
    }
    
    return sortAlphabetical(newList, 'name');
}

// function myFunction(list, i) {
//     list[i].name = ''.concat(list[i]['lastName'],' ', list[i]['firstName']);
//     delete list[i].lastName;
//     delete list[i].firstName;
//     return list[i];
// }

var myFuncList = [];

function makeFuncList(list) {
    var cloneList = list.map(function (element) {
        return element; 
    });
    var len = list.length;
    for (var i = 0; i < len; i++) {
        myFuncList.push(getObject);
    }
    
    function getObject(index) {
        if(typeof(cloneList[index].name) === 'undefined') {
            cloneList[index].name = ''.concat(cloneList[index]['lastName'],' ', cloneList[index]['firstName']);
            delete cloneList[index].lastName;
            delete cloneList[index].firstName;
            return cloneList[index];
        } else {
            return cloneList[index];
        }
    }
}

function display(list) {
    for(list.property in list) {
      console.log(list.property, '= ', list[list.property]);
    }
}

console.group('Exercitiul 5');

console.group('Original list:');
display(personsList);
console.groupEnd();

console.log('-----------------------------------');

console.group('a). List sorted by first name:');
display(sortAlphabetical(personsList, 'firstName'));
console.groupEnd();

console.log('-----------------------------------');

console.group('b). List sorted by age and grouped by specialization:');
display(sortAndGroup(personsList, 'specialization', 'age'));
console.groupEnd();

console.log('-----------------------------------');

console.group('c). Full name list & specialization in alphabetical order:');
display(fullName(personsList));
console.groupEnd();

console.log('-----------------------------------');

console.group('d). Functions list:');
makeFuncList(personsList);
console.log(myFuncList);
console.groupEnd();