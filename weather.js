document.addEventListener("DOMContentLoaded", () => {
    let url = "https://api.open-meteo.com/v1/forecast?latitude=53.35&longitude=-6.26&current=temperature_2m,relative_humidity_2m,wind_speed_10m";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let current = data.current;

            document.querySelector("#city").textContent = "Weather in Dublin";
            document.querySelector("#temperature").textContent = "Temperature: " + current.temperature_2m + "°C";
            document.querySelector("#humidity").textContent = "Humidity: " + current.relative_humidity_2m + "%";
            document.querySelector("#wind").textContent = "Wind: " + current.wind_speed_10m + " km/h";
        })
        .catch((err) => {
            document.querySelector("#city").textContent = "Could not load weather";
            console.log(err);
        });
});