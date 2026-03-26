// Footer
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent =
  "Last Updated: " + document.lastModified;

// Weather values
const temp = parseFloat(document.querySelector("#temp").textContent);
const speed = parseFloat(document.querySelector("#speed").textContent);

// Wind Chill (1 line)
function calculateWindChill(t, s) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

let windChill;

if (temp <= 10 && speed > 4.8) {
  windChill = calculateWindChill(temp, speed).toFixed(1) + " °C";
} else {
  windChill = "N/A";
}

document.querySelector("#windchill").textContent = windChill;