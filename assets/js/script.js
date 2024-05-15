function mostr1() {
    document.getElementById("id1").classList.remove("ocul");
    document.getElementById("id2").classList.add("ocul");
    document.getElementById("resp").classList.add("ocul");
    document.getElementById("id0").classList.add("ocul");
}
function mostr2() {
    document.getElementById("id2").classList.remove("ocul");
    document.getElementById("id1").classList.add("ocul");
    document.getElementById("resp").classList.add("ocul");
    document.getElementById("id0").classList.add("ocul");
}
function mostr() {
    document.getElementById("id0").classList.remove("ocul");
    document.getElementById("id1").classList.add("ocul");
    document.getElementById("id2").classList.add("ocul");
    document.getElementById("resp").classList.add("ocul");
}


function imc() {
    document.getElementById("resp").innerHTML="";
    document.getElementById("resp").classList.remove("ocul");
    var a = parseFloat(document.getElementById("peso").value);
    var b = parseFloat(document.getElementById("altura").value);
    var d = document.getElementById("nombre").value;
    var c = a / (b * 2);

    if (c < 18) {
        document.getElementById("resp").innerHTML = "El IMC de "+d+" es: " + c.toFixed(2) + "    BAJO PESO";
    } else if (c >= 18 && c <= 23) {
        document.getElementById("resp").innerHTML = "El IMC de "+d+" es: "+ c.toFixed(2) + "    PESO NORMAL";
    } else if (c >= 24 && c <= 28) {
        document.getElementById("resp").innerHTML = "El IMC de "+d+" es: " + c.toFixed(2) + "    SOBREPESO";
    } else {
        document.getElementById("resp").innerHTML = "El IMC de "+d+" es: " + c.toFixed(2) + "    OBESIDAD";
    }
}

function perro() {
    document.getElementById("resp").innerHTML = "";
    document.getElementById("resp").classList.remove("ocul");
    var a = parseFloat(document.getElementById("nacimiento").value);
    var d = document.getElementById("nombre1").value;
    document.getElementById("resp").innerHTML = d+" tiene "+a*7+" años caninos";
}
function gato() {
    document.getElementById("resp").innerHTML = "";
    document.getElementById("resp").classList.remove("ocul");
    var a = parseFloat(document.getElementById("nacimiento").value);
    var b = 16 * Math.log(a) + 31;
    document.getElementById("resp").innerHTML = d+" tiene "+b+" años caninos";
}


var a;
var b; 
function registro() {
    a = document.getElementById("usser").value;
    b = document.getElementById("pass").value;
    document.getElementById("id0").reset();
}
function inicio() {
    var d = document.getElementById("usser").value;
    var e = document.getElementById("pass").value;
    if (a === d && b === e) {
        alert("BIENVENIDO " + a + "!");
    } else {
        alert("Intenta de nuevo.");
    }
}
