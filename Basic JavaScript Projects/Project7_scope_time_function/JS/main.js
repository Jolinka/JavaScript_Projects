// Assignment 39

var global = 10
function accessGlobal() {
    document.getElementById("globalVar").innerHTML = global + 10
}

function accessLocal() {
    var local = 5;
    document.getElementById("localVar").innerHTML = local + 20


}

function error() {
    document.getElementById("err").innerHTML = local;
}

// Assignment 40

function displayDate() {
    if (new Date().getHours() < 5) {
        document.getElementById("date").innerHTML = "How are you feeling today"
    }
    else {
        document.getElementById("date").innerHTML = "Hey"
    }
}


// Assignment 41
function displayMood() {
    var myMood = "happy"
    if (myMood === "happy") {
        document.getElementById("mood").innerHTML = "Yayy"
    }
    else {
        document.getElementById("mood").innerHTML = ":("
    }

}

// Assignment 42
function foodAnswer() {
    var foodVal = document.getElementById("myFood").value

    if (foodVal == "Pizza") {
        document.getElementById("foodValue").innerHTML = " Great I love Pizza"
    }
    else {
        document.getElementById("foodValue").innerHTML = " not the one I wanted"

    }
}


// Assignment 43

function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning time!"
    }
    else if(Time > 12 == Time < 18){
        Reply = "It is evening time."
    }
    else{
        Reply = "It is evening time."
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}

