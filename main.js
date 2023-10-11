const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=YOUR_API_KEY&units=metric&q=bangalore";
const apiKey = "cfeb9943584e9ae3c91409c3e01d3b6e";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherList = document.querySelector(".weather-icons");

async function checkWeather() {
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

checkWeather();

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
