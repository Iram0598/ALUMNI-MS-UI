import React, { useState, useEffect } from "react";
import Sidebar from "../../components/layout/Sidebar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import TopNavigation from "../../components/layout/TopNavigation";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "next/future/image";
import jobpicture from "../../public/jobpic.jpg";
import jobpicture2 from "../../public/10-what-is-ux-design.jpg";
import Link from "next/link";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { Modal } from "react-bootstrap";
export default function index() {
  const [jobs, setJobs] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = () => {
    return fetch("http://localhost:5000/getJob")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteJob = async (id) => {
    console.warn(id);
    let result = await fetch(`http://localhost:5000/jobDelete/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      fetchData();
      handleClose();
    }
  };
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
                {jobs.map((item) => (
                  <>
                    {" "}
                    <Col className="d-flex justify-content-center">
                      <Card
                        className="me-3 mb-5 news"
                        style={{ width: "24rem", height: "31rem" }}
                      >
                        <h2 className="text-center">
                          {item.organization_name}
                        </h2>
                        <Image
                          style={{ marginLeft: "30px", marginTop: "10px" }}
                          src={jobpicture}
                          width={300}
                          height={300}
                        ></Image>
                        <Card.Body>
                          <Card.Title>{item.job_title}</Card.Title>
                          <Card.Text>{item.job_des}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                          <ListGroup.Item>
                            <b>Vacancy: {item.vacancy}</b>
                          </ListGroup.Item>
                          <ListGroup.Item>
                            <b>Deadline: {item.app_deadline}</b>
                          </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                          <Link href={`/news/view/${item._id}`}>
                            <Button variant="dark">
                              {" "}
                              <BiCommentDetail className="me-2" />
                              Details
                            </Button>
                          </Link>
                          <Link href={`/news/${item._id}`}>
                            <Button variant="dark" className="ms-2">
                              Edit
                            </Button>
                          </Link>
                          <Link href="">
                            <Button
                              variant="danger"
                              className="ms-2"
                              onClick={handleShow}
                            >
                              {" "}
                              <RiDeleteBinLine />
                            </Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>{item.organization_name}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Are you sure want to delete?</Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="primary"
                          onClick={() => deleteJob(item._id)}
                        >
                          Yes
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                          Cancel
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
