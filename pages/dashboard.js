import React from "react";
import Sidebar from "../components/layout/Sidebar";
import { IoIosPeople } from "react-icons/io";
import { MdEventAvailable, MdWork } from "react-icons/md";
import { Container, Row, Col, Image, Badge, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavigation from "../components/layout/TopNavigation";
import Link from "next/link";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Graph of Alumni increasing every year',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function Dashboard() {
  return (
    <div>
      <Container fluid>
        <Row className="min-vh-100 ">
          <Col className="back" sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10}>
            <TopNavigation />

            <div className="d-flex">
              <Link href="/profile">
                <div data-aos="fade-down" data-aos-delay="225" className="col-xl-3 col-md-6 mb-4 mt-3 ms-2 me-5 news">
                  <div className="card border border-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            No. of Alumni
                          </div>
                          <div className="h2 mb-0 font-weight-bold text-gray-800">
                            8005
                          </div>
                        </div>
                        <div className="col-auto">
                          <IoIosPeople style={{ fontSize: "15vh" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div data-aos="fade-down" data-aos-delay="150"  className="col-xl-3 col-md-6 mb-4 mt-3 ms-3 me-5 news">
                <div className="card border border-success shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                          Newly added alumni
                        </div>
                        <div className="h2 mb-0 font-weight-bold text-gray-800">
                          +3
                        </div>
                      </div>
                      <div className="col-auto">
                        <IoIosPeople style={{ fontSize: "15vh" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-delay="200" className="col-xl-3 col-md-6 mb-4 mt-3 ms-3 news">
                <div className="card border border-info shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                          New job posts
                        </div>
                        <div className="h2 mb-0 font-weight-bold text-gray-800">
                          +5
                        </div>
                      </div>
                      <div className="col-auto">
                        <MdWork style={{ fontSize: "14vh" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
            <div className="col-xl-3 col-md-6 mb-4 mt-3 ms-2 news">
              <div className="card border border-danger shadow h-100 py-2 ">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                        Events running
                      </div>
                      <div className="h2 mb-0 font-weight-bold text-gray-800">
                        +2
                      </div>
                      <div>
                        Hello
                      </div>
                    </div>
                    <div className="col-auto">
                      <MdEventAvailable style={{ fontSize: "15vh" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{marginLeft: "10vh"}} className="w-75 shadow  text-center">
              <Card>
           <Line options={options} data={data}/>
           </Card>
           </div>
           </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
