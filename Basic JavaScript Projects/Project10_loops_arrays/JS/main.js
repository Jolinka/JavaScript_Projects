
// Assignment 50
function count_To_Twenty() {
    var Digit = "";
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Twenty").innerHTML = Digit;

}


// Assignment 51

var food = ["drumsticks", "Chinese", "Thai", "Italian"]
var content = ""
var i;

function forLoop() {
    for (i = 0; i < food.length; i++) {
        content += food[i] + "<br>";
    }
    document.getElementById("ExecuteForLoop").innerHTML = content;
}



// Assignment 52
function array_Function() {
    var phones = []
    phones[0] = "iPhone"
    phones[1] = "Samsung"
    phones[2] = "Oppo"
    phones[3] = "BlackBerry"

    document.getElementById("Array").innerHTML = "This phone is " + phones[0]

}

// Assignment 53
function constant_function() {
    const car = { type: "Sedan", seats: 4, Engine: "1500cc" }
    car.type = "SUV";
    car.seats = 6;
    car.Engine = "2600cc";
    car.hp = "144hp";

    document.getElementById("Constant").innerHTML = "The car  has the following specs: " + "car type is: " + car.type + " car seats are: " + car.seats + " car Engine is : " + car.Engine + " car horse power is " + car.hp

}


// Assignment 54

function letConcept() {
    var num = 10;

    document.write(num)
    {
        let num = 15;
        document.write("<br>" + num)
    }
    document.write("<br>" + num)


}


// Assignment 55
let human = {
    eyes: "blue",
    age: "21",
    sex: "female",
    complexion: "white",
    description: function(){
        return " Human features are: " + human.age + " " + human.complexion +  " " + human.sex + " " + human.eyes
    }

}

document.getElementById("humanObj").innerHTML = human.description()



// Assignment 56
