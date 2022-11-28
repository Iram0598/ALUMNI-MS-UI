import React, { useState, useEffect } from "react";
import Sidebar from "../../components/layout/Sidebar";
import TopNavigation from "../../components/layout/TopNavigation";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
export default function createJob() {
  const [job_title, setJobtitle] = useState("");
  const [job_des, setJobdescription] = useState("");
  const [job_photo, setJobphoto] = useState("");
  const [app_deadline, setAppdeadline] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [salary, setSalary] = useState("");
  const [job_resp, setJobresp] = useState("");
  const [workplace, setWorkplace] = useState("");
  const [emp_stat, setEmpstat] = useState("");
  const [job_location, setJoblocation] = useState("");
  const [edu_req, setEdureq] = useState("");

  const collectJobData = async () => {
    console.warn(title, description, coverphoto, eventdate, regfee, location);
    const result = await fetch("http://localhost:5000/addEvent", {
      method: "post",
      body: JSON.stringify({ title, description, coverphoto, eventdate, regfee, location }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    // localStorage.setItem("user", JSON.stringify(result.result))

    // router.push('/dashboard')
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
            <Form>
              <Row className="mb-3">
                <div className="ms-3 mb-4">
                  <h3>
                    {" "}
                    <b>
                      <BsFillBriefcaseFill className="h2 me-2" />
                      New job
                    </b>
                  </h3>
                </div>
                <Form.Group
                  className="ms-3 mt-2"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>Job title</Form.Label>
                  <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group
                  className="mt-2 me-3"
                  as={Col}
                  controlId="formGridPassword"
                >
                  Worktype
                  <Form.Select className="mt-2" aria-label="Default select example">
                    
                    <option value="On site">On site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </Form.Select>
                  
                </Form.Group>
              </Row>
              <Form.Group
                className="ms-3 me-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Job description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group
                className="ms-3 me-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Job responsibilities</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Form.Group
                className="ms-3 me-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Educational requirements</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Form.Group className="mb-3 ms-3 me-3" controlId="">
                <Form.Label>Employment status</Form.Label>
                <Form.Control placeholder="Enter status (Ex: Full time, Half day etc.)" />
              </Form.Group>

              <Form.Group
                className="mb-3 ms-3 me-3"
                controlId="formGridAddress1"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control placeholder="Location" />
              </Form.Group>

              <Form.Group className="mb-3 ms-3 me-3" controlId="">
                <Form.Label>Vacancy</Form.Label>
                <Form.Control placeholder="Number of vacancies" />
              </Form.Group>

              <Row className="mb-3 ms-2">
                <Form.Group as={Col} type="datetime-local">
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control type="datetime-local" />
                </Form.Group>

                <Form.Group className="me-3" as={Col} controlId="">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control placeholder="Number of vacancies" />
                </Form.Group>

                <Form.Group controlId="formFile" as={Col} className="me-3">
                  <Form.Label>Description image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Row>
              <Link href="/news">
                <Button className="ms-3 mt-3">
                  <AiOutlinePlus /> Create
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
