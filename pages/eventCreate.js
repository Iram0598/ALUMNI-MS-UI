import React from "react";
import Sidebar from "../components/layout/Sidebar";
import TopNavigation from "../components/layout/TopNavigation";
import FloatingLabel from "react-bootstrap/FloatingLabel";
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
                  New event
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
                      placeholder="Leave a comment here"
                    />
                  </FloatingLabel>
                  <Form.Group controlId="formFileSm" className="mt-4">
                    <Form.Control type="file" size="sm" />
                  </Form.Group>
                  <Form.Group className="mt-2" controlId="formBasicEmail">
                          <Form.Control
                            type="date"
                            
                          />
                        </Form.Group>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
