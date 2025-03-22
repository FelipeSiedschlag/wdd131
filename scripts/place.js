const modification = document.querySelector("#lastmodified");
const year = document.querySelector("#currentyear");
const today = new Date();


// get last modification date and time
const currentYear = new Date();
document.getElementById("currentyear").innerHTML = currentYear.getFullYear();

const lastModifiedDate = new Date(document.lastModified);


lastmodified.innerHTML = `Last modification: <span class="highlight">${new Intl.DateTimeFormat("en-US",
	{
        dateStyle: "short",
        timeStyle: "short",
        // timeZone: "Brasilia,Brazil",
	}
).format(lastModifiedDate)}</span>`;



// 
function calculateWindChill(temperature, windSpeed) {
    return (temperature <= 10 && windSpeed > 4.8) ? 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16)) : "N/A";
}


// Get the elements from the DOM
const temperatureInput = document.querySelector('#temperature');
const windSpeedInput = document.querySelector('#wind');
const conditionInput = document.querySelector('#condition');

// Set the input values
temperatureInput.value = "9°C";
windSpeedInput.value = "10km/h";
conditionInput.value = "Partly Cloudy";

// Extract the numeric values from the input strings (removing non-numeric characters)
let temperatureValue = parseFloat(temperatureInput.value); // Converts "9°C" to 9
let windSpeedValue = parseFloat(windSpeedInput.value); // Converts "10km/h" to 10

windChill = calculateWindChill(temperatureValue, windSpeedValue);

if (windChill !== "N/A") {
    windChill = windChill.toFixed(1); // Formats the number to 2 decimal places
}
document.querySelector('#windChill').value = `${windChill}°C`;


