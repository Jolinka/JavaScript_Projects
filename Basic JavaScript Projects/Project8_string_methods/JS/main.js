// Assignment 44
function full_Sentence() {
    var str1 = "Hi "
    var str2 = "my name is "
    var str3 = "Jolinka "

    var completeStr = str1.concat(str2, str3)
    document.getElementById("concat").innerHTML = completeStr
}


// Assignment 45
function slice_Method(){
    var sen = "I am Jolinka, I am learning JavaScript here its fun!"
    var sliced = sen.slice(10, 20)
    document.getElementById("slice").innerHTML = sliced
}


// Assignment 46

function string_Method(){
    var num = 10
    document.getElementById("numToString").innerHTML = typeof num.toString() + " " + num.toString()
}


// Assignment 47

function precision_Method(){
    var num = 199.693932834
    document.getElementById("Precision").innerHTML = num.toPrecision(6)
}
