import React from "react";

import "./Footer.css";
import { Typo, Ico } from "../../common";
import { Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="container-fluid d-flex align-items-center h-100">
        <Row className="w-100">
          <Col md="3" xs="12" className="y-logo-column">
            <Typo variant="h2" className="y-spaced-logo">
              MPLOI
            </Typo>
            <div className="y-social-icon d-flex mt-3">
              <Ico name="facebookOfficial" type="fa" size={16} />
              <Ico name="twitter" type="fa" size={16} />
              <Ico name="instagram" type="fa" size={16} />
            </div>
          </Col>
          <Col md="3" xs="6" className="y-quick-links">
            <Typo variant="h6" className="font-weight-bold">
              Useful Links
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              Sign In
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              Sign Up
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              Add a job offer
            </Typo>
          </Col>
          <Col md="3" xs="6" className="y-quick-links">
            <Typo variant="h6" className="font-weight-bold">
              Contact
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              support@mploi.com
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              +234 (0) 703 319 5813
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              74, Raymond Njoku Street, Ikoyi, Lagos State, Nigeria
            </Typo>
          </Col>
          <Col md="3" xs="6" className="y-quick-links">
            <Typo variant="h6" className="font-weight-bold">
              About
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              Privacy Policy
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              Terms & Conditions
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              About Us
            </Typo>
            <Typo variant="span" wrapperClass="py-2">
              Blog
            </Typo>
          </Col>
        </Row>
      </div>
    </footer>
  );
}
