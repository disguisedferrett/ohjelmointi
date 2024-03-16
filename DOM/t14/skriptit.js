'use strict';
(function () {
    let piirtoalusta;
    let konteksti;
    document.addEventListener('DOMContentLoaded', alusta);
    function alusta() {
        piirtoalusta = document.getElementById('piirtoalusta');
        konteksti = piirtoalusta.getContext('2d');
        //x y leveys korkeus vari
        piirra(42, 50, 65, 10, 'brown');
        piirra(200, 50, 65, 10, 'brown');
        piirra(50, 300, 200, 30, 'red');
        piirra(132, 200, 50, 50, 'orange');
        piirra(50, 100, 60, 60, 'blue');
        piirra(200, 100, 60, 60, 'blue');
        piirra(250, 270, 30, 30, 'red');
        piirra(20, 270, 30, 30, 'red');

        

        konteksti.font = '40pt Serif';
        konteksti.fillStyle = 'green';
        konteksti.fillText('Naama', 130, 40);
       
        konteksti.font = '80pt Serif';
        konteksti.strokeStyle = 'green';
        konteksti.strokeText(300, 250);
    }
    function piirra(x, y, leveys, korkeus, vari) {
        konteksti.fillStyle = vari;
        konteksti.fillRect(x, y, leveys, korkeus);
        konteksti.strokeStyle = 'blue';
        konteksti.lineWidth = 3;
        konteksti.strokeRect(x, y, leveys, korkeus);
    }
})();