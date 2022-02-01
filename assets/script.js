//URL Related Variables
var cityName = "New York"
var apiKey = "3c57dad64990454f0e9db0300be708bc"
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid="
//Event Listeners
var searchBtn = document.querySelector("#searchButton")

//Elements
var cityHead = document.querySelector("#cityName")
var cityTemp = document.querySelector("#cityTemp")
var cityMoist = document.querySelector("#cityHumidity")
var cityWind = document.querySelector("#cityWind")
var citySun = document.querySelector("#cityUV")

//5 Day forecast Elements
var forecastDate1 = document.querySelector("#forecastDate1")
var forecastIcon1 = document.querySelector("#forecastIcon1")
var forecastTemp1 = document.querySelector("#forecastTemp1")
var forecastWind1 = document.querySelector("#forecastWind1")
var forecastHumidity1 = document.querySelector("#forecastHumidity1")
var forecastDate2 = document.querySelector("#forecastDate2")
var forecastIcon2 = document.querySelector("#forecastIcon2")
var forecastTemp2 = document.querySelector("#forecastTemp2")
var forecastWind2 = document.querySelector("#forecastWind2")
var forecastHumidity2 = document.querySelector("#forecastHumidity2")
var forecastDate3 = document.querySelector("#forecastDate3")
var forecastIcon3 = document.querySelector("#forecastIcon3")
var forecastTemp3 = document.querySelector("#forecastTemp3")
var forecastWind3 = document.querySelector("#forecastWind3")
var forecastHumidity3 = document.querySelector("#forecastHumidity3")
var forecastDate4 = document.querySelector("#forecastDate4")
var forecastIcon4 = document.querySelector("#forecastIcon4")
var forecastTemp4 = document.querySelector("#forecastTemp4")
var forecastWind4 = document.querySelector("#forecastWind4")
var forecastHumidity4 = document.querySelector("#forecastHumidity4")
var forecastDate5 = document.querySelector("#forecastDate5")
var forecastIcon5 = document.querySelector("#forecastIcon5")
var forecastTemp5 = document.querySelector("#forecastTemp5")
var forecastWind5 = document.querySelector("#forecastWind5")
var forecastHumidity5 = document.querySelector("#forecastHumidity5")

//call main API
function getForecast(){
    fetch(apiURL + apiKey)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        console.log(data.list[0].main)
        console.log(data.city.name)
        cityHead.textContent = data.city.name
        cityTemp.textContent = "Temperature: " + data.list[0].main.temp
        cityMoist.textContent = "Humidity: " + data.list[0].main.humidity + "%"
        cityWind.textContent = "Wind Speed: " + data.list[0].wind.speed + "MPH"
        citySun.textContent = "UV Index: "
        
        
        var lat = data.city.coord.lat
        var lon = data.city.coord.lon
        var oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
        fetch(oneCallURL)
        .then(function(secondResponse){
            return secondResponse.json()
        .then(function(oneCallData){
            console.log("this is the one call data below")
            console.log(oneCallData)
            citySun.textContent = "UV Index: " + oneCallData.current.uvi
            forecastDate1.textContent = oneCallData.daily[0].dt
            forecastIcon1.textContent = oneCallData.daily[0].weather[0].icon
            forecastTemp1.textContent = oneCallData.daily[0].temp.day
            forecastWind1.textContent = oneCallData.daily[0].wind_speed
            forecastHumidity1.textContent = oneCallData.daily[0].humidity
            forecastDate2.textContent = oneCallData.daily[1].dt
            forecastIcon2.textContent = oneCallData.daily[1].weather[0].icon
            forecastTemp2.textContent = oneCallData.daily[1].temp.day
            forecastWind2.textContent = oneCallData.daily[1].wind_speed
            forecastHumidity2.textContent = oneCallData.daily[1].humidity
            forecastDate3.textContent = oneCallData.daily[2].dt
            forecastIcon3.textContent = oneCallData.daily[2].weather[0].icon
            forecastTemp3.textContent = oneCallData.daily[2].temp.day
            forecastWind3.textContent = oneCallData.daily[2].wind_speed
            forecastHumidity3.textContent = oneCallData.daily[2].humidity
            forecastDate4.textContent = oneCallData.daily[3].dt
            forecastIcon4.textContent = oneCallData.daily[3].weather[0].icon
            forecastTemp4.textContent = oneCallData.daily[3].temp.day
            forecastWind4.textContent = oneCallData.daily[3].wind_speed
            forecastHumidity4.textContent = oneCallData.daily[3].humidity
            forecastDate5.textContent = oneCallData.daily[4].dt
            forecastIcon5.textContent = oneCallData.daily[4].weather[0].icon
            forecastTemp5.textContent = oneCallData.daily[4].temp.day
            forecastWind5.textContent = oneCallData.daily[4].wind_speed
            forecastHumidity5.textContent = oneCallData.daily[4].humidity
            })
        })
    })
}


searchBtn.addEventListener("click", getForecast);