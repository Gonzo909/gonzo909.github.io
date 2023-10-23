const temp = parseInt(document.getElementById("temp").innerHTML);
const windSpeed = parseInt(document.getElementById("windSpeed").innerHTML);

if (temp <= 50 && windSpeed >= 3) {
    let windChill = 35.74 + (0.6215 * temp) - (35.75 * (Math.pow(windSpeed, 0.16))) + (0.4275 * temp * (Math.pow(windSpeed, 0.16)));
    document.getElementById("windChill").innerHTML = windChill.toFixed(0);
}