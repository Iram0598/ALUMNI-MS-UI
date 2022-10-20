import React from "react";
import { Container, Row, Col, Image, Badge, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHome, AiTwotoneEdit } from "react-icons/ai";
import { GoOrganization } from "react-icons/go";
import { MdCelebration, MdReadMore } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { IoSettings } from "react-icons/io";
import { Accordion } from "react-bootstrap";
import { RiAccountCircleFill } from "react-icons/ri";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div className="text-white d-flex mt-2">
        <AiFillHome className="h2" />
        <Link href="/dashboard">
        <a
          className="text-decoration-none text-white h3 ms-2"
          
        >
          Dashboard
        </a>
        </Link>
      </div>
      <div className="list-group links mt-5 ms-0 rounded-0 ">
        <Link href="/alumni">
          <a className=" d-flex justify-content-between list-group-item list-group-item-action mb-3 links">
            {" "}
            <div>
              <GoOrganization className="me-3" />
              Alumni{" "}
            </div>
            <Badge pill className="ms-4" bg="danger">
              New
            </Badge>
          </a>
        </Link>
        <Link href="/events">
        <a
          
          className="d-flex justify-content-between list-group-item list-group-item-action mb-3 links "
        >
          {" "}
          <div>
            <MdCelebration className="me-3" />
            Events
          </div>
          <Badge className="ms-5">+2</Badge>
        </a>
        </Link>
        <Accordion defaultActiveKey="0">
          <Accordion.Item className="rounded-0" eventKey="0">
            <Accordion.Header>
              <RiAccountCircleFill className="me-2 " />
              Profile settings
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <ListGroup className="rounded-0">
                <Link href="/profile">
                <ListGroup.Item action >
                  <AiTwotoneEdit className="me-3" />
                  Edit profile
                </ListGroup.Item>
                </Link>
                <ListGroup.Item action href="#link2">
                  <MdReadMore className="me-3" />
                  More features
                </ListGroup.Item>
              </ListGroup>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
