//Variables for Event Listeners
var searchBtn = document.querySelector("#searchButton")
var clearBtn = document.querySelector("#clearHistory")

//Elements for the Main City Forecast

var cityHead = document.querySelector("#cityName")
var cityTemp = document.querySelector("#cityTemp")
var cityMoist = document.querySelector("#cityHumidity")
var cityWind = document.querySelector("#cityWind")
var citySun = document.querySelector("#cityUV")
var cityIcon = document.querySelector("#cityIcon")

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

//Array variable for local storage
var userSearch = JSON.parse(localStorage.getItem("userSearch")) || [];


//call main API and get forecast data then update the HTML with that data
function getForecast(cityName){
    var apiKey = "3c57dad64990454f0e9db0300be708bc"
    var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid="
    fetch(apiURL + apiKey)
    .then(function(response){
        if (response.status == 200){
            return response.json()
            .then(function(data){
                var weatherContainer = document.querySelector("#weatherContainer")
                weatherContainer.classList.remove("hidden");
                cityHead.textContent = data.city.name + " " + "(" + moment().format("L") + ")";
                cityTemp.textContent = "Temperature: " + data.list[0].main.temp + "°F";
                cityMoist.textContent = "Humidity: " + data.list[0].main.humidity + "%";
                cityWind.textContent = "Wind Speed: " + data.list[0].wind.speed + " mph";
                citySun.textContent = "UV Index: ";
                
                
                var lat = data.city.coord.lat
                var lon = data.city.coord.lon
                var oneCallURL = "https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;
                fetch(oneCallURL)
                .then(function(secondResponse){
                    return secondResponse.json()
                .then(function(oneCallData){
                    citySun.textContent = "UV Index: " + oneCallData.daily[0].uvi;
                    uvIndexValue = Number(oneCallData.daily[0].uvi)
                    if (uvIndexValue <= 3) {
                        citySun.style.backgroundColor = "green";
                    } else if (uvIndexValue >= 7) {
                        citySun.style.backgroundColor = "red";
                    } else {
                        citySun.style.backgroundColor = "yellow"
                    }
                    cityIcon.setAttribute("src", "https://openweathermap.org/img/wn/" + oneCallData.daily[0].weather[0].icon + "@2x.png");
                    cityIcon.setAttribute("alt", oneCallData.daily[0].weather[0].description);
                    forecastDate1.textContent = moment().add(1, 'days').format("L");
                    forecastIcon1.setAttribute("src", "https://openweathermap.org/img/wn/" + oneCallData.daily[1].weather[0].icon + "@2x.png");
                    forecastIcon1.setAttribute("alt", oneCallData.daily[1].weather[0].description)
                    forecastTemp1.textContent = "Temp: " + oneCallData.daily[1].temp.day + "°F";
                    forecastWind1.textContent = "Wind: " + oneCallData.daily[1].wind_speed + " mph";
                    forecastHumidity1.textContent = "Humidity: " + oneCallData.daily[1].humidity + "%";
                    forecastDate2.textContent = moment().add(2, 'days').format("L");
                    forecastIcon2.setAttribute("src", "https://openweathermap.org/img/wn/" + oneCallData.daily[2].weather[0].icon + "@2x.png");
                    forecastIcon2.setAttribute("alt", oneCallData.daily[2].weather[0].description)
                    forecastTemp2.textContent = "Temp: " + oneCallData.daily[2].temp.day + "°F";
                    forecastWind2.textContent = "Wind: " + oneCallData.daily[2].wind_speed + " mph";
                    forecastHumidity2.textContent = "Humidity: " + oneCallData.daily[2].humidity + "%";
                    forecastDate3.textContent = moment().add(3, 'days').format("L");
                    forecastIcon3.setAttribute("src", "https://openweathermap.org/img/wn/" + oneCallData.daily[3].weather[0].icon + "@2x.png");
                    forecastIcon3.setAttribute("alt", oneCallData.daily[3].weather[0].description)
                    forecastTemp3.textContent = "Temp: " + oneCallData.daily[3].temp.day + "°F";
                    forecastWind3.textContent = "Wind: " + oneCallData.daily[3].wind_speed + " mph";
                    forecastHumidity3.textContent = "Humidity: " + oneCallData.daily[3].humidity + "%";
                    forecastDate4.textContent = moment().add(4, 'days').format("L");
                    forecastIcon4.setAttribute("src", "https://openweathermap.org/img/wn/" + oneCallData.daily[4].weather[0].icon + "@2x.png");
                    forecastIcon4.setAttribute("alt", oneCallData.daily[4].weather[0].description)
                    forecastTemp4.textContent = "Temp: " + oneCallData.daily[4].temp.day + "°F";
                    forecastWind4.textContent = "Wind: " + oneCallData.daily[4].wind_speed + " mph";
                    forecastHumidity4.textContent = "Humidity: " + oneCallData.daily[4].humidity + "%";
                    forecastDate5.textContent = moment().add(5, 'days').format("L");
                    forecastIcon5.setAttribute("src", "https://openweathermap.org/img/wn/" + oneCallData.daily[5].weather[0].icon + "@2x.png");
                    forecastIcon5.setAttribute("alt", oneCallData.daily[5].weather[0].description)
                    forecastTemp5.textContent = "Temp: " + oneCallData.daily[5].temp.day + "°F";
                    forecastWind5.textContent = "Wind: " + oneCallData.daily[5].wind_speed + " mph";
                    forecastHumidity5.textContent = "Humidity: " + oneCallData.daily[5].humidity + "%";
                    })
                })
            })
        } else {
            alert("404 - Please input a valid city")
        }
        
    })
   
    
}

//Functions to save and retrieve data from Local Storage and create the buttons
function saveSearch () {
    var userInput = document.querySelector("#form1").value;
    if (userInput == "") {
        return
    } else {
    userSearch.push(userInput);
    localStorage.setItem("userSearch", JSON.stringify(userSearch));
    displayButtons()
}
}

//Function to clear localStorage
function clearSearch() {
    localStorage.clear()
    location.reload()

}

//function to remove all child nodes so they dont get duplicated when the buttons are created by the for loop
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}




//function to take cities in local storage and display them as buttons
var searchArea = document.querySelector("#historyButtons")
function displayButtons(){
    removeAllChildNodes(searchArea)
    for (var i=0; i<userSearch.length; i++){
        var newButton = document.createElement("button");
        newButton.innerHTML = userSearch[i];
        newButton.setAttribute("type", "button");
        newButton.setAttribute("class", "btn btn-primary user-buttons");
        newButton.setAttribute("id", "userButtons");
        newButton.addEventListener("click", function(){
            getForecast(this.innerHTML)
        })
        searchArea.appendChild(newButton);
    }
    
}

//Event Listeners including a function that passes the value from the button into the getforecast function

searchBtn.addEventListener("click", function(){
    var cityName = document.querySelector("#form1").value
    getForecast(cityName)
});
searchBtn.addEventListener("click", saveSearch);

clearBtn.addEventListener("click", clearSearch)

displayButtons()