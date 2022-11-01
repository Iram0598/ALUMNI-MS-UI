import React from "react";
import { Card, Navbar } from "react-bootstrap";
import { AiFillHome, AiTwotoneEdit } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";

export default function TopNavigation() {
  return (
    <div className="sticky-top">
      <Card
        className="mt-2"
        style={{
          backgroundColor: "rgb(0, 0, 0)",
          height: "5vh",
          paddingTop: "6px",
        }}
      >
        <Navbar className="h-25">
          <Link href="/dashboard">
            <Navbar.Brand className="text-white text-decoration-none ms-3 mt-3">
              <AiFillHome className="h5" /> Home <MdOutlineArrowForwardIos />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end text-white me-3 mt-2">
            <Link href="/profile">
              <h3>
                <BiLogOut />
              </h3>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </Card>
    </div>
  );
}
