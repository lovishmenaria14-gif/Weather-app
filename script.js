const apiKey = "de53d99854c34361a5190422261306";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

async function checkWeather(city) {

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);

    if(response.status === 404){
        alert("City not found");
        return;
    }

    const data = await response.json();

    document.querySelector(".city").innerHTML =
        data.name;

    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML =
        data.main.humidity + "%";

    document.querySelector(".wind").innerHTML =
        data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
    checkWeather(cityInput.value);
});

cityInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        checkWeather(cityInput.value);
    }
});