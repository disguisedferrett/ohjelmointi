'use strict';
(function(){
 document.addEventListener('DOMContentLoaded',alusta);
function alusta() {
 let piirtoalusta=document.getElementById('piirtoalusta');
 let konteksti=piirtoalusta.getContext('2d');
 let kuva=new Image();
 kuva.src="kukka.png";
 kuva.onload=piirrakuva;
 konteksti.fillStyle='pink';
 konteksti.arc(150,100,90,0,2*Math.PI);
 konteksti.fill();
 konteksti.beginPath();
 konteksti.fillStyle='rgba(45,45,200,0.5)';
 konteksti.arc(100,100,90,0,2*Math.PI);
 konteksti.fill();
 konteksti.beginPath();
 konteksti.lineWidth=3;
 konteksti.moveTo(300,300);
 konteksti.lineTo(200,250);
 konteksti.lineTo(400,250);
 konteksti.closePath();
 konteksti.stroke();
 function piirrakuva() {
 konteksti.drawImage(kuva,100,200);
 konteksti.drawImage(kuva,100,300);
 }
}
})();