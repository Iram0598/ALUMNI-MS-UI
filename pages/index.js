import { React } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Link from "next/link";
import { useRouter } from "next/router";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/future/image";
import "bootstrap/dist/css/bootstrap.min.css";
import picture1 from "../public/alumni-1.jpg";
import picture2 from "../public/Alumni-Day-2.jpg";
import picture3 from "../public/Prof.-Dr.-M-Alimullah-Miyan-Memorial-Seminar-450x233.jpg";
import picture4 from "../public/1.jpg";

export default function Home() {
  const [showlogin, setshowlogin] = useState(true);
  const [studentid, setstudentID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const router = useRouter();
    useEffect(() => {
      const auth = localStorage.getItem('user');
      if (auth) {
         router.push('/')
      }
  }, [])

  const collectData = async () => {
    console.log(studentid, email, password , "regi");
    const result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ studentid, email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data_res = await result;
    // console.log( await data_res.json() , "response");
    const resp = await data_res.json();

    console.log(resp);
  
    localStorage.setItem("studentid", resp.studentid);
    localStorage.setItem("email", resp.email);
    localStorage.setItem("password", resp.password);
    localStorage.setItem("islogged", true);

    router.push('/dashboard')
  };

  //Logout function -> clean the local storage and localStorage.setItem("islogged", ""); 
  // localStorage.getItem("islogged"); ? true -> dashboard show ? false -> redirect to loginUrl 

  return (
    <>
      <Container fluid>
        <Row className="min-vh-100">
          <Col
            data-aos="fade-right"
            data-aos-duration="1000" 
            className="bg-dark "
            sm={5}
          >
            <div>
              {showlogin ? (
                <div
                  style={{
                    marginTop: "149px",
                    marginLeft: "20px",
                    marginRight: "10px",
                  }}
                  className="align-items-center justify-content-center "
                >
                  <div className="d-flex justify-content-between">
                    <div className="text-white  h2">Login</div>
                    <Form  novalidate
                    validated={validated}
                    onSubmit={handleSubmit} className="ms-4 mt-2 text-white">
                      <Form.Check
                        inline
                        required
                        type="radio"
                        name="check1"
                        label="Admin"
                        feedbackType="invalid"
                        feedback="Select your role"
                      />
                      <Form.Check
                        inline
                        required
                        type="radio"
                        name="check1"
                        label="Alumni"
                        feedbackType="invalid"
                        feedback="Select your role"
                      />
                    </Form>
                  </div>
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <FloatingLabel
                      hasValidation
                      controlId="floatingInput"
                      label="ID/E-mail"
                      className="mb-3"
                    >
                      <Form.Control
                        size="sm"
                        type="text"
                        placeholder="name@example.com"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please input your university ID.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                    <FloatingLabel
                      hasValidation
                      controlId="floatingPassword"
                      label="Password"
                    >
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please input password.
                      </Form.Control.Feedback>
                    </FloatingLabel>
                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <Link href="dashboard"> 
                        <Button type="submit">Login</Button>
                        </Link>
                      </div>
                      <div className="d-flex">
                        <div className="text-white mt-2 me-2">
                          Dont have an account?
                        </div>
                        <div>
                          <Button onClick={() => setshowlogin(false)}>
                            Register
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Form>
                </div>
              ) : (
                <div
                  style={{ width: "500px", marginLeft: "25px" }}
                  
                >
                  <Form  novalidate
                    validated={validated}
                    onSubmit={handleSubmit}>
                    <div className="text-white mt-5 h2"> Register</div>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>ID (University ID)</Form.Label>
                      <Form.Control
                        type="number"
                        onChange={(e) => setstudentID(e.target.value)}
                        placeholder="Enter ID"
                       
                        required
                      />
                       <Form.Control.Feedback type="invalid">
                        Please input your university ID.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                       
                        required
                      />
                       <Form.Control.Feedback type="invalid">
                        Please enter your email
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      className="mb-3 text-white"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                       
                        required
                      />
                       <Form.Control.Feedback type="invalid">
                        Please input your password
                      </Form.Control.Feedback>
                    </Form.Group>
                   
                    <Form.Text className="text-muted ">
                      We'll never share your password with anyone else.
                    </Form.Text>
                    <Form.Group
                      className="mb-3 mt-3 text-white"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className="d-flex justify-content-between">
                      <div>
                        <Link href="/dashboard">
                          <Button type="submit" variant="primary" onClick={collectData}>
                            Register
                          </Button>
                        </Link>
                      </div>
                      <div className="ms-5 text-white">
                        Have an account? Then
                        <Button
                          onClick={() => setshowlogin(true)}
                          className="ms-2"
                        >
                          Login
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              )}
            </div>
          </Col>
          <Col
            data-aos="fade-left"
            data-aos-duration="1000"
            className="p-0"
            sm={7}
          >
            <Carousel>
              <Carousel.Item className="image-container">
                <Image
                  src={picture1}
                  className={"image"}
                  objectFit="cover"
                ></Image>
                <Carousel.Caption>
                  <h3>Convocation - 2022</h3>
                  <p>
                    IUBAT- International University of Business Agriculture &
                    Technology
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="image-container">
                <Image
                  src={picture2}
                  className={"image"}
                  objectFit="cover"
                ></Image>

                <Carousel.Caption>
                  <h3>Alumni Day - 2021</h3>
                  <p>
                    IUBAT- International University of Business Agriculture &
                    Technology
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="image-container">
                <Image
                  src={picture4}
                  className={"image"}
                  objectfit="cover"
                ></Image>

                <Carousel.Caption>
                  <h3>Battle of Intellects - 2021</h3>
                  <p>
                    IUBAT- International University of Business Agriculture &
                    Technology
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}
