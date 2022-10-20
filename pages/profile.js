import React from "react";
import Sidebar from "../components/layout/Sidebar";
import Image from "next/future/image";
import dummyImage from '../public/user-image-png.png'

import { Container, Row, Col, Badge, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavigation from "../components/layout/TopNavigation";

export default function profile() {
  return (
    <div>
      <Container fluid>
        <Row className="min-vh-100 ">
          <Col className="back" sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <TopNavigation/>
            <Card className="h-75">
              <div >
                <Image
                className="ms-5 mt-3 fluid"
                  sizes="15vw"
                  src={dummyImage}
                  width={350}
                  height={300}
                >
                </Image>
              </div>
              <div>
                
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
