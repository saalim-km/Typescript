// variable
var username = 'salim';
var age = 18;
var isActive = true;


//conditional
var score = 85;
if (score > 80) {
    console.log('A');
}
else if (score > 50) {
    console.log('B');
}
else {
    console.log('C');
}


//? loops
for (var i = 0; i <= 5; i++) {
    console.log(i);
}
var arr = [1, 2, 3];
arr.forEach(function (num) { return console.log(num); });
var count = 0;
while (count < 3) {
    console.log(count);
    count++;
}
do {
    console.log(' hi nigga');
} while (count < 3);



//? array
var fruits = ['apple', 'orange', 'banana'];
console.log(fruits[0]);
fruits.push('orange');
fruits.pop();


//? functions
function greet(name) {
    return "hello ".concat(name);
}
console.log(greet('salim'));
var add = function (a, b) { return a + b; };
console.log(add(10, 20));
