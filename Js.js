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
//Card one
var cardOneDay = document.querySelector('#cardOneDate');
var cardOneImg = document.querySelector('#cardOneIcon');
var cardOneTemp = document.querySelector('#cardOneTemp');
var cardOneWind = document.querySelector('#cardOneWind');
var cardOneHumid = document.querySelector('#cardOneHumid');
//card two 
var cardTwoDay = document.querySelector('#cardTwoDate');
var cardTwoImg = document.querySelector('#cardTwoIcon');
var cardTwoTemp = document.querySelector('#cardTwoTemp');
var cardTwoWind = document.querySelector('#cardTwoWind');
var cardTwoHumid = document.querySelector('#cardTwoHumid');
//card 3  
var threeDay = document.querySelector('#threeDate');
var threeImg = document.querySelector('#threeIcon');
var threeTemp = document.querySelector('#threeTemp');
var threeWind = document.querySelector('#threeWind');
var threeHumid = document.querySelector('#threeHumid');
//card 4 
var fourDay = document.querySelector('#fourDate');
var fourImg = document.querySelector('#fourIcon');
var fourTemp = document.querySelector('#fourTemp');
var fourWind = document.querySelector('#fourWind');
var fourHumid = document.querySelector('#fourHumid');
//card 5 
var fiveDay = document.querySelector('#fiveDate');
var fiveImg = document.querySelector('#fiveIcon');
var fiveTemp = document.querySelector('#fiveTemp');
var fiveWind = document.querySelector('#fiveWind');
var fiveHumid = document.querySelector('#fiveHumid');


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
            var firstDate = data.daily[1].dt * 1000;
            var dateFirst = new Date(firstDate);
            var firstDateFormatted = dateFirst.toLocaleDateString();
            cardOneDay.textContent = firstDateFormatted;
            firstImg = data.daily[1].weather[0].icon;
            cardOneImg.innerHTML = `<img src="https://openweathermap.org/img/w/${firstImg}.png">`;
            cardOneTemp.textContent = data.daily[1].temp.day + '°F';
            cardOneWind.textContent = data.daily[1].wind_speed + ' MPH';
            cardOneHumid.textContent = data.daily[1].humidity + "%";
            // card two
            var secondDate = data.daily[2].dt * 1000;
            var dateSecond = new Date(secondDate);
            var secondFormatted = dateSecond.toLocaleDateString();
            cardTwoDay.textContent = secondFormatted;
            secondImg = data.daily[2].weather[0].icon;
            cardTwoImg.innerHTML = `<img src="https://openweathermap.org/img/w/${secondImg}.png">`;
            cardTwoTemp.textContent = data.daily[2].temp.day + '°F';
            cardTwoWind.textContent = data.daily[2].wind_speed + ' MPH';
            cardTwoHumid.textContent = data.daily[2].humidity + '%';
            //card 3 
            var thirdDate = data.daily[3].dt * 1000;
            var dateThird = new Date(thirdDate);
            var thirdFormatted = dateThird.toLocaleDateString();
            threeDay.textContent = thirdFormatted;
            thirdImg = data.daily[3].weather[0].icon;
            threeImg.innerHTML = `<img src="https://openweathermap.org/img/w/${thirdImg}.png">`;
            threeTemp.textContent = data.daily[3].temp.day + '°F';
            threeWind.textContent = data.daily[3].wind_speed + ' MPH';
            threeHumid.textContent = data.daily[3].humidity + '%';
            //card 4 
            var fourDate = data.daily[4].dt * 1000;
            var dateFour = new Date(fourDate);
            var fourFormatted = dateFour.toLocaleDateString();
            fourDay.textContent = fourFormatted;
            imgFour = data.daily[4].weather[0].icon;
            fourImg.innerHTML = `<img src="https://openweathermap.org/img/w/${imgFour}.png">`;
            fourTemp.textContent = data.daily[4].temp.day + '°F';
            fourWind.textContent = data.daily[4].wind_speed + ' MPH';
            fourHumid.textContent = data.daily[4].humidity + '%';
            //card 5 
            var fiveDate = data.daily[5].dt * 1000;
            var dateFive = new Date(fiveDate);
            var fiveFormatted = dateFive.toLocaleDateString();
            fiveDay.textContent = fiveFormatted;
            imgFive = data.daily[5].weather[0].icon;
            fiveImg.innerHTML = `<img src="https://openweathermap.org/img/w/${imgFive}.png">`;
            fiveTemp.textContent = data.daily[5].temp.day + '°F';
            fiveWind.textContent = data.daily[5].wind_speed + ' MPH';
            fiveHumid.textContent = data.daily[5].humidity + '%';
        })
}
