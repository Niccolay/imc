function mostr1() {
    document.getElementById("id1").classList.remove("ocul");
    document.getElementById("id2").classList.add("ocul");
    document.getElementById("resp").classList.add("ocul");
}
function mostr2() {
    document.getElementById("id2").classList.remove("ocul");
    document.getElementById("id1").classList.add("ocul");
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
    var b = new Date().getFullYear();
    var c = b-a;
    var d = document.getElementById("nombre1").value;
    document.getElementById("resp").innerHTML = d+" tiene "+c*7+" años caninos";
}
function gato() {
    document.getElementById("resp").innerHTML = "";
    document.getElementById("resp").classList.remove("ocul");
    var a = parseFloat(document.getElementById("nacimiento").value);
    var b = new Date().getFullYear();
    var d = document.getElementById("nombre1").value;
    var c = b-a;
    if (c <= 1) {
        document.getElementById("resp").innerHTML = d+" tiene 15 años felinos";
    } else {
        c = 15+(c-1)*4;
        document.getElementById("resp").innerHTML = d+" tiene "+c+" años felinos";
    }
}
