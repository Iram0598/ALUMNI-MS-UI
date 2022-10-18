import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavigation from "./TopNavigation";

export default function Sidebar() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="bg-primary" sm={2}><h2>Dashboard</h2></Col>
          <Col className="bg-danger" sm={10}>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}
