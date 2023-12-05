const weather = document.getElementById('weather');
const weatherIcon = document.getElementById('weather-icon');
const caption = document.querySelector('figcaption');
const humidity = document.getElementById('humidity');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&appid=f83e65ed402b6ebee8b09a46b89275a4&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log("Error: ", error);
    }
}

function displayResults(data) {
    weather.textContent = `${data.main.temp.toFixed(0)}°F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    caption.textContent = `${desc.charAt(0).toUpperCase()}${desc.slice(1)}`;
    humidity.textContent = `${data.main.humidity}%`;
}

apiFetch();