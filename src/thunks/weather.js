import axios from "axios";
import { weather } from "../action/index";
export const weathers = (city) => async (dispatch) => {
  try {
    const citys = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55228663782794261c86a7a39a9d3ce7`
    );
    dispatch(weather(citys.data.weather));
  } catch (error) {
    console.log("errror");
  }
};

