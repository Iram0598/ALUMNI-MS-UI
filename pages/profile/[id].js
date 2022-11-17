import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import Image from "next/future/image";
import dummyImage from "../../public/user-image-png.png";
import { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Badge,
  Card,
  Button,
  SSRProvider,
  Form,
} from "react-bootstrap";
import TopNavigation from "../../components/layout/TopNavigation";
import { AiTwotoneEdit } from "react-icons/ai";

export default function profileEdit() {
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [studentid, setStudentid] = useState("");
  const [gender, setGender] = useState("");
  const [presentaddress, setPresentaddress] = useState("");
  const [permanentaddress, setPermanentaddress] = useState("");
  const [organization, setOrganization] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [o_type, setOtype] = useState("");
  const [joiningdate, setJoiningdate] = useState("");
  const [o_address, setOaddress] = useState("");
  const { id } = router.query;

  useEffect(() => {
    fillUpdateProfileForm();
  }, []);
  const fillUpdateProfileForm = async () => {
    console.warn(id);
    let result = await fetch(`http://localhost:5000/profile/${id}`);
    result = await result.json();
    console.warn(result);
    setName(result.name);
    setGender(result.gender);
    setPresentaddress(result.presentaddress);
    setPermanentaddress(result.permanentaddress);
    setOrganization(result.organization);
    setDepartment(result.department);
    setDesignation(result.designation);
    setOtype(result.o_type);
    setJoiningdate(result.joiningdate);
    setOaddress(result.o_address);
  };

  const updateProfile = async () => {
    console.warn(
      name,
      gender,
      presentaddress,
      permanentaddress,
      organization,
      department,
      designation,
      o_type,
      joiningdate,
      o_address
    );
    let result = await fetch(`http://localhost:5000/profileUpdate/${id}`, {
      method: "Put",
      body: JSON.stringify({
        name,
        gender,
        presentaddress,
        permanentaddress,
        organization,
        department,
        designation,
        o_type,
        joiningdate,
        o_address,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);

    router.push("/profile");
  };

  return (
    <>
      <div>
        <Container fluid>
          <Row className="min-vh-100 ">
            <Col className="back" sm={2}>
              <Sidebar />
            </Col>
            <Col sm={10}>
              <TopNavigation />
              <Card>
                <div className="d-flex">
                  <Image
                    className="ms-5 mt-3 fluid"
                    sizes="15vw"
                    alt="profile picture"
                    src={dummyImage}
                    width={350}
                    height={300}
                  ></Image>
                  <div style={{ marginTop: "280px" }}>
                    <Form.Group
                      controlId="formFileSm"
                      className="mb-3 ms-5 w-25"
                    >
                      <Form.Control type="file"  size="sm" />
                    </Form.Group>
                  </div>
                </div>
                

                <div className="ms-5 mb-4 mt-3 fonts">
                  <h1 className="border-bottom border-dark">
                    Basic Informations
                  </h1>
                </div>
                <div className="d-flex ms-5">
                  <div className="me-5">
                    <h5>Name:</h5>
                    <h5 style={{ marginTop: "31px" }}>Id:</h5>
                    <h5>Program:</h5>
                    <h5>Gender:</h5>
                    <h5>Year of admission:</h5>
                    <h5>Present address:</h5>
                    <h5 style={{ marginTop: "85px" }}>Permanent address:</h5>
                  </div>
                  <div>
                    <h5>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            value={name}
                            type="text"
                            placeholder="Enter name (used in university)"
                            onChange={(e) => setName(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </h5>
                    <h5>19103229</h5>
                    <h5>BCSE</h5>
                    <h5>Male</h5>
                    <h5 style={{ marginTop: "10px" }}>2019</h5>
                    <h5>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Edit present address"
                      >
                        <Form.Control
                          value={presentaddress}
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "100px" }}
                          onChange={(e) => setPresentaddress(e.target.value)}
                        />
                      </FloatingLabel>
                    </h5>
                    <h5>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Edit permanent address"
                      >
                        <Form.Control
                          value={permanentaddress}
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "100px" }}
                          onChange={(e) => setPermanentaddress(e.target.value)}
                        />
                      </FloatingLabel>
                    </h5>
                  </div>
                </div>
                <div className="ms-5 mb-4 mt-3">
                  <h1 className="border-bottom border-dark">Job description</h1>
                </div>
                <div className="d-flex ms-5">
                  <div className="me-5">
                    <h5 style={{ marginTop: "1px" }}>Company/Organization:</h5>
                    <h5 style={{ marginTop: "33px" }}>Department:</h5>
                    <h5 style={{ marginTop: "22px" }}>Designation:</h5>
                    <h5 style={{ marginTop: "40px" }}>Organization type:</h5>
                    <h5 style={{ marginTop: "25px" }}>Joining date:</h5>
                    <h5>Organization address:</h5>
                  </div>
                  <div>
                    <h5>
                      {" "}
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            value={organization}
                            type="text"
                            placeholder="Enter Organization name"
                            onChange={(e) => setOrganization(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </h5>
                    <h5>
                      <Form.Select value={department}  onChange={(e) => setDepartment(e.target.value)} aria-label="Default select example">
                        
                      
                        <option value="IT">IT</option>
                        <option value="Garments">HR</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Production">Production</option>
                        <option value="Commercial">Commercial</option>
                      </Form.Select>
                    </h5>
                    <h5>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control
                            value={designation}
                            type="text"
                            placeholder="Enter designation"
                            onChange={(e) => setDesignation(e.target.value)}
                          />
                        </Form.Group>
                      </Form>
                    </h5>
                    <h5>
                      <Form.Select value={o_type}  onChange={(e) => setOtype(e.target.value)} aria-label="Default select example">
                        <option value="It">IT</option>
                        <option value="Garments">Garments</option>
                        <option value="Bank">Bank</option>
                        <option value="Freelancing">Freelancing</option>
                      </Form.Select>
                    </h5>
                    <h5>
                      {" "}
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control 
                          value={joiningdate}
                          type="date" 
                          onChange={(e) => setJoiningdate(e.target.value)}/>
                        </Form.Group>
                      </Form>{" "}
                    </h5>
                    <h5>
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Edit address"
                      >
                        <Form.Control
                          value={o_address}
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "100px" }}
                          onChange={(e) => setOaddress(e.target.value)}
                        />
                      </FloatingLabel>
                    </h5>
                    <div>
                      <Link href="/profile">
                      <Button className="btn-info mb-3" onClick={updateProfile}>Save changes</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
