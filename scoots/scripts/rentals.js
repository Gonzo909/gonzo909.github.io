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
        let reservationHalf = document.createElement('td');
        let reservationFull = document.createElement('td');
        let walkinHalf = document.createElement('td');
        let walkinFull = document.createElement('td');

        type.textContent = rental.type;
        max.textContent = rental.maxpersons;
        reservationHalf.textContent = rental.reservation[0].halfday;
        reservationFull.textContent = rental.reservation[0].fullday;
        walkinHalf.textContent = rental.walkin[0].halfday;
        walkinFull.textContent = rental.walkin[0].fullday;

        row.appendChild(type);
        row.appendChild(max);
        row.appendChild(reservationHalf);
        row.appendChild(reservationFull);
        row.appendChild(walkinHalf);
        row.appendChild(walkinFull);

        table.appendChild(row);
    })  
}

getRentals();