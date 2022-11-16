import {React, useState, useEffect} from "react";
import Sidebar from "../../../components/layout/Sidebar";
import Image from "next/future/image";
import profilepic from "../../public/pro.jpg";
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
import TopNavigation from "../../../components/layout/TopNavigation";
import { AiTwotoneEdit } from "react-icons/ai";
import { useRouter } from "next/router";


export default function profile() {
  const router = useRouter();
  const [showprofile, setShowprofile] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5000/profile/" + router.query.id)
      .then((res) => res.json())
      .then((data) => setShowprofile(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                <div className="d-block">
                  <Image
                    className="ms-5 mt-3 fluid"
                    sizes="15vw"
                    alt="profile picture"
                    src={profilepic}
                    width={300}
                    height={300}
                  ></Image>
                </div>
                <div>
                  <Link href="/profileEdit">
                  <Button className="ms-5 btn-light">
                    <AiTwotoneEdit /> Edit profile
                  </Button>
                  </Link>
                </div>
                <div className="ms-5 mb-4 mt-3 fonts">
                  <h1 className="border-bottom border-dark">
                    Basic Informations
                  </h1>
                </div>
                <div className="d-flex ms-5">
                  <div className="me-5">
                    <h5>Name:</h5>
                    <h5>Id:</h5>
                    <h5>Program:</h5>
                    <h5>Gender:</h5>
                    <h5>Year of admission:</h5>
                    <h5>Present address:</h5>
                    <h5>Permanent address:</h5>
                  </div>
                  <div>
                    <h5>Mustafa Iram Udoy</h5>
                    <h5>19103229</h5>
                    <h5>BCSE</h5>
                    <h5>Male</h5>
                    <h5>2019</h5>
                    <h5>111/B, Surtaranga road, Tongi, Gazipur</h5>
                    <h5>Kazla, Tarail, Kishoreganj</h5>
                  </div>
                </div>
                <div className="ms-5 mb-4 mt-3">
                  <h1 className="border-bottom border-dark">Job description</h1>
                </div>
                <div className="d-flex ms-5">
                  <div className="me-5">
                    <h5>Company/Organization:</h5>
                    <h5>Department:</h5>
                    <h5>Designation:</h5>
                    <h5>Organization type:</h5>
                    <h5>joining date:</h5>
                    <h5>Organization address:</h5>
                  </div>
                  <div>
                    <h5>Arunima group</h5>
                    <h5>IT</h5>
                    <h5>Junior frontend developer</h5>
                    <h5>Garments</h5>
                    <h5>3rd September, 2022</h5>
                    <h5>Jashimuddin</h5>
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
