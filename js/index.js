document.addEventListener('DOMContentLoaded', function () {
  const apiKey = '5d066958a60d315387d9492393935c19';
  const city = 'Lviv';
  
  const weatherElement = document.getElementById('weather');
  
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weather = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
      
      weatherElement.innerHTML = `
        <p>Температура: <span id="temperature">${data.main.temp}</span> &deg;C</p>
        <p>Тиск: <span id="pressure">${data.main.pressure}</span> hPa</p>
        <p>Опис: <span id="description">${data.weather[0].description}</span></p>
        <p>Вологість: <span id="humidity">${data.main.humidity}</span>%</p>
        <p>Швидкість вітру: <span id="wind-speed">${data.wind.speed}</span> м/с</p>
        <p>Напрям вітру: <span id="wind-deg">${data.wind.deg}</span> &deg;</p>
        <img src=${weather} id="weather-icon" alt="Іконка погоди">`;
      document.body.classList.add('loaded');
    })
    .catch(error => {
      console.error('Помилка при отриманні даних погоди:', error);
    });
});
