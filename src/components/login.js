import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { setuser, count, login, showHide, index } from "../action";
import user from "../api/details.json";
import { useHistory } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { FormControl, InputGroup } from "react-bootstrap";
const Login = () => {
  let countuser = 1;
  const dispatch = useDispatch();
  const history = useHistory();
  const updateUsers = useSelector((state) => state.login);
  const onSumbit = (e) => {
    e.preventDefault();
    const logIn = user.find(
      (i) => i.username == username && i.password == password
    );
    const userindex = user.findIndex(
      (i) => i.username == username && i.password == password
    );
    if (logIn) {
      const countdata = updateUsers.count;
      if (userindex in updateUsers.count) {
        dispatch(
          count([{ ...countdata, [userindex]: updateUsers.count[userindex] + 1,"date": new Date().toLocaleString(),'username':username ,"count": updateUsers.count[userindex] + 1}])
        );
      } else {
        dispatch(count([{ ...countdata, [userindex]: countuser,"date": new Date().toLocaleString(),'username':username ,"count": updateUsers.count[userindex]}]));
      }
      dispatch(
        login(!updateUsers.loggedIn),
        (updateUsers.data = updateUsers.record)
      );
      dispatch(showHide(!updateUsers.toggle));
      history.push("/dashboard");
      dispatch(index(userindex));
    } else {
      alert("please Logged In with valid username and password");
    }
  };
  
  
  const handleHideToggle = () => {
    dispatch(showHide(!updateUsers.toggle));
  };
  const handleShowToggle = () => {
    dispatch(showHide(!updateUsers.toggle));
  };
  const { username, password } = updateUsers.data;
  const onChange = (e) => {
    const { name, value } = e.target;
    const addusers = { ...updateUsers.data, [name]: value };
    dispatch(setuser(addusers));
  };
  return (
    <>
      <Button className="my-2" variant="info" onClick={handleShowToggle}>
        Login
      </Button>
      {updateUsers.toggle ? (
        <div className="container p-3 text-center bg-light">
          <Modal show={updateUsers.toggle} onHide={handleHideToggle}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={onSumbit}>
                <InputGroup className=" p-2 -3 ">
                  <InputGroup.Text id="basic-addon1">UserName</InputGroup.Text>
                  <FormControl
                    type="text"
                    name="username"
                    value={username}
                    onChange={(event) => onChange(event)}
                  />
                </InputGroup>
                <InputGroup className="p-2 -3 ">
                  <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                  <FormControl
                    type="password"
                    name="password"
                    value={password}
                    onChange={(event) => onChange(event)}
                  />
                </InputGroup>

                <Modal.Footer>
                  <Button variant="success" type="submit">
                    Login
                  </Button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      ) : (
        undefined
      )}
    </>
  );
};
export default Login;
