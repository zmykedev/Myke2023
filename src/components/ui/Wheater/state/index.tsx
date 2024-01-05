import { produce } from "immer";
import { State, Action } from "./types";

export const initialState: State = {
  weather: null,
  loading: true,
  lastKnownTemperature: null,
  transitioning: false,
};

export enum WeatherActionType {
  SET_WEATHER_DATA = "SET_WEATHER_DATA",
  SET_LOADING = "SET_LOADING",
  SET_VISIBLE = "SET_VISIBLE",
}

export const weatherReducer = (state: State = initialState, action: Action) =>
  produce(state, (draftstate) => {
    switch (action.type) {
      case WeatherActionType.SET_LOADING:
        draftstate.loading = action.payload;
        break;

      case WeatherActionType.SET_WEATHER_DATA:
        if (action.payload) {
          draftstate.weather = action.payload;
          draftstate.lastKnownTemperature =
            action.payload.current.temperature_2m;
          // No usar setTimeout aquí
        }
        break;

      case WeatherActionType.SET_VISIBLE:
        draftstate.transitioning = action.payload;

        break;
    }
  });
