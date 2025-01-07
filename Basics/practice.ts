//? implicit and explicit Types. 

//? special type any disables the type checking (its not safe)
let string:any = 10;
console.log(typeof string);


//? unknown 'an alternative for any (but its safe)';
let w:unknown = 1;
w = 'string'
w = {
    name : 'salim'
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//? arrays
const names:(string | number)[] = ['salim','ahtul','amal'];
names.push(10);

//? Readonly
//?The readonly keyword can prevent arrays from being changed.
let cars: readonly string[] = ['mustang','ferrari'];
cars.push('ford')


//? Type inference
//? TypeScript can infer the type of an array if it has values.
let numbers = [1,2,3]
numbers.push(4)
console.log(numbers);


//////////////////////////////////////////////////////////////////////////////////////////////
//? Tuples
//? A tuple is a typed array with a pre-defined length and types for each index.

//? To define a tuple
let tuples : [number , string , boolean];

//? Initialize a tuple
tuples = [10,'salim',false];
console.log(tuples[0]);
tuples.push(true) //! no type safety in tuple index 3+

//? Readonly tuple
let readOnlyTuple:readonly [number , boolean , string];
readOnlyTuple = [10,true,'kochi'];
readOnlyTuple.push('kakkanad')//! it will throw an error.


//? Named Tuples
//? Named tuples provide more context for what our index values represent.
const graph : [x : number , y : number] = [55.5 , 66.8];

//? Destructuring Tuples
const [x,y] = graph;
console.log(x , y);



/////////////////////////////////////////////////////////////////////////////////////////
//? Object Types
const bike : {type : string , model : string , year : number} = {
    type : 'Royal enfield',
    model : 'Continental GT',
    year : 2009
}
console.log(bike.type);


//? Type Inference
let car = {
    model : 'supra',
}
console.log(car.model);
car.price = 10000000; //! it will throw an error.

//? Optional properity
const optionalObj:{name : string , place?:string} = {
    name : 'sulaimaan',
}


//? Index Signature
const nameAge: {[index : string] : string}  = {}
nameAge.hazard = 'chelsea';
nameAge.10 = 'messi'//! it will throw an error.



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? Enums
//? initially a zero will be initialized to the first value
//? An enum is a special "class" that represents a group of constants (unchangeable variables).
enum cardinalDirections {
    north = 1,
    east ,
    south ,
    west
}
console.log(cardinalDirections.west);

//? Numeric Enums - Fully Initialized
//? You can assign unique number values for each enum value. Then the values will not incremented automatically:
enum statusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
console.log(statusCodes.BadRequest);

//? String Enums
enum Directions { 
    north = 'north',
    east = 'east',
    south = 'south',
    west = 'west'
}
console.log(Directions.north);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//? Type Aliases
type CarYear = number
type CarType = string
type CarModel = string
type car = {
    year : CarYear,
    type : CarType,
    model : CarModel
}

//? defined type seperately and used it.
const carYear:CarYear = 2000;
const carModel: CarModel = 'Supraa';
const carType : CarType = 'Flying Type';

const obj:car = {
    year : carYear,
    type : carType,
    model : carModel,
}


//? Interface
//? Interfaces are similar to type aliases, except they only apply to object types.
interface Rectangle {
    heigth : (number | string),
    width? : number
}

const rectange: Rectangle  = {
    heigth : '10',
    width : 20
}

//? Extending Interface
//? extending the originial interface with new properity.
interface ColoredRectange extends Rectangle {
    color : string,
}

const coloredRectange : ColoredRectange = {
    heigth : 20,
    width : 50,
    color : 'blue'
}


//? Union
function printStatusCode(code : number | string) {
    console.log(code)
}

printStatusCode(404);
printStatusCode('404');



type a = number;
type b = number;
type name = string;


//////////////////////////////////////////////////////////////////////////////////////////
//?  Functions
//!  If no parameter type is defined, TypeScript will default to using any
function getSum(num1 : a, num2 : b): a {
    return num1 + num2;
}
console.log(getSum(10,20));


//? Void return type
function returnNothing(name : name): void {
    console.log(`hi ${name}`);
}
returnNothing('salim');


//? optional parameters '?'
function optionalTrade(car1: name , car2 : name , car3 ?: (name | a)): void {
    console.log(car1,car2,car3);
}
optionalTrade('supra','toyota',50)


//? Default parameters
function defaultValues(num : a , pi : a = 1.4): a {
    return num * pi;
}
console.log(defaultValues(10));



//? Named Parameters
function namedParameters(name1 : name,name2 : name): void {
    console.log(name1,name2);
}
namedParameters('ronaldo','messi');

function objDesctructure({name1,name2} : {name1 : name , name2 : name}): void {
    console.log(name1,name2);
}
objDesctructure({name1 : 'salim' , name2 : 'ronaldo'});






