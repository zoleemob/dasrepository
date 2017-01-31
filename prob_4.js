function User(firstName, lastName, age, email) {
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    
    this.getFirstName = function() {
        return firstName;
    };
    
    this.isAdult = function (){
        return (this.age) >= 18 ? true : false;
    };
}

function createUser(firstName, lastName, age, email) {
    return new User(firstName, lastName, age, email);
}

// users array
var users = [];
var n = 5;
for (var i = 0; i < n; i++) {
    var firstName = "Ivan_" + (i+1);
    var lastName = "Turbinca_" + (i+1);
    var max = 22;
    var min = 12;
    var age = Math.floor(Math.random() * (max - min)) + min;
    var email = 'yahoo';
    window['User_' + (i+1)] = createUser(firstName, lastName, age, email);
    users.push(window['User_' + (i+1)]);
}

var P = new User('Ion', 'Gigilescu', 50, 'gmail');
console.group('Exercitiul 4');
console.log('createUser(\'Petru\', \'Hama\', 12, \'yahoo\')'
            + ':: ', createUser('Petru', 'Hama', 12, 'yahoo'));
console.log('var P = new User(\'Ion\', \'Gigilescu\', 50, \'gmail\');' + ':: ', P);
console.log('P.getFirstName()' + ':: ' + P.getFirstName());
console.log('P.isAdult()' + ':: ' + P.isAdult());

//display users
users.forEach(function(element) {
    console.log('User_' + (users.indexOf(element) + 1) + '.userFirstName:: ' + element.getFirstName() + ',',
                'age:: ' + element.age + ',',
                'isAdult():: ' + element.isAdult());
});

console.groupEnd();