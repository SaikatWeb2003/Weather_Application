const API_KEY = '39a85778437bdad6071ce91358547c0f';

async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === '404') {
            alert('City not found');
            return;
        }

        document.getElementById('city-name').textContent = data.name;
        document.getElementById('temperature').textContent = `🌡 Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `🌥 Condition: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById('wind-speed').textContent = `💨 Wind Speed: ${data.wind.speed} km/h`;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        document.getElementById('weather-result').style.display = 'block';
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Something went wrong. Try again later.');
    }
}
