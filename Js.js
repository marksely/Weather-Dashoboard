// Main container of current Weather
var searchBtn = document.querySelector('#searchBtn');
var date = document.querySelector('#date');
var topIcon = document.querySelector('#topIcon');
var imageIcon = '';
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');
var uvIndex = document.querySelector('#uv-index');
var cityLocation = document.querySelector('#city');
var lonInfo = '';
var latInfo = '';

searchBtn.addEventListener('click', getApi);

function getApi() {

    var city = document.querySelector('#searchBar').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=6efa584486df0618a8f11e0673683bba&units=imperial')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var dateFormat = data.dt * 1000;
            var mainDate = new Date(dateFormat);
            var dateMain = mainDate.toLocaleDateString();
            date.textContent = dateMain;
            imageIcon = data.weather[0].icon;
            topIcon.innerHTML = `<img src="https://openweathermap.org/img/w/${imageIcon}.png">`;
            temp.textContent = data.main.temp + '°F';
            wind.textContent = data.wind.speed + ' MPH';
            humidity.textContent = data.main.humidity + ' %';
            cityLocation.textContent = data.name;
            lonInfo = data.coord.lon;
            latInfo = data.coord.lat;
            getFiveDay();
        })
}


// 5 day forecast 

function getFiveDay() {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latInfo + '&lon=' + lonInfo + '&exclude=minutely,hourly&appid=6efa584486df0618a8f11e0673683bba&units=imperial')
        .then(function (response) {
            return response.json();
        })
        .then( function (data) {
            console.log(data);
            uvIndex.textContent = data.current.uvi;
        })
}
