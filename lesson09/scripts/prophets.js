const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphetData() {
    await fetch(url);
}

const response = getProphetData();
const data = response.json();
console.table(data);