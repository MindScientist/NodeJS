let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField (field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

//console.log(users.sort(byField('name')));
//console.log(users.sort(byField('age')));

function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function() { // функция shooter
            console.log(i); // должна выводить порядковый номер
        };
        shooters.push(shooter);
    }
    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();