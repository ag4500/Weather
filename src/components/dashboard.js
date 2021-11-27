import { useEffect } from "react";
import {
  isLogin,
  getCityByCoordinate,
  getSearchCityDetail,
  setCity,
  getWeatherDetail,
} from "../action";
import {
  getCityWeather,
  searchCity,
  getCityCoordinate,
} from "../thunks/weather";
import { Card } from "react-bootstrap";
import user from "../api/details.json";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
const DashBoard = () => {
  const history = useHistory();
  const locations = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();
  onchange = (e) => {
    const { name, value } = e.target;
    const city = { [name]: value };
    dispatch(setCity(city));
  };
  const handleLogOut = () => {
    dispatch(isLogin(!locations.loggedIn));
    dispatch(getWeatherDetail((locations.weatherDetail = [])));
    dispatch(getSearchCityDetail((locations.searchcity = locations.record)));
    history.push("/");
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    let cityData = {
      cities: locations.city.city,
      date: new Date().toLocaleString(),
    };
    let getdata = localStorage.getItem("citydata") || "[]";
    let parsedata = JSON.parse(getdata);
    localStorage.setItem(
      "citydata",
      JSON.stringify(parsedata.concat(cityData))
    );
    dispatch(searchCity(locations.city.city));
  };
  useEffect(() => {
    function success(position) {
      const { latitude, longitude } = position.coords;
      const data = { ...locations.coordinate, latitude, longitude };
      dispatch(getCityCoordinate(data));
      dispatch(getCityByCoordinate(data));
    }
    function errors(err) {
      dispatch(getCityWeather(user[locations.index].city));
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors);
          } else if (result.state === "denied") {
            dispatch(getCityWeather(user[locations.index].city));
          }
        });
    } else {
      alert("Sorry Not available!");
    }
  }, []);
  return (
    <>
      <Button className="my-2" variant="danger" onClick={handleLogOut}>
        Logout
      </Button>
      <div className="container ">
        <div className="row">
          <div className="col">
            <Card.Header style={{ width: "18rem" }}>
              {locations.weatherDetail.weather
                ? locations.weatherDetail.name
                : undefined}
            </Card.Header>
            {locations.weatherDetail.weather
              ? locations.weatherDetail.weather.map((i) => (
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>Weather</Card.Title>
                      <Card.Text>{i.main}</Card.Text>
                      <Card.Text>{i.description}</Card.Text>
                      <Card.Text>{i.icon}</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              : undefined}
            <div className="col">
              {locations.weatherDetail.weather ? (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Temperature</Card.Title>
                    <Card.Text>
                      Temperature : {locations.weatherDetail.main.temp}
                    </Card.Text>

                    <Card.Text>
                      {" "}
                      Pressure:
                      {locations.weatherDetail.main.pressure}
                    </Card.Text>
                    <Card.Text>
                      {" "}
                      Humidity :{locations.weatherDetail.main.humidity}
                    </Card.Text>
                    <Card.Text>
                      Degree : {locations.weatherDetail.wind.deg}&deg;C
                    </Card.Text>

                    <Card.Text>
                      Wind Speed : {locations.weatherDetail.wind.speed}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ) : (
                "loading...."
              )}
            </div>
          </div>
          <div className="col">
            <form onSubmit={OnSubmit}>
              <input
                className="form-control me-2"
                type="search"
                name="city"
                value={locations.city.city}
                onChange={(event) => onchange(event)}
                placeholder="Search By City"
                aria-label="Search"
              ></input>{" "}
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="col-3">
            <Card.Header style={{ width: "18rem" }}>
              {locations.searchcity.weather
                ? locations.searchcity.name
                : undefined}
            </Card.Header>

            {locations.searchcity.weather
              ? locations.searchcity.weather.map((i) => (
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>Weather</Card.Title>
                      <Card.Text>{i.main}</Card.Text>
                      <Card.Text>{i.description}</Card.Text>
                      <Card.Text>{i.icon}</Card.Text>
                    </Card.Body>
                  </Card>
                ))
              : undefined}
            <div className="col">
              {locations.searchcity.weather ? (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>Temperature</Card.Title>
                      <Card.Text>
                        Temperature : {locations.searchcity.main.temp}
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        Pressure:
                        {locations.searchcity.main.pressure}
                      </Card.Text>
                      <Card.Text>
                        {" "}
                        Humidity :{locations.searchcity.main.humidity}
                      </Card.Text>
                      <Card.Text>
                        Degree : {locations.searchcity.wind.deg}&deg;C
                      </Card.Text>
                      <Card.Text>
                        Wind Speed : {locations.searchcity.wind.speed}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </>
              ) : undefined}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
/*
<div className="container">
        

        
        
        </div>
    </>
*/
