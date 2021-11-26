export const IsLogIn = "IsLogIn";
export const SetUsers = "SetUsers";
export const ShowHide = "ShowHide";
export const GetCityByCoordinate = "GetCityByCoordinate";
export const GetWeatherDetail = "GetWeatherDetail";
export const OnChangeCity = "OnChangeCity";
export const GetSearchCityDetail = "GetSearchCityDetail";
export const isLogin = (payload) => ({
  type: IsLogIn,
  payload,
});
export const setUser = (payload) => ({
  type: SetUsers,
  payload,
});
export const showHide = (payload) => ({
  type: ShowHide,
  payload,
});
export const getCityByCoordinate = (payload) => ({
  type: GetCityByCoordinate,
  payload,
});

export const getWeatherDetail = (payload) => ({
  type: GetWeatherDetail,
  payload,
});
export const onChangeCity = (payload) => ({
  type: OnChangeCity,
  payload,
});
export const getSearchCityDetail = (payload) => ({
  type: GetSearchCityDetail,
  payload,
});
