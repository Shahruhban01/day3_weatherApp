document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "f5437788afd6c9bf1c48eaa8e65a887f";
    const getWeatherBtn = document.getElementById("getWeatherBtn");
    const cityInput = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    const weatherDescription = document.getElementById("weatherDescription");
    const temperature = document.getElementById("temperature");
    const humidity = document.getElementById("humidity");

    getWeatherBtn.addEventListener("click", function() {
        const city = cityInput.value.trim();
        if (city !== "") {
            getWeatherData(city);
        }
    });

    function getWeatherData(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error("City not found");
                }
                return response.json();
            })
            .then(data => {
                displayWeatherData(data);
            })
            .catch(error => {
                alert(error.message);
            });
    }

    function displayWeatherData(data) {
        cityName.textContent = data.name;
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
});
