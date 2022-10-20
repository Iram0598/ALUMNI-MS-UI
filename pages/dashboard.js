import React from 'react'
import Sidebar from '../components/layout/Sidebar';

import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";





export default function Dashboard () {
  return (
    <div>
      <Container fluid>
        <Row className="min-vh-100 ">
          <Col className="back" sm={2}>
            <Sidebar/>
          </Col>
          <Col sm={10}>
            Hello
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}
