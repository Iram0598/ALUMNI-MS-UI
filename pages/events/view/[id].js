import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/layout/Sidebar";
import TopNavigation from "../../../components/layout/TopNavigation";
import coverpic from "../../../public/coverpic.jpg";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Image from "next/future/image";
import { useRouter } from "next/router";

export default function eventsView() {
  const router = useRouter();
  const [showevent, setShowevent] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5000/events/" + router.query.id)
      .then((res) => res.json())
      .then((data) => setShowevent(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log("show", router);
  
 
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
                  Event details
                </h4>
              </div>
              <div className="ms-3 mt-4 ">
                <h3>
                  <b>{showevent?.title}</b>
                </h3>
              </div>
              <div className="ms-2">
                <Image src={coverpic} width={1400} height={600}></Image>
              </div>
              <div className="ms-2 mt-3">
                <h6>
                  {showevent?.description} 
                </h6>
              </div>
              <div className="d-flex ms-2 mt-3">
                <div>
                  <h5>
                    <b>Date & Time: {showevent?.eventdate}</b>
                  </h5>
                  <h5>
                    <b>Registration fee: {showevent?.regfee} </b>
                  </h5>
                  <h5>
                    <b>Location: {showevent?.location}</b>
                  </h5>
                </div>
               
              </div>
              <div className="d-flex ms-2 mt-3">
                <h5>Response status</h5>
                <Form className="ms-4">
                  <Form.Check type="radio" name="check1" label="Going" />
                  <Form.Check type="radio" name="check1" label="Not going" />
                  <Form.Check type="radio" name="check1" label="Maybe" />
                </Form>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
