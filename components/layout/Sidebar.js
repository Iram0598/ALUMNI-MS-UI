import React from "react";
import { Badge, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHome, AiTwotoneEdit } from "react-icons/ai";
import { GoOrganization } from "react-icons/go";
import { MdCelebration, MdReadMore } from "react-icons/md";
import { RiAccountCircleFill } from "react-icons/ri";
import Link from "next/link";
import "w3-css/4/w3pro.css";
import Image from "next/future/image";
import dashpic from "../../public/Iubat-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import profilePic from "../../public/pro.jpg";
import { FaExchangeAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";

export default function Sidebar() {
  return (
    <>
      <Container fluid>
        <div
          className="w3-sidebar bg-dark text-white w3-bar-block min-vh-100 "
          style={{
            width: "17%",
            marginLeft: "0px",
            paddingLeft: "0",
            left: "0px",
            right: "0px",
            height: "950px",
          }}
        >
          <h3 className="w3-bar-item mb-5">
            <div className="d-flex">
              <Image src={dashpic} width={30} height={30}></Image>
              <div className="ms-2">IUBAT-AMS</div>
            </div>
          </h3>
          <Link href="/dashboard">
            <a class="w3-bar-item w3-button w3-border-bottom">
              <AiFillHome /> Home
            </a>
          </Link>
          <Link href="/alumni">
            <a class="d-flex justify-content-between w3-bar-item w3-button w3-border-bottom ">
              <div>
                <GoOrganization /> Alumni{" "}
              </div>
              <Badge bg="secondary">New</Badge>
            </a>
          </Link>
          <Link href="/events">
            <a class="d-flex justify-content-between w3-bar-item w3-button w3-border-bottom">
              <div>
                <MdCelebration /> Events
              </div>
              <Badge bg="danger">+2</Badge>
            </a>
          </Link>

          <div class="w3-dropdown-hover">
            <button class="w3-button">
              <RiAccountCircleFill /> Profile <i class="fa fa-caret-down"></i>
            </button>
            <div class="w3-dropdown-content w3-bar-block">
              <Link href="/profile">
                <a class="w3-bar-item w3-button">
                  <AiTwotoneEdit /> Your profile
                </a>
              </Link>
              <Link href="/profileEdit">
                <a class="w3-bar-item w3-button">Create new profile</a>
              </Link>
            </div>
          </div>
          <div style={{ marginTop: "60vh" }} className="border-top">
            <Dropdown className="ms-2 bg-dark dropup">
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                className="border border-0 bg-dark"
              >
                <Image
                  sizes="2vw"
                  className="rounded-circle w-auto h-100 me-2"
                  src={profilePic}
                  alt="Picture of the author"
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                />
                Mustafa Iram Udoy
              </Dropdown.Toggle>

              <Dropdown.Menu className="ms-2" variant="dark">
                <Dropdown.Item href="#/action-2">
                  {" "}
                  <BiLogOut className="me-2" />
                  Logout
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <FaExchangeAlt className="me-2" />
                  Something else
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-4">Change theme</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Container>
    </>
  );
}
