import React, { useEffect, useState, useParams } from "react";
import Sidebar from "../../components/layout/Sidebar";
import TopNavigation from "../../components/layout/TopNavigation";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Link from "next/link";
import { useRouter } from "next/router";
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

export default function eventUpdate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverphoto, setCoverphoto] = useState("");
  const [eventdate, setEventdate] = useState("");
  const [regfee, setRegfee] = useState("");
  const [location, setLocation] = useState("");
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    fillUpdateForm();
  }, []);
  const fillUpdateForm = async () => {
    console.warn(id);
    let result = await fetch(`http://localhost:5000/events/${id}`);
    result = await result.json();
    console.warn(result);
    setTitle(result.title);
    setCoverphoto(result.coverphoto);
    setDescription(result.description);
    setLocation(result.location);
    setEventdate(result.eventdate);
    setRegfee(result.regfee);
  };

  const updateEvent = async () => {
    console.warn(title, description,coverphoto,location,regfee,eventdate);
    let result = await fetch(`http://localhost:5000/eventUpdate/${id}`, {
      method : 'Put',
      body: JSON.stringify({title, description,coverphoto,location,regfee,eventdate}),
      headers: {
        'Content-Type':'application/json'
      }
      
    });
    result = await result.json();
    console.warn(result);

    router.push('/events');
        

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
              <div className="w-25">
                <h4 className="mt-3 ms-4 border-bottom border-dark">
                  Create event
                </h4>
              </div>
              <div className="d-flex ms-4 mt-3 mb-3">
                <div className="me-5">
                  <h5>Title:</h5>
                  <h5 style={{ marginTop: "31px" }}>Description:</h5>
                  <h5 className="mt-5">Cover photo:</h5>
                  <h5 className="mt-4">Event date:</h5>
                  <h5 className="mt-2">Registration fee:</h5>
                  <h5 className="mt-2">Location:</h5>
                </div>
                <div className=" w-75">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        value={title}
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter event title"
                      />
                    </Form.Group>
                  </Form>

                  <FloatingLabel
                    className="mt-2"
                    controlId="floatingTextarea2"
                    label="Write event description here"
                  >
                    <Form.Control
                    value={description}
                      as="textarea"
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Leave a comment here"
                    />
                  </FloatingLabel>
                  <Form.Group controlId="formFileSm" className="mt-4">
                    <Form.Control
                      
                      type="file"
                      onChange={(e) => setCoverphoto(e.target.value)}
                      size="sm"
                    />
                  </Form.Group>
                  <Form.Group className="mt-2" controlId="formBasicEmail">
                    <Form.Control
                    value={eventdate}
                      type="datetime-local"
                      onChange={(e) => setEventdate(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2" controlId="formBasicEmail">
                    <Form.Control
                    value={regfee}
                      type="textarea"
                      onChange={(e) => setRegfee(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mt-2" controlId="formBasicEmail">
                    <Form.Control
                    value={location}
                      type="textarea"
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </Form.Group>
                  <Link href="/events">
                    <Button className="mt-4 align-middle" onClick={updateEvent}>
                      Save changes
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
