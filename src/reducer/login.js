import {
  LogIn,
  SetUsers,
  Search,
  ShowHide,
  Count,
  Location,
  Weather,
  Index,
  Permission,
} from "../action";
const initialState = {
  toggle: false,
  data: {
    username: "",
    password: "",
  },
  record: {},
  loggedIn: false,
  location: {
    latitude: "",
    longitude: "",
  },
  index: [],
  weather: [],
  city: "",
  count: {},
  permission: false,
};
const login = (state = initialState, action) => {
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
    case LogIn:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case Location:
      return {
        ...state,
        location: action.payload,
      };
    case Index:
      return {
        ...state,
        index: action.payload,
      };
    case Weather:
      return {
        ...state,
        weather: action.payload,
      };
    case Search:
      return {
        ...state,
        city: action.payload,
      };
    case Count:
      return {
        ...state,
        count: action.payload,
      };
    case Permission:
      return {
        ...state,
        permission: action.payload,
      };
    default:
      return state;
  }
};
export default login;
