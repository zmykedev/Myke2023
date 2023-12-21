import React from "react";
import { api } from "./api";
import { weatherReducer, WeatherActionType, initialState } from "./state";
import { WeatherContainer, WeatherImage, MainContainer, TitleContainer, Temperature } from "./styled";


export const WeatherComponent: React.FC = () => {
  const [state, dispatch] = React.useReducer(weatherReducer, initialState);


 const fetchWeatherData = async () => {
    dispatch({ type: WeatherActionType.SET_LOADING, payload: true });

    try {
      const apiUrl = api.weather.forecast;
      const response = await fetch(apiUrl);
      const data = await response.json();
      dispatch({ type: WeatherActionType.SET_WEATHER_DATA, payload: data });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      dispatch({ type: WeatherActionType.SET_LOADING, payload: false });
    }
  };

  
  React.useEffect(() => {
    fetchWeatherData();
    

   
   const intervalId = setInterval(() => {
  fetchWeatherData();
}, 6000 * 10 );

  
    return () => clearInterval(intervalId);
  }, []);

  if (state.loading) {
    return  <MainContainer>
      <TitleContainer>Santiago de Chile</TitleContainer>
      <WeatherContainer>
        <WeatherImage src="/assets/Sun.png" />
       { state.weather && (<Temperature>{`${state.weather.current.temperature_2m}°`}</Temperature>)}
      </WeatherContainer>
  
    </MainContainer>;
  }

  return (
    <MainContainer>
      <TitleContainer>Santiago de Chile</TitleContainer>
      <WeatherContainer>
        <WeatherImage src="/assets/Sun.png" />
       { state.weather && (<Temperature>{`${state.weather.current.temperature_2m}°`}</Temperature>)}
      </WeatherContainer>
  
    </MainContainer>
  );
};
