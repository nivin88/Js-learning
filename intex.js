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


    
    

    
   