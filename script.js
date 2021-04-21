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

 var name = prompt('Hello, What is your name?');
greeting(name);

//How do arguments work in functions?
//How do  we add 2 numbers together in a function?
function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);


