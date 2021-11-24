import { ListGroup } from "react-bootstrap";
const GetHistory=()=>{
    const get = localStorage.getItem("user");
        const getcount = localStorage.getItem("count");
        const getcity=localStorage.getItem("city")
        const getcitydate=localStorage.getItem("citydate")
        const getdate=localStorage.getItem("date")

     return(
         <>
         "History"
         <ul className="container" >
            <li style={{ listStyleType: "square" }}>
              <ListGroup>
                <ListGroup.Item>
                    "User":{get}
                
                </ListGroup.Item>
                <ListGroup.Item>
                    "Count":{getcount}
                </ListGroup.Item>
                <ListGroup.Item>
                    "Date":{getdate}
                </ListGroup.Item>
                <ListGroup.Item>
                    "City":{getcity}
                </ListGroup.Item>
                <ListGroup.Item>
                    "GetCityDate":{getcitydate}
                </ListGroup.Item>
              </ListGroup>
            </li>
          </ul>
         
         </>
     )
}
export default GetHistory