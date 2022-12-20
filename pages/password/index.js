import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import TopNavigation from "../../components/layout/TopNavigation";
import Link from "next/link";

export default function index() {
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
                <div className="ms-3 mb-3">
              <div>
                <h2>Change password</h2>
              </div>
              <div className="w-75 mt-5 ">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Current password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>New password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link href="/">
                <Button variant="dark" className="mt-3">Save changes</Button>
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
