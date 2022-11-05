import React from "react";
import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import eventpic from "../public/event-management3.jpg";
import Image from "next/future/image";
import Link from "next/link";
import { BiEdit } from "react-icons/bi";
import { VscPassFilled } from "react-icons/vsc";
import { AiOutlinePlus } from "react-icons/ai";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavigation from "../components/layout/TopNavigation";

export default function events() {
  const [response, setresponse] = useState(true);
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
              <div >
                <h4 className="mt-3 ms-4 border-bottom border-dark">
                  Upcoming events
                </h4>
              </div>
              <div className="align-self-end me-2">
                <Link href="/eventCreate">
                <Button variant="success">
                  <AiOutlinePlus />
                  Create new event
                </Button>
                </Link>
              </div>
              <div>
                <Row className="g-4 ms-2 me-2 mb-3 mt-2">
                  {Array.from({ length: 1 }).map((_, idx) => (
                    <Col sm={3}>
                      <Card>
                        <Image
                          style={{ marginLeft: "30px", marginTop: "10px" }}
                          src={eventpic}
                          width={300}
                          height={300}
                        ></Image>
                        <Card.Body>
                          <Card.Title style={{ textAlign: "left" }}>
                            Iftar mahfil
                          </Card.Title>
                          <Card.Text>
                            This is a longer card with supporting text below as
                            a natural lead-in to additional content. This
                            content is a little bit longer.<br></br>
                            <br></br>
                            <b>
                              Respond status: <VscPassFilled /> Going{" "}
                            </b>
                          </Card.Text>
                          <div className="d-flex justify-content-between">
                            <Link href="/eventsView">
                              <Button>Details</Button>
                            </Link>
                            <Button variant="light" className="bg-info">
                              <BiEdit />
                              Edit
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
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
