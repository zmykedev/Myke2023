import { WeatherActionType } from ".";

export interface State {
  weather: WeatherApiResponse | null;
  loading: boolean;
  lastKnownTemperature: number | null;
  transitioning: boolean;
}

interface WeatherApiResponse {
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    is_day: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
  };
}

interface SetWeatherDataAction {
  type: WeatherActionType.SET_WEATHER_DATA;
  payload: WeatherApiResponse | null;
}

interface SetLoadingAction {
  type: WeatherActionType.SET_LOADING;
  payload: boolean;
}

export type Action = SetWeatherDataAction | SetLoadingAction;
