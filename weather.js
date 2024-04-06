const form = document.getElementById('weatherForm');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city === '') {
    alert('Please enter a city name');
    return;
  }
  getWeather(city);
});

async function getWeather(city) {
  const apiKey = 'f8a87a9703d1aedd43be0297123e187d';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather:', error);
    alert('Failed to fetch weather data. Please try again later.');
  }
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherDescription = data.weather[0].description;
  const humidity = data.main.humidity;

  const weatherHtml = `
    <div class="weather-card">
      <h2>${cityName}</h2>
      <p>Temperature: ${temperature}°C</p>
      <p>Weather: ${weatherDescription}</p>
      <p>Humidity: ${humidity}%</p>
    </div>
  `;
  weatherInfo.innerHTML = weatherHtml;
}
