import axios from "axios";
import { getWeatherDetail,getSearchCityDetail } from "../action/index";
export const getCityWeather = (city) => async (dispatch) => {
  try {
    const citys = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55228663782794261c86a7a39a9d3ce7`
    );
    dispatch(getWeatherDetail(citys.data));
  } catch (error) {
    console.log("errror");
  }
};
export const getCityCoordinate = (data) => async (dispatch) => {
  try {
    const geo = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=55228663782794261c86a7a39a9d3ce7`
    );
    dispatch(getCityWeather(geo.data.name));
  } catch (error) {
    console.log("errror");
  }
};
export const searchCity=(searchcity)=>async(dispatch)=>{
  try {
    const searchcitys = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&appid=55228663782794261c86a7a39a9d3ce7`
    );
    dispatch(getSearchCityDetail(searchcitys.data));
  } catch (error) {
    console.log("errror");
  }
}