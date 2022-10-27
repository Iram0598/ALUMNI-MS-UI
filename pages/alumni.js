import React from "react";
import Sidebar from "../components/layout/Sidebar";
import cardpicture from "../public/pro.jpg";
import Image from "next/future/image";
import Dropdown from 'react-bootstrap/Dropdown';
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
import TopNavigation from "../components/layout/TopNavigation";
import Link from "next/link";
export default function alumni() {
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
                  Newly added
                </h4>
              </div>
              <div>
                <Row className="g-4 ms-2 me-2 mb-3 mt-2">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col sm={3}>
                      <Card>
                        <Image
                          style={{ marginLeft: "30px", marginTop: "10px" }}
                          src={cardpicture}
                          width={300}
                          height={300}
                        ></Image>
                        <Card.Body>
                          <Card.Title style={{ textAlign: "center" }}>
                            Mustafa Iram Udoy
                          </Card.Title>
                          <Card.Text>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                          </Card.Text>
                          <Link href="/profile">
                            <Button>Visit profile</Button>
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
                  Find alumni
                </h4>
              </div>
              <Form className="d-flex justify-content-between w-25 ms-3 mb-3 mt-5">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort by
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form>
              <div className="p-2">
                <Table striped bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Profile</th>
                      <th>ID</th>
                      <th>Sector</th>
                      <th>Batch</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <Image
                          src={cardpicture}
                          width={100}
                          height={100}
                        ></Image>{" "}
                        Mustafa Iram Udoy
                      </td>
                      <td className="text-center align-middle">19103229</td>
                      <td className="text-center align-middle">IT</td>
                      <td className="text-center align-middle">2019</td>
                      <td className=" text-center align-middle">
                        <div>
                          <Button className="ms-2 me-2">View profile</Button>
                          <Button variant="warning">Manipulate</Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <Image
                          src={cardpicture}
                          width={100}
                          height={100}
                        ></Image>{" "}
                        Mustafa Iram Udoy
                      </td>
                      <td className="text-center align-middle">19103229</td>
                      <td className="text-center align-middle">IT</td>
                      <td className="text-center align-middle">2019</td>
                      <td className=" text-center align-middle">
                        <div>
                          <Button className="ms-2 me-2">View profile</Button>
                          <Button variant="warning">Manipulate</Button>
                        </div>
                      </td>
                    </tr>
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
