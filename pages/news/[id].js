import React from 'react'
import Sidebar from "../../components/layout/Sidebar";
import TopNavigation from "../../components/layout/TopNavigation";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BsFillBriefcaseFill } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

export default function editNews() {
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
    const router = useRouter();

    const { id } = router.query;


    useEffect(() => {
        fillUpdateForm();
      }, []);
      const fillUpdateForm = async () => {
        console.warn(id);
        let result = await fetch(`http://localhost:5000/jobs/${id}`);
        result = await result.json();
        console.warn(result);
        setJobtitle(result.job_title);
        setOrgname(result.organization_name);
        setJobdescription(result.job_des);
     
        setAppdeadline(result.app_deadline);
        setVacancy(result.vacancy);
        setSalary(result.salary);
        setJobresp(result.job_resp);
        setWorktype(result.worktype);
        setEmpstat(result.empt_stat);
        setJoblocation(result.job_location);
        setEdureq(result.edu_req);

      };
    
      const updateJob = async () => {
        console.warn(job_title, job_des, job_photo, worktype, job_resp, edu_req, empt_stat,job_location, vacancy, app_deadline, salary, organization_name);
        let result = await fetch(`http://localhost:5000/jobUpdate/${id}`, {
          method : 'Put',
          body: JSON.stringify({job_title, job_des, job_photo, worktype, job_resp, edu_req, empt_stat,job_location, vacancy, app_deadline, salary, organization_name}),
          headers: {
            'Content-Type':'application/json'
          }
          
        });
        result = await result.json();
        console.warn(result);
    
        router.push('/news');
            

      }

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
                  <Form.Control value={organization_name} type="text" placeholder="Enter organization name" onChange={(e) => setOrgname(e.target.value)} />
                </Form.Group>
                <Form.Group
                  className="ms-3 mt-2"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>Job title</Form.Label>
                  <Form.Control value={job_title} type="text" placeholder="Enter title" onChange={(e) => setJobtitle(e.target.value)} />
                </Form.Group>

                <Form.Group
                  className="mt-2 me-3"
                  as={Col}
                  controlId="formGridPassword"
                >
                  Worktype
                  <Form.Select className="mt-2" value={worktype} aria-label="Default select example"  onChange={(e) => setWorktype(e.target.value)}>
                    
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
                <Form.Control as="textarea" rows={3} value={job_des}  onChange={(e) => setJobdescription(e.target.value)}/>
              </Form.Group>
              <Form.Group
                className="ms-3 me-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Job responsibilities</Form.Label>
                <Form.Control as="textarea" rows={3} value={job_resp}  onChange={(e) => setJobresp(e.target.value)} />
              </Form.Group>

              <Form.Group
                className="ms-3 me-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Educational requirements</Form.Label>
                <Form.Control value={edu_req} as="textarea" rows={3}  onChange={(e) => setEdureq(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3 ms-3 me-3" controlId="">
                <Form.Label>Employment status</Form.Label>
                <Form.Control value={empt_stat} placeholder="Enter status (Ex: Full time, Half day etc.)"  onChange={(e) => setEmpstat(e.target.value)}/>
              </Form.Group>

              <Form.Group
                className="mb-3 ms-3 me-3"
                controlId="formGridAddress1"
              >
                <Form.Label>Location</Form.Label>
                <Form.Control value={job_location} placeholder="Location"  onChange={(e) => setJoblocation(e.target.value)}/>
              </Form.Group>

              <Form.Group className="mb-3 ms-3 me-3" controlId="">
                <Form.Label>Vacancy</Form.Label>
                <Form.Control value={vacancy} placeholder="Number of vacancies"  onChange={(e) => setVacancy(e.target.value)} />
              </Form.Group>

              <Row className="mb-3 ms-2">
                <Form.Group as={Col} type="datetime-local">
                  <Form.Label>Deadline</Form.Label>
                  <Form.Control value={app_deadline} type="datetime-local"  onChange={(e) => setAppdeadline(e.target.value)}/>
                </Form.Group>

                <Form.Group className="me-3" as={Col} controlId="">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control value={salary} placeholder="Number of vacancies"  onChange={(e) => setSalary(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formFile" as={Col} className="me-3">
                  <Form.Label>Description image</Form.Label>
                  <Form.Control  type="file"  onChange={(e) => setJobphoto(e.target.value)} />
                </Form.Group>
              </Row>
              <Link href="/news">
                <Button className="ms-3 mt-3" onClick={updateJob}>
                   Save changes
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
  }
