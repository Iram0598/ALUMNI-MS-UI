import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TopNavigation from "../../components/layout/TopNavigation";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "next/future/image";
import jobpicture from "../../public/jobpic.jpg";
import jobpicture2 from "../../public/10-what-is-ux-design.jpg";
import Link from "next/link";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
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
            <div className="align-self-end me-2 mt-3">
              <Link href="/news/createJob">
                <Button variant="success">
                  <AiOutlinePlus />
                  New vacancy
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <h2>
                <u className="mt-2">Job offers</u>
              </h2>
            </div>
            <div className="mt-5">
              <Row>
                <Col className="d-flex justify-content-center">
                  <Card className="me-3 news" style={{ width: "24rem" }}>
                    <Image
                      style={{ marginLeft: "30px", marginTop: "10px" }}
                      src={jobpicture}
                      width={300}
                      height={300}
                    ></Image>
                    <Card.Body>
                      <Card.Title>Senior web developer</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <b></b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Vacancy:</b>
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Link href="/jobViewExample">
                        <Button variant="dark">
                          {" "}
                          <BiCommentDetail className="me-2" />
                          Details
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                  <Card className="me-3 news" style={{ width: "24rem" }}>
                    <Image
                      style={{ marginLeft: "30px", marginTop: "10px" }}
                      src={jobpicture2}
                      width={300}
                      height={300}
                    ></Image>
                    <Card.Body>
                      <Card.Title>UI/UX designer</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>
                        <b>Vacancy:</b>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Location</b>
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Link href="/news/view">
                        <Button variant="dark">
                          {" "}
                          <BiCommentDetail className="me-2" />
                          Details
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
