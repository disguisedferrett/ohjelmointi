let piirtoalusta = document.getElementById('piirtoalusta');
let konteksti = piirtoalusta.getContext('2d');
konteksti.fillStyle = 'green';
// x y lev kork
konteksti.fillRect(10, 10, 40, 500);
konteksti.fillStyle = 'lightblue';
konteksti.fillRect(200, 200, 40, 100);
konteksti.strokeStyle = 'violet';
konteksti.lineWidth = 7;
konteksti.strokeRect(200, 200, 40, 100);