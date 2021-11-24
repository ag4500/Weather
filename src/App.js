import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './components/login'
import DashBoard from './components/dashboard'
import {LinkContainer} from 'react-router-bootstrap'
import { Navbar,Nav,Container} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar >
          <Container>
          <Navbar.Brand href="/">Weather App</Navbar.Brand>
            
          </Container>
        </Navbar>
      </div>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={DashBoard} />
      
      </Switch>
    </Router>
  );
}
export default App;
