import {
  Is_LogIn,
  Set_Users,
  Set_City,
  Show_Hide,
  Get_CityByCoordinate,
  Get_Weather_Detail,
  Get_SearchCity_Detail,
  Find_User_Index,
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
  index:null
};
const weatherReducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    case Show_Hide:
      return {
        ...state,
        toggle: action.payload,
      };
    case Set_Users:
      return {
        ...state,
        data: action.payload,
      };
    case Is_LogIn:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case Get_CityByCoordinate:
      return {
        ...state,
        coordinate: action.payload,
      };

    case Get_Weather_Detail:
      return {
        ...state,
        weatherDetail: action.payload,
      };
    case Set_City:
      debugger
      return {
        ...state,
        city: action.payload,
      };

    case Get_SearchCity_Detail:
      return {
        ...state,
        searchcity: action.payload,
      };
    case Find_User_Index:
      return {
        ...state,
        index: action.payload,
      };
    default:
      return state;
  }
};
export default weatherReducer;
