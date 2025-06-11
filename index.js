function additionner(a, b) {
  const result = a + b;
  console.log('Le résultat est', result);
  return result;
}

function division(x, y) {
  if (y === 0) {
    console.log('Division par zéro !');
    return null;
  }
  return x / y;
}

console.log(additionner(5, 3));

const message = 'Bonjour le monde';

console.log('Message:', message);

const tableau = ['pomme', 'banane', 'orange'];
console.log('Tableau:', tableau);

const nombre = '10';
if (nombre === 10) {
  console.log('Nombre égal à 10');
}

function toutFaire() {
  console.log('Début');
  const a = 1;
  const b = 2;
  const c = 3;
  const d = 4;
  const e = 5;
  const f = 6;
  const g = 7;
  const h = 8;
  const i = 9;
  const j = 10;
  console.log(a, b, c, d, e, f, g, h, i, j);
  console.log('Fin');
}

toutFaire();

setTimeout(() => {
  console.log('Timeout');
});

function fetchData() {
  fetch('https://api.example.com').then((response) => response.json());
}

fetchData();

module.exports = {
  additionner,
  division,
};
