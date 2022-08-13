// Assignment 35
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// Assignment 36

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");


function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year
}


// Assignment 37

function FoodGenerator(noodles, burger, fries){
    this.noodles = noodles
    this.burger = burger
    this.fries = fries
}
var menu1 = new FoodGenerator("Thai Noodles", "Zinger", "loaded Fries")
var menu2 = new FoodGenerator("Chinese Noodles", "Mighty", "Cheese Fries")

function foodItems(){
    document.getElementById("New_and_This").innerHTML = " I am gonna order " + menu1.burger + " " + menu1.fries + " " + menu2.noodles
}

// Assignment 38
function fun1(){
    function fun2(){
        document.getElementById("Nested_Func").innerHTML = "I am being called from the nested function"
    }
    return fun2()
}

function nestedCall(){
    fun1()
}