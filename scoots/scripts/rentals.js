const url = 'https://gonzo909.github.io/wdd230/scoots/data/rentals.json'
const table = document.querySelector('#rentaltable');

async function getRentals() {
    const response = await fetch(url);
    const data = await response.json();
    displayRentals(data.pricings);
}

const displayRentals = (rentals) => {
    rentals.forEach((rental) => {
        let row = document.createElement('tr');
        let type = document.createElement('td');
        let max = document.createElement('td');
        let half = document.createElement('td');
        let full = document.createElement('td');

        type.textContent = rental.type;
        max.textContent = rental.max;
        half.textContent = rental.half;
        full.textContent = rental.full;

        row.appendChild(type);
        row.appendChild(max);
        row.appendChild(half);
        row.appendChild(full);

        table.appendChild(row);
    })  
}

getRentals();