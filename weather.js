let latitude = 19.08;
let longitude = 72.88;


let weather = document.querySelector("#weather");


weather.textContent = "Mumbai";


let temperature = document.querySelector("#temperature");
let rain = document.querySelector("#rain");
let aqi = document.querySelector("#aqi");


fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain`)
   .then((response) => {
       return response.json();
   })
   .then((data) => {
       temperature.textContent = "Temperature: " + data.current.temperature_2m + "°C";
       rain.textContent = "Rain: " + data.current.rain + " mm";
   });




let button = document.querySelector("#changeWeather");


button.addEventListener("click", () => {


   if (weather.textContent === "Mumbai") {


       weather.textContent = "Dublin";


       latitude = 53.35;
       longitude = -6.26;


   } else {


       weather.textContent = "Mumbai";


       latitude = 19.08;
       longitude = 72.88;
   }


   fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi`)
       .then((response) => {
           return response.json();
       })
       .then((data) => {
           aqi.textContent = "AQI: " + data.current.european_aqi;
       });


   fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,rain`)
       .then((response) => {
           return response.json();
       })
       .then((data) => {
           temperature.textContent = "Temperature: " + data.current.temperature_2m + "°C";
           rain.textContent = "Rain: " + data.current.rain + " mm";
       });
});


fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi`)
   .then((response) => {
       return response.json();
   })
   .then((data) => {
       aqi.textContent = "AQI: " + data.current.european_aqi;
   });
