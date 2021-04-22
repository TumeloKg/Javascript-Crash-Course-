console.log('hello');

//alert('This is the start.');

//variables
var b = 'smoothie';
console.log(b);

var someNummber = 45;
//console.log(someNummber);

//Manipulating DOM with Javascript
/*....Its just a fancy way of saying
 change HTML with Javascript*/

//var age = prompt('What is your age?');

//document.getElementById('someText').innerHTML = age;


//Numbers in Javascript
var num1 = 15;

//Increment num1 by 1
//num1++;

//Decrement num1 by 1
//num1--;
//console.log(num1);

//Increment/decrement by any number you want
num1 += 5;
console.log(num1);

//Divide, multiply *, remainder %
console.log(num1 / 2);

/* Functions
1.create a funtion
2.call the function
*/
//create
function fun() {
    console.log('this is a function');
}
//call
fun();

/* Lets create a function that takes in a name and 
says hello followed by your name

For Example

Name: "Guru"
Return: "Hello Guru"
*/

function greeting(yourName) {
  var result = 'Hello'+ ' ' + yourName + ' ' + ', Hope you having a good day.'; //String Concatenation
  console.log(result);
}

// var name = prompt('Hello, What is your name?');
//greeting(name);

//How do arguments work in functions?
//How do  we add 2 numbers together in a function?
function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

//While loops
//var num = 0;

//while (num < 100) {
//  num += 1;
//  console.log(num);
//}

//for loops
//for (let num = 0; num <= 100; num++) {
//  console.log(num);
//}

//Data types
//int,char,boolan,
let yourAge = 18;                         //number
let yourName = 'Bob';                     //string
let name = {first: 'Jane', last:'Doe'};   //object
let truth = false;                        //boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random;                                //undefined
let nothing = null;                        //value null

 
//Strings in Javascript (common methods)
let fruit = 'banana';
let moreFruits = 'banana\napple';         //new line


console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.replace('ban', '123'));
console.log(fruit.slice(2,6));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.split(''));

//Arrays
let = fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array ('banana', 'apple', 'orange', 'pineapple');

console.log(fruits[0]);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//array common methods
console.log('Change array to string',fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits); //removes last item
console.log(fruits.push('backberries'), fruits); //appends


let numbers = [5, 70,56,3,10,2,6,1,0];
console.log(numbers.sort(function (a,b) {
  return a-b
})); // sorted in ascending order