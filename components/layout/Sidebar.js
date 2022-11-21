import React, { useState, useEffect } from "react";
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
import {BsFillBriefcaseFill} from "react-icons/bs"

export default function Sidebar() {
  const [profile, setProfile] = useState([]);
  const fetchData = () => {
    return fetch("http://localhost:5000/getProfiledata")
      .then((res) => res.json())
      .then((data) => {setProfile(data)});
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Container fluid>
        <div
          className="w3-sidebar text-white w3-bar-block min-vh-100 sidenav "
          style={{
            width: "17%",
            marginLeft: "0px",
            paddingLeft: "0",
            left: "0px",
            right: "0px",
            height: "950px",
            backgroundColor: "#000000"
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
          <Link href="/profile">
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
          <Link href="/news">
            <a class="d-flex justify-content-between w3-bar-item w3-button w3-border-bottom">
              <div>
                <BsFillBriefcaseFill /> Job news
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
           {profile.map((item) => (
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
                {item.studentid}
              </Dropdown.Toggle>

              <Dropdown.Menu className="ms-2" variant="dark">
                <Dropdown.Item href="/">
                  {" "}
                  <BiLogOut className="me-2" />
                  Logout
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Link href="/password">
                    <div>
                      <FaExchangeAlt className="me-2" />
                      Change password
                    </div>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
             ))}
          </div>
        </div>
      </Container>
    </>
  );
}
