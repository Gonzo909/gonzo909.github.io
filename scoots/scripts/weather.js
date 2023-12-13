const weather = document.getElementById('weather');
const weatherIcon = document.getElementById('weather-icon');
const caption = document.querySelector('figcaption');
const humidity = document.getElementById('humidity');
const forecast = document.querySelector('.forecast');
const forecastIcon1 = document.querySelector('#weather-icon1');
const forecastIcon2 = document.querySelector('#weather-icon2');
const forecastIcon3 = document.querySelector('#weather-icon3');
const forecastTime1 = document.querySelector('#forecasttime1');
const forecastTime2 = document.querySelector('#forecasttime2');
const forecastTime3 = document.querySelector('#forecasttime3');
const forecastTemp1 = document.querySelector('#forecast1');
const forecastTemp2 = document.querySelector('#forecast2');
const forecastTemp3 = document.querySelector('#forecast3');
const url = "https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.92&appid=f83e65ed402b6ebee8b09a46b89275a4&units=imperial";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.92&appid=f83e65ed402b6ebee8b09a46b89275a4&units=imperial"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log("Error: ", error);
    }

   try {
        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            console.log(forecastData);
            displayForecast(forecastData);
        }
        else {
            throw Error(await forecastResponse.text());
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

function displayForecast(forecastData) {
    forecastTime1.textContent = new Date(forecastData.list[0].dt_txt).toLocaleTimeString('en-US');
    forecastTime2.textContent = new Date(forecastData.list[3].dt_txt).toLocaleTimeString('en-US');
    forecastTime3.textContent = new Date(forecastData.list[6].dt_txt).toLocaleTimeString('en-US');

    forecastTemp1.textContent = `${forecastData.list[0].main.temp.toFixed(0)}°F`;
    forecastTemp2.textContent = `${forecastData.list[3].main.temp.toFixed(0)}°F`;
    forecastTemp3.textContent = `${forecastData.list[6].main.temp.toFixed(0)}°F`;

    const iconsrc1 = `https://openweathermap.org/img/w/${forecastData.list[0].weather[0].icon}.png`;
    const iconsrc2 = `https://openweathermap.org/img/w/${forecastData.list[3].weather[0].icon}.png`;
    const iconsrc3 = `https://openweathermap.org/img/w/${forecastData.list[6].weather[0].icon}.png`;

    forecastIcon1.setAttribute('src', iconsrc1);
    forecastIcon1.setAttribute('alt', forecastData.list[0].weather[0].description);
    forecastIcon2.setAttribute('src', iconsrc2);
    forecastIcon2.setAttribute('alt', forecastData.list[3].weather[0].description);
    forecastIcon3.setAttribute('src', iconsrc3);
    forecastIcon3.setAttribute('alt', forecastData.list[6].weather[0].description);
}

apiFetch();