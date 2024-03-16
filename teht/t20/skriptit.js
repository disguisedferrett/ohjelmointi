class Lemmikit {
    constructor(laji, vari, svuosi) {
      this.laji = laji;
      this.vari = vari;
      this.svuosi = svuosi;
  
    }
    klaji() {
        let laji2 = "koira";
        return laji2.getElementById() - this.laji;
    }

    vari2() {
        let kvari = "ruskea";
        return kvari.getElementById() - this.vari;
    }

    ika() {
      let date = new Date();
      return date.getFullYear() - this.svuosi;
    }

    
  }
  
  let koira = new Lemmikit("koira", "ruskea", 2013);
  document.getElementById("demo").innerHTML = "Lemmikkini on " + koira.laji + ", se on " + koira.vari + " ja iältään " + koira.ika() + " vuotta.";
  