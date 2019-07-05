import React from "react";

import { Row, Col } from "reactstrap";

import authBg from "../../../../assets/img/auth.jpg";
import "./AuthLayout.css";

export default function AuthLayout(props) {
  return (
    <div className="AuthLayout d-flex flex-column justify-content-center">
      <div className="container-fluid">
        <Row className="y-login-body">
          <Col xs="12" md="5" className="align-self-center">
            {props.children}
          </Col>
          <Col xs="12" md="7" className="y-auth-bg y-hidden-sm-down">
            <img src={authBg} alt="Auth Bg" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
