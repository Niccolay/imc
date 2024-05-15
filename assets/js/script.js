function mostr1() {
    document.getElementById("id1").classList.remove("ocul");
    document.getElementById("id2").classList.add("ocul");
    document.getElementById("resp").classList.add("ocul");
    document.getElementById("id0").classList.add("ocul");
    document.getElementById("id3").classList.add("ocul");
    document.getElementById("id4").classList.add("ocul");
    document.getElementById("imgato").classList.add("ocul");
}
function mostr2() {
    document.getElementById("id2").classList.remove("ocul");
    document.getElementById("id1").classList.add("ocul");
    document.getElementById("resp").classList.add("ocul");
    document.getElementById("id0").classList.add("ocul");
    document.getElementById("id3").classList.add("ocul");
    document.getElementById("id4").classList.add("ocul");
    document.getElementById("imgato").classList.remove("ocul");
}
function mostr() {
    document.getElementById("id0").classList.remove("ocul");
    document.getElementById("id1").classList.add("ocul");
    document.getElementById("id2").classList.add("ocul");
    document.getElementById("resp").classList.add("ocul");
    document.getElementById("id3").classList.add("ocul");
    document.getElementById("id4").classList.add("ocul");
    document.getElementById("imgato").classList.add("ocul");
}
function mostr3() {
    document.getElementById("id3").classList.remove("ocul");
    document.getElementById("id1").classList.add("ocul");
    document.getElementById("id2").classList.add("ocul");
    document.getElementById("id0").classList.add("ocul");
    document.getElementById("id4").classList.add("ocul");
    document.getElementById("imgato").classList.add("ocul");
    document.getElementById("resp").classList.add("ocul");
}
function mostr4() {
    document.getElementById("id4").classList.remove("ocul");
    document.getElementById("id1").classList.add("ocul");
    document.getElementById("id2").classList.add("ocul");
    document.getElementById("id0").classList.add("ocul");
    document.getElementById("id3").classList.add("ocul");
    document.getElementById("imgato").classList.add("ocul");
    document.getElementById("resp").classList.add("ocul");
}

function imc() {
    document.getElementById("resp").innerHTML="";
    document.getElementById("resp").classList.remove("ocul");
    var a = parseFloat(document.getElementById("peso").value);
    var b = parseFloat(document.getElementById("altura").value);
    var d = document.getElementById("nombre").value;
    var c = a / (b * b);

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
    document.getElementById("resp").innerHTML = d+" tiene "+(a*7).toFixed(0)+" años caninos";
}
function gato() {
    document.getElementById("resp").innerHTML = "";
    document.getElementById("resp").classList.remove("ocul");
    var a = parseFloat(document.getElementById("nacimiento").value);
    var d = document.getElementById("nombre1").value;
    var b = 16 * Math.log(a) + 31;
    document.getElementById("resp").innerHTML = d+" tiene "+b.toFixed(0)+" años caninos";
}


var e;
var q; 
function registro() {
    e = document.getElementById("usser").value;
    q = document.getElementById("pass").value;
    document.getElementById("id0").reset();
    alert("Datos guardados.")
}
function inicio() {
    var d = document.getElementById("usser").value;
    var e = document.getElementById("pass").value;
    if (e === d && q === e) {
        alert("BIENVENIDO " + e + "!");
    } else {
        alert("Intenta de nuevo.");
    }
}

function fisi() {
    document.getElementById("resp").classList.remove("ocul");
    var a = parseFloat(document.getElementById("edad1").value);
    var b = parseFloat(document.getElementById("fis").value);
    var c;
    if (a<=3 && a>0) {
        c=12+(b*0.5);
    } else if (a <= 6 && a>3) {
        c=10+(b*0.6);
    } else if (a <= 12 && a>6) {
        c=9+(b*0.7);
    } else if (a <= 18 && a>12) {
        c=8+(b*0.8);
    } else if (a <= 64 && a>18) {
        c=7+(b*0.9);
    } else {
        c=7+(b*0.8);
    }
    document.getElementById("resp").innerHTML = "Son recomendables "+c+" horas de sueño."
}

function emaill() {
    document.getElementById("resp").classList.remove("ocul");
    var a = document.getElementById("nombre2").value;
    var b = document.getElementById("apellidos").value;
    var c = document.getElementById("fecha").value;
    var no = a.split(" ");
    var ini = "";
    for (var i=0; i<no.length; i++) {
        ini += no[i].charAt(0);
    }
    var ape = b.split(" ");
    var ini2 = ape[0]+ape[1].charAt(0);

    var c2 = c.split("-");
    var o = c2[0];
    var s = c2[1];
    document.getElementById("resp").innerHTML = "Direccion de correo electronico: "+ini.toLowerCase()+ini2.toLowerCase()+o+s+"@gmail.com";
}
