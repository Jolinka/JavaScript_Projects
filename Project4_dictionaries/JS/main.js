// Assignment 24

function showDictionary() {
    var myFood = {
        Chinese: "Chowmein",
        Italian: "Pizza",
        USA: "Fries"
    }
    document.getElementById("Dictionary").innerHTML = myFood.Chinese;
}


// Assignment 25

function deleteValue() {
    var myFood = {
        Chinese: "Chowmein",
        Italian: "Pizza",
        USA: "Fries"
    }
    delete myFood.Chinese;
    document.getElementById("delValue").innerHTML = myFood.Chinese;
}



// Assignment 26

