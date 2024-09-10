var globalVar = "I am a global variable";

function outerFunction() {
    console.log(globalVar);
}

function changeGlobalVar() {
    globalVar = "I am changed globally!";
}

let hello ="Hi hello";
function hellolet() {
     console.log(hello);
}
function changingHellolet(){
    hello ="Hell letscope";
    return hello
}
hellolet()
changingHellolet()
function redmi ()
 {
console.log( redmi)
}

function oppo(){
    console.log(oppo)
} 
oppo()

redmi()
var a=10;
var b=30;
function add()
{
    console.log(a+b)
}
add()

 var homework =false
 if(homework)
 {
   console.log("Great job")
 }
 else{
    console.log("Finish yuor homework before playing")
 }
 var cookies=true
 if(cookies){
    console.log("Would you like a cookies")
 }
 else{
    console.log("Time to bake more cookies")
 }

 for(count=10;count>=0;count=count-1)
{
   console.log(count)
}

for(number=1;number<=10;number=number+2)
{
   console.log(number)
}

for(number=2;number<=10;number=number+2)
{
   console.log(number)
}
  
// logical AudioNode(false an all statement are false)

console.log(false && true && true)

console.log(true || false ||true)
// (! is a not operators)
console.log(!false)

var color = "green"
if(color == "red")
{
   console.log("stop")
}

if(color == "yellow")
{
   console.log(" ready")
}

if(color == "green")
{
   console.log("go")
}
 
var a=5
{
   console.log(a)
}

var a=20
var b=10
var c=a*b
console.log(c)

var a=25
var b=a++
console.log(b)
console.log(a)
{
let a=20
let b=a--
console.log(b)
console.log(a)
}

{
   const a=30
   const b=40
   const c=a-b
   console.log(c)
}

var a="Banana"
var b=30
console.log(typeof(a))

var a=30
var b=45

function add()
{
   console.log(a+b)
}
 add()

 var a="van"
 var b="car"
 var c="bus"
function favourite()
{
   console.log("This is a"+" car")
   console.log("This is a"+" van")
   console.log("This is a"+" bus")
}
favourite()

var length=30
var breadth=25  
 function area(l,d)
 {
   var t=l+d
   console.log("area is:"+t)

 }
 area(30,25 )