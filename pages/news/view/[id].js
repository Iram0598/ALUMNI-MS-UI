import React from "react";
import { useState, useEffect } from "react";
import Sidebar from "../../../components/layout/Sidebar";

import TopNavigation from "../../../components/layout/TopNavigation";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Image from "next/future/image";
import coverpic from "../../../public/coverpic.jpg";
import { useRouter } from "next/router";
import Link from "next/link";
export default function jobView() {
  const router = useRouter();
  const [showjob, setShowjob] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5000/jobs/" + router.query.id)
      .then((res) => res.json())
      .then((data) => setShowjob(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Container fluid>
        <Row className="min-vh-100 ">
          <Col className="back" sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <TopNavigation />
            <Card className="mt-2 mb-3">
              <div className="w-25">
                <h4 className="mt-3 ms-4 border-bottom border-dark">
                  Job details
                </h4>
              </div>
              <div className="ms-3 mt-4 ">
                <h3>
                  <b>{showjob?.job_title}</b>
                </h3>
              </div>
              <div className="ms-2">
                <Image src={coverpic} width={1085} height={600}></Image>
              </div>
              <div className="ms-2 mt-3">
                <h4><b>Description</b></h4>
              </div>
              <div className="ms-2 mt-3">
                <h6>{showjob?.job_des}</h6>
              </div>
              <div className="ms-2 mt-3">
                <h4><b>Job responsibility</b></h4>
              </div>
              <div className="ms-2 mt-3">
                <h6>{showjob?.job_resp}</h6>
              </div>
              <div className="ms-2 mt-3">
                <h4><b>Employment status</b></h4>
              </div>
              <div className="ms-2 mt-3">
                <h6>{showjob?.empt_stat}</h6>
              </div>
              <div className="ms-2 mt-3">
                <h4><b>Worktype</b></h4>
              </div>
              <div className="ms-2 mt-3">
                <h6>{showjob?.worktype}</h6>
              </div>
              <div className="ms-2 mt-3">
                <h4><b>Educational requirements</b></h4>
              </div>
              <div className="ms-2 mt-3">
                <h6>{showjob?.edu_req}</h6>
              </div>
              <div className="ms-2 mt-3">
                <h4><b>Application deadline</b></h4>
              </div>
              <div className="ms-2 mt-3">
                <h6>{showjob?.app_deadline}</h6>
              </div>
              <div className="ms-2 mt-3">
                <h4><b>Salary</b></h4>
              </div>
              <div className="ms-2 mt-3">
                <h6>{showjob?.salary}</h6>
              </div>
              <div className="ms-2 mt-3">
                <h4><b>Vacancy</b></h4>
              </div>
              <div className="ms-2 mt-3">
                <h6>{showjob?.vacancy}</h6>
              </div>
              <div className="ms-3">
                <Form.Group controlId="formFileSm" className="mb-3">
                  <Form.Label>Drop your CV here</Form.Label>
                  <Form.Control type="file" size="sm" />
                </Form.Group>
              </div>
              <div>
                <Link href="/">
                  <Button variant="dark" className="ms-2 mb-3">Upload</Button>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
