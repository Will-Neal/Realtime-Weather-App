# Realtime-Weather-App

## Description

The weather dashboard is a real time weather application that takes user input to search for a city and then displays the weather for that day in that city as well as the five day future forecast. The application displays the temperature, Wind Speed and Humidity along with the date and an icon representing the weather conditions. The day forecast for the city also displays the UV index for the day with a color coded background indicating weather the UV level is low, moderate or severe. When the user searches for a city it is saved and a button is created to search for that city again if they choose to do so. 

## Background 

Weather applications are an integral part of the modern world. The vast majority of people check the weather first thing every morning so they need a simple application that quickly gets the information they need and saves the places they search regularly allowing for easy access. This application puts all that information in one easy place and provides clean, readily available buttons to access the cities users have searched for in the past. 

## Functionality

This application uses the OpenWeatherMap API to get real time information for the city of the users choice. The application uses JavaScript to take the user input and feed that to the API then to inject the API response into the webpage and display that information to the user. The user searches are saved in local storage which is then retrieved and displayed as active buttons. There is also a clear button that allows the user to clear the localStorage and delete the old buttons. When the user provides input, a conditional checks the response status and only proceeds if the response is a 200 indicating that it was successful and otherwise alerts the user if their input wasn't valid. Similarly a conditional checks if the user provide empty input and prevents an empty button from being created.

## Technologies
<ul>
 <li>JavaScript</li>
 <li>Bootstrap 4</li>
 <li>HTML</li>
 <li>CSS</li>
 <li>FontAwesome</li>
</ul>

## Deployment 

[Click here for deployed application](https://will-neal.github.io/Realtime-Weather-App/)

## Screenshot

![Landing Page](https://github.com/Will-Neal/Realtime-Weather-App/blob/main/assets/images/LandingPage.jpg?raw=true)

![City Search](https://github.com/Will-Neal/Realtime-Weather-App/blob/main/assets/images/weatherDisplay.jpg?raw=true)

![404](https://github.com/Will-Neal/Realtime-Weather-App/blob/main/assets/images/404.jpg?raw=true)

## License

<img src="https://img.shields.io/badge/license-MIT-red">
  
This project is licensed under the MIT License.

For more information on this license, please visit [their website](https://www.mit.edu/~amini/LICENSE.md).