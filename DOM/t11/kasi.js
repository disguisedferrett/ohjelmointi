'use strict';

class Kasi extends Pakka {
  constructor() {  //tÃƒÂ¤tÃƒÂ¤ ei tarvita
    super();  //tÃƒÂ¤tÃƒÂ¤ kutsutaan automaattisesti
  }

   get Summa() {
    return this.kortit.reduce((Summa,kortti)=>Summa+kortti.Arvo,0);
  }

};