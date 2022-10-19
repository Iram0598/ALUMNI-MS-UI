import React from "react";
import { Container, Row, Col, Image, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHome } from "react-icons/ai";
import { GoOrganization } from "react-icons/go";
import { MdCelebration } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { IoSettings } from "react-icons/io";

export default function Sidebar() {
  return (
    
    <div>
      <Container fluid>
        <Row className="min-vh-100 ">
          <Col className="back" sm={2}>
            <div className="text-white d-flex mt-2">
              <AiFillHome className="h2" />
              <h3>Dashboard</h3>
            </div>
            <div className="list-group links mt-5 ms-0 rounded-0 ">
              <a
                href="/"
                className="list-group-item list-group-item-action mb-3 links"
              >
                {" "}
                <GoOrganization className="me-3" />
                Alumni{" "}
                <Badge pill className="ms-4" bg="danger">
                  New
                </Badge>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action mb-3 links "
              >
                {" "}
                <MdCelebration className="me-3" />
                Events <Badge className="ms-5">+2</Badge>
              </a>
             
              <DropdownButton id="dropdown-basic-button" title="Profile settings">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
            
            </div>
          </Col>
          <Col sm={10}></Col>
        </Row>
      </Container>
    </div>
    
  );
}
