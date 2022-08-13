//Assignment 16

function Add_Function() {
    var add = 2 + 2;
    document.getElementById("Maths").innerHTML = "<p>2+2 = <br></p>" + " " + add;
}


// Assignment 17
function Subtraction_Function() {
    var sub = 5 - 2;
    document.getElementById("Math").innerHTML = "5-2=" + sub;
}

// Assignment 18

function Multiplication() {
    var simple_Math = 6 * 7;
    document.getElementById("Multi").innerHTML = "6 x 7=" + simple_Math;
}

// Assignment 19

function multipleMathOperations(){
    var answer = (10 + 5) / 10 + 2;
    document.getElementById("multipleOperations").innerHTML = "10 + 5 divided by 10 added 2 equals" + " =" + answer
}

// Assignment 20
function modulusOperation(){
    var answer = 10 % 3;
    document.getElementById("modulus").innerHTML = "10 modulus 3" + " =" + answer
}

// Assignment 21

function unaryOperator(){
    var num = 10;
    document.getElementById("unary").innerHTML = -num
}


// Assignment 22

function onIncrement(){
    var num = 10;
    document.getElementById("increment").innerHTML = ++num
}
function onDecrement(){
    var num = 10;
    document.getElementById("decrement").innerHTML = --num
}

// Assignment 23

function randomGenerator(){
  
    document.getElementById("random").innerHTML = Math.random()
}

