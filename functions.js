function calculate(arr){
    console.log("a");
    var a = arr[0].value * arr[3].value;
    console.log("b");
    var b = arr[1].value * arr[4].value;
    console.log("c");
    var c = arr[2].value * arr[5].value;
    console.log("d");
    var d = a + b + c;
    console.log("e");
    return d;
}

function dotProduct(){
    console.log("1");
    var form = document.getElementById("form1");
    console.log("2");
    var n;
    console.log("3");
    n = calculate(form.elements);
    console.log("4");
    document.getElementById("result").innerHTML = "The dot product is " + n;
    console.log("5");
    console.log(n);
}
