import { Table } from "react-bootstrap";
const GetHistory = () => {
  const usersDataString = localStorage.getItem("users");
  const users = JSON.parse(usersDataString);
  const cityDataString = localStorage.getItem("citydata");
  const cities = JSON.parse(cityDataString);
  return (
    <>
      <Table striped bordered hover size="lg">
        <thead>
          <tr>
            <th>UserName</th>
            <th>LogInDateTime</th>
            <th>City Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            ? users.map((data) => (
                <tr key={data.id}>
                  <td>{data.username}</td>
                  <td>{data.date}</td>
                  {cities
                    ? cities.map((i) => (
                        <>
                          <tr>
                            <td>{i.city}</td>
                          </tr>
                          <tr>
                            <td>{i.date}</td>
                          </tr>
                        </>
                      ))
                    : "no"}
                </tr>
              ))
            : "No History Available"}
        </tbody>
      </Table>
    </>
  );
};
export default GetHistory;
