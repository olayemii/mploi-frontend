import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Row,
  Col
} from "reactstrap";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="NavBar">
      <Row>
        <Col xs="12">
          <Navbar light expand="md">
            <div className="container-fluid">
              <NavbarBrand href="/">MPLOI</NavbarBrand>
              <NavbarToggler />
              <Collapse navbar isOpen={false}>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="#">
                      Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="#">
                      Jobs
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="#">
                      Contact
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="#">
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/login">
                      Sign In
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Button
                      size="sm"
                      outline
                      className="px-4 rounded-button btn-y-primary-outline"
                    >
                      Sign Up
                    </Button>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </Col>
      </Row>
    </div>
  );
}
