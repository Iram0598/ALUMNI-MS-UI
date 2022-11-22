import { React, useState, useEffect } from "react";
import Sidebar from "../../../components/layout/Sidebar";
import Image from "next/future/image";
import profilepic from "../../../public/pro.jpg";
import Link from "next/link";
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
import Modal from "react-bootstrap/Modal";
import TopNavigation from "../../../components/layout/TopNavigation";
import { AiTwotoneEdit, AiOutlinePlus } from "react-icons/ai";
import { useRouter } from "next/router";
import JobModal from "../../../components/layout/JobModal";

export default function profile() {
  const router = useRouter();
  const [showprofile, setShowprofile] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = () => {
    return fetch("http://localhost:5000/profile/" + router.query.id)
      .then((res) => res.json())
      .then((data) => setShowprofile(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                <div className="d-block">
                  <Image
                    className="ms-5 mt-3 fluid"
                    sizes="15vw"
                    alt="profile picture"
                    src={profilepic}
                    width={300}
                    height={300}
                  ></Image>
                </div>
                <div>
                  <Link href={`/profile/${router.query.id}`}>
                    <Button className="ms-5 btn-light">
                      <AiTwotoneEdit /> Edit profile
                    </Button>
                  </Link>
                </div>
                <div className="ms-5 mb-4 mt-3 fonts">
                  <h1 className="border-bottom border-dark">
                    Basic Informations
                  </h1>
                </div>
                <div className="d-flex ms-5">
                  <div className="me-5">
                    <h5>Name:</h5>
                    <h5>Id:</h5>
                    <h5>Program:</h5>
                    <h5>Gender:</h5>
                    <h5>Year of admission:</h5>
                    <h5>Present address:</h5>
                    <h5>Permanent address:</h5>
                  </div>
                  <div>
                    <h5>{showprofile?.name}</h5>
                    <h5>19103229</h5>
                    <h5>BCSE</h5>
                    <h5>{showprofile?.gender}</h5>
                    <h5>2019</h5>
                    <h5>{showprofile.presentaddress}</h5>
                    <h5>{showprofile?.permanentaddress}</h5>
                  </div>
                </div>
                <div className="ms-5 mb-4 mt-3">
                  <h1 className="border-bottom border-dark">Job description</h1>
                </div>

                <div className="d-flex ms-5">
                  <div className="me-5">
                    <h5>Company/Organization:</h5>
                    <h5>Department:</h5>
                    <h5>Designation:</h5>
                    <h5>Organization type:</h5>
                    <h5>joining date:</h5>
                    <h5>Organization address:</h5>
                  </div>
                  <div>
                    <h5>{showprofile?.organization} </h5>
                    <h5>{showprofile?.department}</h5>
                    <h5>{showprofile?.designation}</h5>
                    <h5>{showprofile?.o_type}</h5>
                    <h5>{showprofile?.joiningdate}</h5>
                    <h5>{showprofile?.o_address}</h5>
                  </div>
                </div>
                <div className="ms-5 mt-3">
                  <Button variant="dark" onClick={handleShow}>
                    {" "}
                    <AiOutlinePlus className="me-2" />
                    Create a vacancy post for {showprofile?.organization}
                  </Button>
                </div>
                <>
                  <Modal
                    show={show}
                    size="xl"
                    dialogClassName="modal-90w"
                    onHide={handleClose}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>
                        Create new Job for {showprofile?.organization}{" "}
                      </Modal.Title>
                    </Modal.Header>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group
                          className="ms-3 mt-2"
                          as={Col}
                          controlId="formGridEmail"
                        >
                          <Form.Label>Job title</Form.Label>
                          <Form.Control type="text" placeholder="Enter title" />
                        </Form.Group>

                        <Form.Group
                          className="mt-2 me-3"
                          as={Col}
                          controlId="formGridPassword"
                        >
                          <Form.Label>Workplace</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter workplace"
                          />
                        </Form.Group>
                      </Row>
                      <Form.Group
                        className="ms-3 me-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Job description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Group
                        className="ms-3 me-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Job responsibilities</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>

                      <Form.Group
                        className="ms-3 me-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Educational requirements</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Group className="mb-3 ms-3 me-3" controlId="">
                        <Form.Label>Employment status</Form.Label>
                        <Form.Control placeholder="Enter status (Ex: Full time, Half day etc.)" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3 ms-3 me-3"
                        controlId="formGridAddress1"
                      >
                        <Form.Label>Location</Form.Label>
                        <Form.Control placeholder="Location" />
                      </Form.Group>

                      <Form.Group className="mb-3 ms-3 me-3" controlId="">
                        <Form.Label>Vacancy</Form.Label>
                        <Form.Control placeholder="Number of vacancies" />
                      </Form.Group>

                      <Row className="mb-3 ms-2">
                        <Form.Group as={Col}  type="datetime-local">
                          <Form.Label>Deadline</Form.Label>
                          <Form.Control type="datetime-local" />
                        </Form.Group>
 
                        <Form.Group className="me-3" as={Col} controlId="">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control placeholder="Number of vacancies" />
                      </Form.Group>

                        <Form.Group controlId="formFile" as={Col} className="me-3">
                          <Form.Label>Description image</Form.Label>
                          <Form.Control type="file" />
                        </Form.Group>
                      </Row>

                      <Form.Group className="mb-3 ms-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                    </Form>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
