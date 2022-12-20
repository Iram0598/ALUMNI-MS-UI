import {React, useState, useEffect} from "react";
import Sidebar from "../../components/layout/Sidebar";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import TopNavigation from "../../components/layout/TopNavigation";
import Link from "next/link";
import { MdTipsAndUpdates } from "react-icons/md";
import cardpicture from "../../public/david.jpg";
import Image from "next/future/image";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { VscPassFilled } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import eventpic from "../../public/event-management3.jpg";
import { Modal } from "react-bootstrap";
export default function index() {

    const [profiles, setProfiles] = useState([]);
    const [events, setEvents] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchData = () => {
        return fetch("http://localhost:5000/getProfiledata")
          .then((res) => res.json())
          .then((data) => {setProfiles(data)});
      };

      const eventData = () => {
        return fetch("http://localhost:5000/getEvent")
          .then((res) => res.json())
          .then((data) => setEvents(data));
      };
    
      useEffect(() => {
        fetchData();
        eventData();
      }, []);
  return (
    <div>
      <Container fluid>
        <Row className="min-vh-100 ">
          <Col className="back  " sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <TopNavigation />
            <Card>
              <div>
                <h4 className="mt-3 ms-4 border-bottom border-dark">
                  <MdTipsAndUpdates /> Registration request
                </h4>
              </div>
              <div>
                <Row className="g-4 ms-2 me-2 mb-3 mt-2">
                  {profiles.map((item) => (
                    <Col sm={4} key={item._id}>
                      <Card>
                        <Image
                          style={{ marginLeft: "20px", marginTop: "10px" }}
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
                          <Link href="/">
                            <Button className="ms-2 me-2"  variant="dark">Decline</Button>
                          </Link>
                          <Link href="/">
                            <Button variant="dark">Approve</Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card>
            <Card className="mt-2" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
              <div>
                <h4 className="mt-3 ms-4 border-bottom border-dark">
                  Event request
                </h4>
              </div>
             
              <div>
                <Row className="g-4 ms-2 me-2 mb-3 mt-2">
                  {events.map((item) => (
                    <><Col sm={4} key={item._id}>
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
                              <Button  variant="dark" className=" ms-3 me-2">
                                <BiEdit />
                                Edit
                              </Button>
                            </Link>
                            <Link href="/requests">
                              <Button className="me-2" variant="danger" onClick={handleShow}>
                                <RiDeleteBinLine />
                                Delete
                              </Button>
                            </Link>
                            <Link href="/">
                              <Button variant="dark" onClick={handleShow}>
                                <RiDeleteBinLine />
                                Approve
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
                          <Modal.Title>Are you sure want to delete?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure want to delete?</Modal.Body>
                        <Modal.Footer >
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}
