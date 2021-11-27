export const Is_LogIn = "Is_LogIn";
export const Set_Users = "Set_Users";
export const Show_Hide = "Show_Hide";
export const Get_CityByCoordinate = "Get_CityByCoordinate";
export const Get_Weather_Detail = "Get_Weather_Detail";
export const Set_City = "Set_City";
export const Get_SearchCity_Detail = "Get_SearchCity_Detail";
export const Find_User_Index = "Find_User_Index";

export const isLogin = (payload) => ({
  type: Is_LogIn,
  payload,
});
export const setUser = (payload) => ({
  type: Set_Users,
  payload,
});
export const showHide = (payload) => ({
  type: Show_Hide,
  payload,
});
export const getCityByCoordinate = (payload) => ({
  type: Get_CityByCoordinate,
  payload,
});

export const getWeatherDetail = (payload) => ({
  type: Get_Weather_Detail,
  payload,
});
export const setCity = (payload) => ({
  type: Set_City,
  payload,
});

export const findUserIndex = (payload) => ({
  type: Find_User_Index,
  payload,
});
export const getSearchCityDetail = (payload) => ({
  type: Get_SearchCity_Detail,
  payload,
});
