function mySubmit(event) {
    
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Name:', username);
    console.log('Password:', password);


   
    let dataText = `<h2>Data</h2>
        <p><b>Username</b>:${username}</p>
        <p><b>Password</b>:${password}</p>`;
        let result = document.getElementById('result');
        result.innerHTML = dataText; 
        result.style.paddingTop = "2rem";
}
// Increment
var a=45;
++a;
console.log(a);

var a=30;
b=a++;
console.log(b);

// Decrement
var a=70;
b=--a;
console.log(b);

// The else Statement
var car=false
if (car)
{
    console.log("take an carkey")
}
else{
    console.log("go an take the key")
    }

// The else if Statement
    var score = 100;

    if (score < 70) {
        console.log("You need to improve");
    } else if (score <= 80) {
        console.log("Good ");
    } else if (score > 80) {
        console.log("Excellent performance");
    }
    else{
      console.log("fail");
    }


    //while loop
let i = 0;

while (i < 15) {
    console.log(i);
    i++;
}

//do while
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 15);

 // Destructuring Method:
const fruits = ['Graps', 'apple', 'orange'];
const [first, second, third] = fruits;
console.log(first);

// //Array Method:
let color = ['blue','orange','Green'];
// for(let key in color){
//   console.log(color [key]);
// }

//for of method:
for(let colors of color){
  console.log("colors:"+ color);
}


 //for loop
 for(let i=0;i<10;i++)
  console.log(i);

 //for in loop
 //object method:
//  const person = { name: 'Peavin', age: 25, place: 'Orathanadu' };
// for (let key in person) {
//   //concat method
//     console.log(key + ': ' + person[key]);
// }


//continue
for (let i = 0; i < 12; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);
  }

//break
for (let i = 0; i < 20; i++) {
  if (i === 8) {
      break; 
  }
  console.log(i);
}


    
    

    
   