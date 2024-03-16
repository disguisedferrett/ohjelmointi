function tarkistaLomake() {
    let x = document.forms["lomake1"]["etunimi"].value;
    if (x == "") {
      alert("Etunimi pitää antaa");
      return false;
    }
  }