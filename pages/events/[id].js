import React, { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import TopNavigation from "../../components/layout/TopNavigation";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Link from "next/link";
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

export default function eventCreate() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverphoto, setCoverphoto] = useState("");
  const [eventdate, setEventdate] = useState("");

  const collectEventData = async () => {
    console.warn(title, description, coverphoto, eventdate);
    const result = await fetch("http://localhost:5000/addEvent", {
      method: "post",
      body: JSON.stringify({ title, description, coverphoto, eventdate }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    // localStorage.setItem("user", JSON.stringify(result.result))

    // router.push('/dashboard')
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
                </div>
                <div className=" w-75">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
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
                      type="datetime-local"
                      onChange={(e) => setEventdate(e.target.value)}
                    />
                  </Form.Group>
                  <Link href="/eventsView">
                    <Button
                      className="mt-4 align-middle"
                      onClick={collectEventData}
                    >
                      Create
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
