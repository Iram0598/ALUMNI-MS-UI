import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import Image from "next/future/image";
import dummyImage from "../public/user-image-png.png";
import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";



import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  Button,
  SSRProvider,
  Form,
} from "react-bootstrap";
import TopNavigation from "../../components/layout/TopNavigation";
import { AiTwotoneEdit } from "react-icons/ai";

export default function profileEdit() {
  const router = useRouter();
    const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div>
        <Container fluid>
          <Row className="min-vh-100 ">
            <Col className="back" sm={2}>
              <Sidebar />
            </Col>
            <Col sm={10}>
              <TopNavigation />
              <Card>
                <div className="d-flex">
                  <Image
                    className="ms-5 mt-3 fluid"
                    sizes="15vw"
                    alt="profile picture"
                    src={dummyImage}
                    width={350}
                    height={300}
                  ></Image>
                  <div style={{marginTop: "280px"}}>
                  <Form.Group controlId="formFileSm" className="mb-3 ms-5 w-25">
                    <Form.Control type="file" size="sm" />
                  </Form.Group>
                </div>
                </div>
                <div> 
                  <h4 className="ms-5 mt-3">
                    Mustafa Iram Udoy
                  </h4>
                </div>
                
                <div className="ms-5 mb-4 mt-3 fonts">
                  <h1 className="border-bottom border-dark">
                    Basic Informations
                  </h1>
                </div>
                <div className="d-flex ms-5">
                  <div className="me-5">
                    <h5>Name:</h5>
                    <h5 style={{marginTop: "31px"}}>Id:</h5>
                    <h5>Program:</h5>
                    <h5>Gender:</h5>
                    <h5>Year of admission:</h5>
                    <h5>Present address:</h5>
                    <h5 style={{marginTop: "85px"}}>Permanent address:</h5>
                  </div>
                  <div>
                    <h5><Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Enter name (used in university)"
                          />
                        </Form.Group>
                      </Form></h5>
                    <h5>19103229</h5>
                    <h5>BCSE</h5>
                    <h5>Male</h5>
                    <h5 style={{marginTop: "10px"}}>2019</h5>
                    <h5><FloatingLabel
                        controlId="floatingTextarea2"
                        label="Edit present address"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel></h5>
                    <h5><FloatingLabel
                        controlId="floatingTextarea2"
                        label="Edit permanent address"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel></h5>
                  </div>
                </div>
                <div className="ms-5 mb-4 mt-3">
                  <h1 className="border-bottom border-dark">Job description</h1>
                </div>
                <div className="d-flex ms-5">
                  <div className="me-5">
                    <h5 style={{marginTop: "1px"}}>Company/Organization:</h5>
                    <h5 style={{marginTop: "33px"}}>Department:</h5>
                    <h5 style={{marginTop: "22px"}}>Designation:</h5>
                    <h5 style={{marginTop: "40px"}} >Organization type:</h5>
                    <h5 style={{marginTop: "25px"}}>Joining date:</h5>
                    <h5>Organization address:</h5>
                  </div>
                  <div>
                    <h5> <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Enter Organization name"
                          />
                        </Form.Group>
                      </Form></h5>
                    <h5><Form.Select aria-label="Default select example">
                        <option>Select department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select></h5>
                    <h5><Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Enter designation"
                          />
                        </Form.Group>
                      </Form></h5>
                    <h5><Form.Select aria-label="Default select example">
                        <option>Select type</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select></h5>
                    <h5> <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            type="date"
                            
                          />
                        </Form.Group>
                      </Form> </h5>
                    <h5><FloatingLabel
                        controlId="floatingTextarea2"
                        label="Edit address"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "100px" }}
                        />
                      </FloatingLabel></h5>
                      <div>
                    <Button className="btn-info mb-3">
                      Save changes
                    </Button>
                  </div>
                  </div>
                  
                </div>
                
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
