import { Table } from "react-bootstrap";
const GetHistory = () => {
  const usersDataString = localStorage.getItem("historydata");
  const users = JSON.parse(usersDataString);
  const cityDataString = localStorage.getItem("citydata");
  const cities = JSON.parse(cityDataString);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Table striped bordered hover size="lg">
              <thead>
                <tr>
                  <th>UserName</th>
                  <th>LogInDateTime</th>
                  <th>count</th>
                </tr>
              </thead>
              <tbody>
                {users
                  ? users.map((data) => (
                      <tr key={data.id}>
                        <td>{data.name}</td>
                        <td>{data.date}</td>
                        <td>{data.count}</td>
                      </tr>
                    ))
                  : "No History Available"}
              </tbody>
            </Table>
          </div>
          <div className="col-3">
            {" "}
            <Table striped bordered hover size="lg">
              <thead>
                <tr>
                  <th>City</th>
                  <th>DateTime</th>
                </tr>
              </thead>
              <tbody>
                {cities
                  ? cities.map((data, index) => (
                      <tr key={index}>
                        <td>{data.city}</td>
                        <td>{data.date}</td>
                      </tr>
                    ))
                  : "No History Available"}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
export default GetHistory;
