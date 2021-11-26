import { useEffect } from "react";
import { login, location, search,  permission } from "../action";
import { weathers, searchCity, geocord } from "../thunks/weather";
import { Card } from "react-bootstrap";
import user from "../api/details.json";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
const DashBoard = () => {
  const history = useHistory();
  const locations = useSelector((state) => state.login);
  const dispatch = useDispatch();
  onchange = (e) => {
    locations.city = e.target.value;
    dispatch(search(locations.city));
  };
  const handleLogOut = () => {
    dispatch(login(!locations.loggedIn,locations.data=locations.record));
    history.push('/')
  };
  const OnSubmit = (e) => {
    e.preventDefault();
    let cityData = { city: locations.city, date: new Date().toLocaleString() };
    let getdata = localStorage.getItem("citydata") || "[]";
    let parsedata = JSON.parse(getdata);
    localStorage.setItem(
      "citydata",
      JSON.stringify(parsedata.concat(cityData))
    );
    dispatch(searchCity(locations.city));
  };
  useEffect(() => {
    function success(position) {
      const { latitude, longitude } = position.coords;
      const data = { ...locations.location, latitude, longitude };
      dispatch(geocord(data));
      dispatch(location(data));
      dispatch(permission(!locations.permission));
    }
    function errors(err) {
      dispatch(permission(!locations.permission));
      dispatch(weathers(user[locations.index].city));
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
            dispatch(weathers(user[locations.index].city));
          }
        });
    } else {
      alert("Sorry Not available!");
    }
    console.log(navigator);
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
              : "Hiii"}
            <div className="col">
              {locations.weatherDetail.weather ? (
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Temperature</Card.Title>
                    <Card.Text>
                      Max. Temperature : {locations.weatherDetail.main.temp}
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
                      Speed : {locations.weatherDetail.wind.speed}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ) : (
                "wait"
              )}
            </div>
          </div>

          <div className="col">
            <form onSubmit={OnSubmit}>
              <input
                className="form-control me-2"
                type="search"
                name="city"
                value={locations.city}
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
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>Temperature</Card.Title>
                    <Card.Text>
                      Max. Temperature : {locations.searchcity.main.temp}
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
                      Speed : {locations.searchcity.wind.speed}
                    </Card.Text>
                  </Card.Body>
                </Card>
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
