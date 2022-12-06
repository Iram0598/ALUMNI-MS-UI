import { React, useState, useEffect } from "react";
import Sidebar from "../../components/layout/Sidebar";
import cardpicture from "../../public/pro.jpg";
import Image from "next/future/image";
import Dropdown from "react-bootstrap/Dropdown";
import { BsSearch } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  CardGroup,
  Button,
  Table,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavigation from "../../components/layout/TopNavigation";
import Link from "next/link";
export default function alumni() {
  const [profiles, setProfiles] = useState([]);
  const [searchprofiles, setSearchprofiles] = useState([]);
  // const [sort, setSort] = useState([]);
  const[order, setOrder]= useState("ASC");

  const sorting =(col)=>{
    if (order==="ASC"){
      const sorted = [...profiles].sort((a,b)=>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1: -1
      );
      setSearchprofiles(sorted);
      setOrder("DSC");

    }
    if (order==="DSC"){
      const sorted = [...profiles].sort((a,b)=>
      a[col].toLowerCase() <  b[col].toLowerCase() ? 1: -1
      );
      setSearchprofiles(sorted);
      setOrder("ASC");
      
    }
 };



  const searchHandler = async(event) =>{
   let key = event.target.value;
   if (key)
   {
    let result = await fetch (`http://localhost:5000/search/${key}`)
    result = await result.json();
    if(result)
    {
      setSearchprofiles(result)
    }
   }
   else {
    fetchData();
   }

  }

  const searchHandler1 = async(event) =>{
    let key = event.target.value;
    if (key)
    {
     let result = await fetch (`http://localhost:5000/api/sorted_items`)
     result = await result.json();
 
   }
  }
  const fetchData = () => {
    return fetch("http://localhost:5000/getProfiledata")
      .then((res) => res.json())
      .then((data) => {setProfiles(data);setSearchprofiles(data);});
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Container fluid>
        <Row className="min-vh-100 ">
          <Col className="back" sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <TopNavigation />
            <Card>
              <div>
                <h4 className="mt-3 ms-4 border-bottom border-dark">
                  <MdTipsAndUpdates /> Newly added
                </h4>
              </div>
              <div>
                <Row className="g-4 ms-2 me-2 mb-3 mt-2">
                  {profiles.map((item) => (
                    <Col sm={4} key={item._id}>
                      <Card>
                        <Image
                          style={{ marginLeft: "30px", marginTop: "10px" }}
                          src={cardpicture}
                          width={300}
                          height={300}
                        ></Image>
                        <Card.Body>
                          <Card.Title style={{ textAlign: "center" }}>
                            {item.name}
                          </Card.Title>
                          <Card.Text>{item.organization}</Card.Text>
                          <Link href={`/profile/view/${item._id}`}>
                            <Button variant="dark">Visit profile</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
            <Card className="mt-2">
              <div>
                <h4 className="mt-3 ms-4 border-bottom border-dark">
                  <BsSearch /> Find alumni
                </h4>
              </div>
              <Form className="d-flex  w-75 ms-3 mb-3 mt-5">
                <Form.Control
                  onChange={searchHandler}
                  type="search"
                  placeholder="Search by Name, sector or organization"
                  className="me-2"
                  aria-label="Search"
                />
                
                <Dropdown className="ms-4">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort by
                  </Dropdown.Toggle>

                  <Dropdown.Menu >
                    <Dropdown.Item onClick={()=>sorting("admissionyear")}>Batch</Dropdown.Item>
                    <Dropdown.Item onClick={()=>sorting("studentid")} >ID</Dropdown.Item>
                    <Dropdown.Item onClick={()=>sorting("name")} >Name</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
              </Form>
              <div className="p-2">
                <Table striped bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th onClick={()=>sorting("name")}>Profile</th>
                      <th onClick={()=>sorting("studentid")} className="text-center">ID</th>
                      <th onClick={()=>sorting("department")} className="text-center">Sector</th>
                      <th onClick={()=>sorting("admissionyear")} className="text-center">Batch</th>
                      <th onClick={()=>sorting("organization")} className="text-center">Organization</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {searchprofiles.map((item, i) => (
                      <tr key={item._id}>
                        <td>{i + 1}</td>
                        <td>
                          <Image
                            src={cardpicture}
                            width={100}
                            height={100}
                          ></Image>{" "}
                          {item.name}
                        </td>
                        <td className="text-center align-middle">
                          {item.studentid}
                        </td>
                        <td className="text-center align-middle">
                          {item.o_type}
                        </td>
                        <td className="text-center align-middle">
                          {item.admissionyear}
                        </td>
                        <td className="text-center align-middle">
                          {item.organization}
                        </td>
                        <td className=" text-center align-middle">
                          <div>
                            <Link href="/profile">
                              <Button className="ms-2 me-2">View</Button>
                            </Link>
                            <Link href="/profileEdit">
                              <Button variant="warning">Edit</Button>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
