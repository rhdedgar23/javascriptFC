//console.log(`Hello`);
//console.log(`World!`);

//window.alert(`This is an alert!`);
//window.alert(`This is another alert!`);

//This is a comment. 

/* 
    This is a 
    multiline
    comment
*/


/*
document.getElementById("myH1").textContent="Hello";
document.getElementById("myP").textContent="I like pizza!";
*/


/* 
let firstName = "Mariana";
let firstNameType = typeof firstName;
console.log(typeof firstNameType);
console.log(`Your name is ${firstName}.
The JS variable that stores your name is called firstName. 
It's of type ${firstNameType}.`);

document.getElementById("p1").textContent=`Your name is ${firstName}.`;
document.getElementById("p2").textContent="The JS variable that stores your name is called firstName.";
document.getElementById("p3").textContent=`It's of type ${firstNameType}.`;
*/


/*
User input --> Easy way = window prompt
*/
/*
let username;
username= window.prompt("Please enter you username: ");
console.log(username);
*/

/*
User input --> HTML Textbox = Professional way
*/
/*
let username;
document.getElementById("mySubmit").onclick= function(){
    username= document.getElementById("myText").value;
    //console.log(username);
    document.getElementById("myH1").textContent= `Hello ${username}`;
}
*/

/*
Type Conversion
*/
//Number()
//String()
//Boolean()
/*
let age;
document.getElementById("mySubmit").onclick= function(){
    age= document.getElementById("myText").value;
    //Without conversion
    console.log(`Without conversion.\nAge: ${age} (${typeof age})`);
    //With conversion
    age=Number(age);
    console.log(`\nWith Conversion. Age: ${age} (${typeof age})`);
}
*/

/*
CONSTANTS
*/
// constant --> a variable that can't be changed. 
// Following convention, constants are capitalized. 
const PI= 3.14159;
let radius;
let circumference;

//If we attept to change the constant PI, javascript will throw exception. 
//PI=400;

document.getElementById("mySubmitButton").onclick= function(){
    radius= Number(document.getElementById("myInput").value);
    circumference= 2*PI*radius;

    document.getElementById("myP2").textContent= `The circumference of the circle of radius ${radius} is ${circumference} cm.`;
}


