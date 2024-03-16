function tarkistus() {
    let message = document.getElementById("viesti");
    let x = document.getElementById("numero").value;
    message.innerHTML = "";
    try {
        if (x == "") throw "tyhjä";
        if(isNaN(x)) throw "ei numero";
        x = Number(x);
        if(x < 0) throw "liian pieni";
        if(x > 100) throw "liian suuri";

    }
    catch(err) {
        message.innerHTML = "Syötetty numero on " + err;
    }
}