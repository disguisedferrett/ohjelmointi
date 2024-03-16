w3.slideshow(".robotto", 0);

function kaskyt() {
  let kasky = document.getElementById("kasky").value;
  

  if (kasky == "robotto.wave();") {
    document.getElementById("kuva").innerHTML= "<img class='wave' src='r2.png' width='50' height='200'>" + "<img class='wave' src='r3.png' width='50' height='200'>";
    w3.slideshow(".wave", 500);
    document.getElementById("stand").style.display= "none";
    return
  }

  else if (kasky == "robotto.jump();") {
    document.getElementById("kuva").innerHTML="<img class='jump' src='r1.png' width='50' height='200'>" + "<img class='jump' src='r4.png' width='50' height='250'>";
    w3.slideshow(".jump", 500);
    document.getElementById("stand").style.display= "none"
    return
  }
  else if (kasky == "robotto.walk();") {
    document.getElementById("kuva").innerHTML="<img class='walk' src='r5.png' width='50' height='200'>" + "<img class='walk' src='r6.png' width='50' height='200'>";
    w3.slideshow(".walk", 500);
    document.getElementById("stand").style.display= "none";
    return
  }
  else {
    alert("Syntax error!");
  }
 
  
}

function pois() {
    document.getElementById("kuva").innerHTML = "";
    document.getElementById("stand").style.display="block";
    document.getElementById("kasky").value = "";
}