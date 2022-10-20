import React from "react";
import { Card, Navbar, Container } from "react-bootstrap";
import { AiFillHome, AiTwotoneEdit } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import profilePic from "../../public/pro.jpg";
import Image from "next/future/image";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import { BiLogOut } from "react-icons/bi";
import { FaExchangeAlt } from "react-icons/fa";

export default function TopNavigation() {
  return (
    <div>
      <Card className="mt-0 ms-0" style={{ backgroundColor: "rgb(0, 0, 0)", height: "5vh", paddingTop:"13px" }}>
        <Navbar className="h-25">
          
            <Navbar.Brand
              className="text-white text-decoration-none ms-3 mt-2"
              href="#home"
            >
              <AiFillHome className="h2" /> Home <MdOutlineArrowForwardIos />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="text-white text-decoration-none">
                <Dropdown style={{height: "37px"}} as={ButtonGroup}>
                  <Link href="/profile">
                    <Button style={{ background: "none", border: "none" }}>
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
                      Mustafa Iram
                    </Button>
                  </Link>

                  <Dropdown.Toggle
                    split
                    variant="dark"
                    id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                      <AiTwotoneEdit className="me-2" />
                      Edit profile
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <FaExchangeAlt className="me-2" /> Change password
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      <BiLogOut className="me-2" /> Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Navbar.Text>
            </Navbar.Collapse>
          
        </Navbar>
      </Card>
    </div>
  );
}
