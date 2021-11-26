import {
  IsLogIn,
  SetUsers,
  OnChangeCity,
  ShowHide,
  GetCityByCoordinate,
  GetWeatherDetail,
  GetSearchCityDetail,
} from "../action";
const initialState = {
  toggle: false,
  data: {
    username: "",
    password: "",
  },
  record: {},
  loggedIn: false,
  coordinate: {
    latitude: "",
    longitude: "",
  },
  searchcity: [],
  weatherDetail: [],
  city: "",
};
const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ShowHide:
      return {
        ...state,
        toggle: action.payload,
      };
    case SetUsers:
      return {
        ...state,
        data: action.payload,
      };
    case IsLogIn:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case GetCityByCoordinate:
      return {
        ...state,
        coordinate: action.payload,
      };

    case GetWeatherDetail:
      return {
        ...state,
        weatherDetail: action.payload,
      };
    case OnChangeCity:
      return {
        ...state,
        city: action.payload,
      };

    case GetSearchCityDetail:
      return {
        ...state,
        searchcity: action.payload,
      };
    default:
      return state;
  }
};
export default weatherReducer;
