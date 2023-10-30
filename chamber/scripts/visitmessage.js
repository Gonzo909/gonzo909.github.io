const visitMessage = document.querySelector('.visitmessage');
const msToDays = 84600000;
const dateToday = new Date();

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;
let lasVisit = new Date(window.localStorage.getItem('lastVisit-ls')) || 0;
let now = Date.now();

if (numVisits === 0) {
    visitMessage.textContent = `Welcome! Let us know if you have any questions.`;
}
else if (numVisits >= 1 && (now - lasVisit) < (msToDays)) {
    visitMessage.textContent = `Back so soon! Awesome!`;
}
else {
    visitMessage.textContent = `You last visited ${Math.floor((now - lasVisit) / msToDays)} days ago.`;
}

numVisits++;
localStorage.setItem('numVisits-ls', numVisits);

localStorage.setItem('lastVisit-ls', now);