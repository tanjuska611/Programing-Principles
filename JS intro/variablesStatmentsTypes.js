//Variable declaration and initialization
//1. Create several variables using different letter cases and beginning characters. Check if they
// still exist if you refer to them in different case - does case matter here? Try to declare a variable
// starting with number as the first character.

 var $tanja=0.25;
 var _senda="pas";
 var LENCA="BEBA"
 console.log($tanja,LENCA,_senda);

//  2. Save a string (text) describing your current mood in a variable and print it out in console.
var feeling="osecam se odlicno danas";
console.log(feeling);

// 4. Play around in the console: add, subtract, multiply and divide some numbers. Use numbers
// stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3.
// Why do we get these results?

var sum=3*5-7/3;
var x=4/2-1.14*3;
var k;
var s=250;
k=++s;

var gram=1.2*1000;
console.log(s,k,sum,gram,x);

// How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What
// about Tom who is being late half an hour? It is hard to be on time these days…

var Anna = 5;
var Tom =30;
var wait=Tom*60;
console.log(wait + " seconds");

// 7. How many MB of additional memory we have if we buy a 4GB USB stick? How many news
// articles each in size 98KB can fit in it?

var mb=4*1024;
var news=mb*1024/98;
console.log(mb,news);

// 

// 9. Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?


//  a*=2;
//  b+=3;
//  c/=5;
//  d-=7;


//8.  Create the following variables:
// - a variable containing your name,
// - a variable containing your age,
// - a variable describing if you have a cat or not.
// * Each variable has to start with a different type of character.
// Print them all out in the console and check their types.

var _name="Tanja";
var $age=29;
var cat=false;

console.log(typeof cat,typeof _name,typeof $age);
console.log(_name,$age,cat)

// object
var a=null;
console.log(typeof(a));

var p=false;
var q=false;
var c= p||q;

console.log(c);


// 14. If the variable age stores the information about user’s age, how we can check whether it
// contains a correct value? Write expressions for checking:
// ● Is age negative value
// ● Is age greater than 120

var userAge=0;
if (userAge<=0){
    console.log("negative value");} 
    else if (userAge>120){
        console.log("greater then 120");}  
    





// 15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. If
// we store the current speed value in the variable speed. Write an expression which will check if
// we are driving drive safely or not? (true if we are driving safe and false if not)
var speed = 150;
if (speed>60&& speed<120){ console.log(true);} else {console.log(false);}




