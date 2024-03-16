"use strict";
x = 3.14;
document.getElementById("virhe").innerHTML = x;

function tarkistaSposti() {
    let x = document.forms["form1"]["Sähköpostiosoite"].value;
    let patt = /@/;
    if (patt.test(x) != true){
        alert("Sähköposti väärässä muodossa (@-merkki puuttuu)")
    }
}
