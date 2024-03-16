(function () {
  const henkilo =
  {
  etuNimi: "K",

  sukuNimi: "P",

  ika: 35,

  kokoNimi: function() { return `${this.etuNimi} ${this.sukuNimi}` }
  }
  console.log(henkilo.kokoNimi());  // K P
})();

(function () {
  let viesti = "Moi";
  console.log(viesti.toUpperCase()); //Moikkaa
  const henkilo =
  {
  etuNimi: "K",

  sukuNimi: "P",

  ika: 35,
  
  get kokoNimi() {
      return this.etuNimi + " " + this.sukuNimi;
  },
  set nuorenna(luku) {
      this.ika -= luku;
  }
  }
  console.log(henkilo.kokoNimi);  // K P
  henkilo.nuorenna = 2;
  console.log(henkilo.ika); // 33
})();

(function () {
  function Henkilo(etu, suku, ika) {
      this.etuNimi = etu;
      this.sukuNimi = suku;
      this.ika = ika;
  }
  const kafka = new Henkilo("K", "P", 33);
  const jokunen = new Henkilo("Joanna", "Rantakangas", 12);
  for(let i in jokunen){
      console.log(jokunen[i])
  }

})();