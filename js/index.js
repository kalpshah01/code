hosi();
function outer(){
    let name='kalp';
   return function inner(){
        console.log(name);
    }

}
let a=outer();
a();
console.log(typeof(a));

// closure functions  that remeber its lexical environment
// Anonymous function not a having function name 
// https://excalidraw.com/ 
// board link for drawing

// function are hoisted means call at top but can define at botttom of page but must have function name and not store in any variable
// variable functin (first class function) 
// if function storge in variable  then function not hoisted can't call at top without define its
// IIFE - Immediately invoked function expression
// Ater the creation of function it self calld with ()()
function hosi()
{
    console.log("hosing function");
}
function hello(){
    console.log("hello function");
}
hello(); 
// closure functions 
// why  const function?

(function hello(name,age){
    console.log(`My name is ${name} and my age is ${age}`);
})("kalp",24);

(name=>{    console.log(`My name is ${name}`);
})("kalp");
// if single pararmeter so need to use () directly use name

( name=>{
return console.log(`My name is ${name}`);

})("kalp");
 
// higher order function a function take autoher function as parameter 

function math(a,b,fun){
    return fun(a,b);
}
function sum(a,b){ 
    return a+b;
    
}
function muli(a,b){ 
    return a*b;
}

console.log(math(5,6,sum));