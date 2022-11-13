import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../../components/layout/Sidebar";
import eventpic from "../../public/event-management3.jpg";
import Image from "next/future/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { VscPassFilled } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavigation from "../../components/layout/TopNavigation";
import { Modal } from "react-bootstrap";

export default function events() {
  const [events, setEvents] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = () => {
    return fetch("http://localhost:5000/getEvent")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteEvent = async (id) => {
    console.warn(id);
    let result = await fetch(`http://localhost:5000/eventDelete/${id}`, {
      method: "Delete",
    });
    result = await result.json();
  
  };

  return (
    <div>
      <Container fluid>
        <Row className="min-vh-100 ">
          <Col className="back" sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <TopNavigation />
            <Card className="mt-2">
              <div>
                <h4 className="mt-3 ms-4 border-bottom border-dark">
                  Upcoming events
                </h4>
              </div>
              <div className="align-self-end me-2">
                <Link href="/events/create">
                  <Button variant="success">
                    <AiOutlinePlus />
                    Create new event
                  </Button>
                </Link>
              </div>
              <div>
                <Row className="g-4 ms-2 me-2 mb-3 mt-2">
                  {events.map((item) => (
                    <><Col sm={3} key={item._id}>
                      <Card>
                        <Image
                          style={{ marginLeft: "30px", marginTop: "10px" }}
                          src={eventpic}
                          width={300}
                          height={300}
                        ></Image>
                        <Card.Body>
                          <Card.Title style={{ textAlign: "left" }}>
                            {item.title}
                          </Card.Title>
                          <Card.Text>
                            {item.description}
                            <br></br>
                            <br></br>
                            <b>
                              Respond status: <VscPassFilled /> Going{" "}
                            </b>
                          </Card.Text>
                          <div className="d-flex justify-content-between">
                            <Link href={`/events/view/${item._id}`}>
                              <Button>Details</Button>
                            </Link>
                            <Link href={`/events/${item._id}`}>
                              <Button variant="light" className="bg-info">
                                <BiEdit />
                                Edit
                              </Button>
                            </Link>
                            <Link href="/events">
                              <Button variant="danger" onClick={handleShow}>
                                <RiDeleteBinLine />
                                Delete
                              </Button>
                            </Link>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col><Modal
                      show={show}
                    
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                        <Modal.Header closeButton>
                          <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure want to delete?</Modal.Body>
                        <Modal.Footer>
                          <Button variant="primary" onClick={() => deleteEvent(item._id)}>
                            Yes
                          </Button>
                          <Button variant="secondary" onClick={handleClose}>
                            Cancel
                          </Button>
                        </Modal.Footer>
                      </Modal></>
                  ))}
                </Row>
              </div>
            </Card>
            <Card className="mt-2 mb-4">
              <div className="w-25">
                <h4 className="mt-3 ms-4 border-bottom border-dark">
                  Past events
                </h4>
              </div>
              <div className="d-flex ms-4 mt-3 me-3 mb-3">
                <Row xs={1} md={2} className="g-4">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                      <Card>
                        <Image
                          style={{ marginLeft: "30px", marginTop: "10px" }}
                          src={eventpic}
                          width={690}
                          height={280}
                        ></Image>
                        <Card.Body>
                          <Card.Title>Card title</Card.Title>
                          <Card.Text>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.
                          </Card.Text>
                          <Button>View</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    
    </div>
  );
}
