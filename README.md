# Realtime-Weather-App

## Description

The weather dashboard is a real time weather application that takes user input fort the city and then displays both the weather for the day in that city as well as a five day forecast. The application displays the temperature, Wind Speed and Humidity along with the date and an icon representing the weather conditions. The day forecast for the city also displays the UV index for the day with a color coded background indicating weather the UV level is low, moderate or severe. When the user searches for a city it is saved and a button is created to search for that city again if they choose to do so. 

## Background 

Weather applications are an integral part of the modern world. The vast majority of people check the weather first thing every morning so they need a simple application that quickly gets the information they need and saves the places they search regularly allowing for easy access. This application puts all that information in one easy place and provides clean, readily available buttons to access the cities users have searched for in the past. 

## Functionality

This application uses the OpenWeatherMap API to get real time information for the city of the users choice. The application uses JavaScript to take the user input and feed that to the API then to inject the API response into the webpage and display that information to the user. The user searches are saved in local storage which is then retrieved and displayed as active buttons. There is also a clear button that allows the user to clear the localStorage and delete the old buttons. The page also checks the response status and only proceeds if the response is a 200 meaning that it is good, and alerts the user that their input wasn't valid. 

## Deployment 

[Click here for deployed application](https://will-neal.github.io/Realtime-Weather-App/)

## Screenshot