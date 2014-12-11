//This is a comment that the computer will ignore.
//It helps you make sense of your code or someone else.
//Can also do multiline comments
/*I'm
a
nifty multiline comment!*/

//MAIN USES
//Originally used for simple tasks like onscreen calculations
//Can be used to manipulate objects on the page that are in the DOM (show,hide,animate,replace elements)
//DOM(Document Object Model)

//IF using a JavaScript library, always include it before any code that references it.
<script src="myscript.js"></script>
//OR in html 
<script>
alert('hi!');<
/script> 

//Can see/test script by:
	//the console (built in tool in your browser)
	//Alerts (pop-ups)
		alert("Hellow World!");

//Tells you length of your Name
"yourName".length

//Does basic math (also -,*,/,etc)
3+4

//This brings up a popup and then you click ok to confirm. "true" pops up in the console.
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');

//A prompt comes up and has a spot for you to fill in "Brian" which then shows up in console
prompt("What is your name?")

//DATA SECTION/TYPES

//Example 1 (Numbers: are quantities. Can do math with them)
3+4

//Example 2 (Strings: sequence of characters, like the leters of alphabet, spaces, and even numbers)
"Ryan"
"4"
"What is your name?"
//Strings are useful for labels, names and content for your programs.

//To make a number in your code (rather than a string), drop the quots and just use the numerals
42
//To write a string, use quots:
"what is your name?"

//Example 3
	//Boolean - true,false

//Type 4
	//Undefined (no value)

//Type 5
	//Arrays are used to hold a collection of data, of any data type.
["Snoopy","Charlie Brown", "Patty", "Violet"];

//Variables in JS (simply a container for a value)
var name="Zach";
var numberOfWidgets=10
var isCodingCool=true;

//Arrays can store other Arrays
	//declare the first array
		var toyotas=["Camry","Prius"];
	//declare second array
		var porsches=["Carrera","Boxer"];
	//declare third array that contains both arrays
		var cars=[toyotas, porsches];
			//multi-dimensional array
//Arrays can be stored in variables

//LOGIC
	//The control flow of your program
//TESTING
	//Any test returns a boolean true or false
	"stringone"==="string two";
	>false
		//three equal signs checks the object type
	//To test if two strings are NOT equal
	"stringone"!=="string two";
	>true
	5>10;
	>false

//If...Then...Else...Then
	if(5>10){
		console.log("You'll never see this because 5 is not greater than 10")
	} else{
		console.log("You will se this because 5 is not greater than 10");
	}
//If...Then...Else If...Then...Else...Then
	//Else if is another condition to evaluate in the case where if is not true and you have another condition to look at before else.
		if(5>10){
			console.log("You'll never see this becasue 5 is not greater than 10");
		}else if (5===5){
			console.log("Yes, 5 really is eqaul to 5.")
		}else{
			console.log("You will see this because 5 is not greater than 10");
		}
//FUNCTIONS
	//a way to encapsulate code for a later use
	//can take arguments, which are used as variables insdie the function 
	function addTwo(some_number){
		return some_number+2;
	}
	console.log(addTwo(4));
	>6
	//Once function declared, it can be invoked by calling its name and supplying it with any arguments
	function alertName(somePersonsName){
		return alert(somePersonsName);
	}
	alertName("Zach");