import React from "react";
import { Card, Navbar } from "react-bootstrap";
import { AiFillHome, AiTwotoneEdit } from "react-icons/ai";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";

export default function TopNavigation() {
  return (
    <div className="sticky-top mb-3">
      <Card
        className="mt-2 shadow"
        style={{
          
          height: "8vh",
          paddingTop: "6px",
        }}
      >
        <Navbar className="h-25">
          <Link href="/dashboard">
            <Navbar.Brand className=" text-decoration-none ms-3 mt-4">
              <AiFillHome className="h5" /> Home <MdOutlineArrowForwardIos />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle />
          <Navbar.Collapse  className="justify-content-end  me-3 mt-3 hover">
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
