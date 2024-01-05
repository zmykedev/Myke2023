import React from "react";

// - Api
import { api } from "./api";

// - State
import { weatherReducer, WeatherActionType, initialState } from "./state";

// - Styled
import {
  WeatherContainer,
  WeatherImage,
  MainContainer,
  TitleContainer,
  Temperature,
} from "./styled";
import PuffLoader from "react-spinners/ClipLoader";

export const WeatherComponent: React.FC = () => {
  const [state, dispatch] = React.useReducer(weatherReducer, initialState);

  const fetchWeatherData = async () => {
    try {
      dispatch({ type: WeatherActionType.SET_LOADING, payload: true });
      const apiUrl = api.weather.forecast;
      const response = await fetch(apiUrl);
      const data = await response.json();
      dispatch({ type: WeatherActionType.SET_WEATHER_DATA, payload: data });
      dispatch({ type: WeatherActionType.SET_VISIBLE, payload: true });
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
    }, 6000 * 10);

    return () => clearInterval(intervalId);
  }, []);

  if (state.loading) {
    return (
      <MainContainer>
        <PuffLoader color="#f8fbfa" />
      </MainContainer>
    );
  }

  return (
    <MainContainer
      className={state.transitioning && !state.loading ? "visible" : ""}
    >
      <TitleContainer>Santiago de Chile</TitleContainer>
      <WeatherContainer>
        <WeatherImage src="/assets/Sun.png" />
        {state.weather && (
          <Temperature>{`${state.weather.current.temperature_2m}°C`}</Temperature>
        )}
      </WeatherContainer>
    </MainContainer>
  );
};
