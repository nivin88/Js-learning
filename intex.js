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




