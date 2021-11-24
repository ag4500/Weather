import { useEffect } from "react";
import { location, search, permission } from "../action";
import { weathers } from "../thunks/weather";
import { ListGroup } from "react-bootstrap";
import { Form, Button, FormControl, InputGroup } from "react-bootstrap";
import user from "../api/details.json";
import { useSelector, useDispatch } from "react-redux";
const DashBoard = () => {
  const locations = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const dispatchs = useDispatch();
  onchange = (e) => {
    locations.city = e.target.value;
    dispatchs(search(locations.city));
  };
  const OnSubmit = (e) => {
    let date = new Date().toLocaleString();
    e.preventDefault();
    let getcity = localStorage.getItem("city");
    let getdate = localStorage.getItem("citydate");
    if (getcity === null || getdate === null) {
      getcity = "";
      getdate = "";
    }
    localStorage.setItem("city", getcity.concat(locations.city));
    localStorage.setItem("citydate", getdate.concat(date));

    dispatch(weathers(locations.city));
  };
  useEffect(() => {
    function success(position) {
      const { latitude, longitude } = position.coords;
      const data = { ...locations.location, latitude, longitude };
      dispatchs(location(data));
      dispatchs(permission(!locations.permission));
    }
    function errors(err) {
      dispatchs(permission(!locations.permission));
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
  }, [dispatch,dispatchs]);
  return(
    <>
      <div className="container">
        <form className="col-sm-3" onSubmit={OnSubmit}>
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
        <div>
          "Latitude"<p>{locations.location.latitude}</p>
          "Longitude"<p>{locations.location.longitude}</p>
        </div>

        {locations.weather.map((data) => (
          <ul key={data.id}>
            <li style={{ listStyleType: "square" }}>
              <ListGroup>
                <ListGroup.Item>
                  {data.main} {data.description} {data.icon}
                </ListGroup.Item>
              </ListGroup>
            </li>
          </ul>
        ))}
      </div>
    </>
  ) 
  
};
export default DashBoard;
