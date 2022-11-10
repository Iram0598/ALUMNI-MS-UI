import React from "react";
import Sidebar from "../../../components/layout/Sidebar";
import TopNavigation from "../../../components/layout/TopNavigation";
import coverpic from "../../../public/coverpic.jpg";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Image from "next/future/image";
import { useRouter } from "next/router";

export default function eventsView() {
  const router = useRouter();

  console.log(router.query);
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
                  <b>Reunion of Batch - 14</b>
                </h3>
              </div>
              <div className="ms-2">
                <Image src={coverpic} width={1400} height={600}></Image>
              </div>
              <div className="ms-2 mt-3">
                <h6>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful of model sentence structures, to
                  generate Lorem Ipsum which looks reasonable. The generated
                  Lorem Ipsum is therefore always free from repetition, injected
                  humour, or non-characteristic words etc.
                </h6>
              </div>
              <div className="d-flex ms-2 mt-3">
                <div>
                  <h5>
                    <b>Date & Time:</b>
                  </h5>
                  <h5>
                    <b>Registration fee:</b>
                  </h5>
                  <h5>
                    <b>Location:</b>
                  </h5>
                </div>
                <div className="ms-4">
                  <h5>10/10/22 3:10 PM</h5>
                  <h5>1000/= (Per person)</h5>
                  <h5>IUBAT Auditorium</h5>
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
