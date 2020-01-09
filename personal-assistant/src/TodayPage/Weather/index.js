/* eslint-disable max-len */
import React, { useReducer } from 'react'
import { WeatherHeader, WeatherDetail } from './styles'

const getWeatherData = (latitude, longitude, setWeatherState) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`
  console.log(url)
  fetch(url).then(
    response => response.json(),
  ).then(
    json => {
      console.log(json)
      const { main, description, icon } = json.weather[0]
      const { temp } = json.main
      const feelsLike = json.main.feels_like
      const clouds = json.clouds.all
      const wind = json.wind.speed

      const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

      const jsonWeather = {
        main, description, temp, feelsLike, clouds, wind, iconUrl,
      }
      setWeatherState(jsonWeather)
    },
  )
}

const Weather = () => {
  const weatherReducer = (prevState, payload) => ({ ...prevState, ...payload })
  const [weatherState, setWeatherState] = useReducer(weatherReducer, {
    main: '', description: '', temp: '', feelsLike: '', clouds: '', wind: '', iconUrl: '',
  })

  navigator.geolocation.getCurrentPosition(position => getWeatherData(position.coords.latitude, position.coords.longitude, setWeatherState))
  return (
    <div>
      <WeatherDetail>Its gonna be a great day!</WeatherDetail>
      <img alt="weather icon" src={weatherState.iconUrl} />
      <WeatherHeader>{`It feels like ${weatherState.feelsLike} degrees and it is ${weatherState.main}.`}</WeatherHeader>
      <WeatherDetail>{`It is currently ${weatherState.temp} degrees outside and it is ${weatherState.description}.`}</WeatherDetail>
    </div>
  )
}

export default Weather
