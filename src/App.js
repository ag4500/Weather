import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import DashBoard from "./components/dashboard";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GetHistory from "./components/history";
function App() {
  const getuser = useSelector((state) => state.weatherReducer);
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Container>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Weather App</Nav.Link>
              </LinkContainer>
              {getuser.loggedIn ? (
                <>
                  <LinkContainer to="/dashboard">
                    <Nav.Link>DashBoard</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/history">
                    <Nav.Link>History</Nav.Link>
                  </LinkContainer>
                </>
              ) : (
                undefined
              )}
            </Nav>
          </Container>
        </Navbar>
      </div>
      <Switch>
        <Route exact path="/" component={Login} />

        {getuser.loggedIn ? (
          <>
            <Route exact path="/history" component={GetHistory} />

            <Route exact path="/dashboard" component={DashBoard} />
          </>
        ) : (
          <p>Login to use Dashboard/History</p>
        )}
      </Switch>
    </Router>
  );
}
export default App;
