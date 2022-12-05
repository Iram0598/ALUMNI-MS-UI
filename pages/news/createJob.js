import React, { useState, useEffect } from "react";
import Sidebar from "../../components/layout/Sidebar";
import TopNavigation from "../../components/layout/TopNavigation";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
export default function createJob() {
  const [job_title, setJobtitle] = useState("");
  const [organization_name, setOrgname] = useState("");
  const [job_des, setJobdescription] = useState("");
  const [job_photo, setJobphoto] = useState("");
  const [app_deadline, setAppdeadline] = useState("");
  const [vacancy, setVacancy] = useState("");
  const [salary, setSalary] = useState("");
  const [job_resp, setJobresp] = useState("");
  const [worktype, setWorktype] = useState("");
  const [empt_stat, setEmpstat] = useState("");
  const [job_location, setJoblocation] = useState("");
  const [edu_req, setEdureq] = useState("");

  const collectJobData = async () => {
    console.warn(job_title, job_des, job_photo, worktype, job_resp, edu_req, empt_stat,job_location, vacancy, app_deadline, salary, organization_name );
    const result = await fetch("http://localhost:5000/addJob", {
      method: "post",
      body: JSON.stringify({ job_title, job_des, job_photo, worktype, job_resp, edu_req, empt_stat,job_location, vacancy, app_deadline, salary, organization_name }),
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
                <div className="ms-3 mb-4 mt-3">
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
                  <Form.Label>Organization name</Form.Label>
                  <Form.Control type="text" placeholder="Enter organization name" onChange={(e) => setOrgname(e.target.value)} />
                </Form.Group>
                <Form.Group
                  className="ms-3 mt-2"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>Job title</Form.Label>
                  <Form.Control type="text" placeholder="Enter title" onChange={(e) => setJobtitle(e.target.value)} />
                </Form.Group>

                <Form.Group
                  className="mt-2 me-3"
                  as={Col}
                  controlId="formGridPassword"
                >
                  Worktype
                  <Form.Select className="mt-2" aria-label="Default select example"  onChange={(e) => setWorktype(e.target.value)}>
                    
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
                <Form.Control as="textarea" rows={3}  onChange={(e) => setJobdescription(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="ms-3 me-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Job responsibilities</Form.Label>
                <Form.Control as="textarea" rows={3}  onChange={(e) => setJobresp(e.target.value)} />
              </Form.Group>

              <Form.Group
                className="ms-3 me-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Educational requirements</Form.Label>
                <Form.Control as="textarea" rows={3}  onChange={(e) => setEdureq(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3 ms-3 me-3" controlId="">
                <Form.Label>Employment status</Form.Label>
                <Form.Control placeholder="Enter status (Ex: Full time, Half day etc.)"  onChange={(e) => setEmpstat(e.target.value)}/>
              </Form.Group>

              <Form.Group
                className="mb-3 ms-3 me-3"
                controlId="formGridAddress1"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control placeholder="Location"  onChange={(e) => setJoblocation(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3 ms-3 me-3" controlId="">
                <Form.Label>Vacancy</Form.Label>
                <Form.Control placeholder="Number of vacancies"  onChange={(e) => setVacancy(e.target.value)} />
              </Form.Group>

              <Row className="mb-3 ms-2">
                <Form.Group as={Col} type="datetime-local">
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control type="datetime-local"  onChange={(e) => setAppdeadline(e.target.value)}/>
                </Form.Group>

                <Form.Group className="me-3" as={Col} controlId="">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control placeholder="Number of vacancies"  onChange={(e) => setSalary(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formFile" as={Col} className="me-3">
                  <Form.Label>Description image</Form.Label>
                  <Form.Control type="file"  onChange={(e) => setJobphoto(e.target.value)} />
                </Form.Group>
              </Row>
              <Link href="/news">
                <Button className="ms-3 mt-3" onClick={collectJobData}>
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
