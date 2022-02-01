//URL Related Variables
var cityName = "New York"
var apiKey = "3c57dad64990454f0e9db0300be708bc"
var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid="
//Event Listeners
var searchBtn = document.querySelector("#searchButton")

//Elements
var cityHead = document.querySelector("#cityName")
var cityTemp = document.querySelector("#cityTemp")
var cityMoist = document.querySelector("#cityHumidity")
var cityWind = document.querySelector("#cityWind")
var citySun = document.querySelector("#cityUV")

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
        var oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + lon + "&appid=" + apiKey;
        fetch(oneCallURL)
        .then(function(secondResponse){
            return secondResponse.json()
        .then(function(oneCallData){
            console.log("this is the one call data below")
            console.log(oneCallData)
            citySun.textContent = "UV Index: " + oneCallData.current.uvi
            })
        })
    })
}


searchBtn.addEventListener("click", getForecast);