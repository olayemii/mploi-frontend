import React from "react";

import { Col, Form, FormGroup, Label, Button } from "reactstrap";

import { Typo, Ico, AuthLayout, FormInput } from "../../../components";
import withFormControl from "../../../hocs/WithFormControl";

import "./Employer.css";

function Employer(props) {
  const getFieldData = data => console.log(data);
  return (
    <div className="Employer auth">
      <AuthLayout>
        {" "}
        <Col xs="12" className="align-self-center">
          <Typo variant="h1" className="mt-2 no-letter-spacing">
            Join our wide job network
          </Typo>
          <Typo variant="h6" className="y-subtitle-register">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </Typo>
          <Form
            className="mt-4"
            onSubmit={evt => {
              getFieldData(props.getFieldData);
              props.submitForm();
            }}
          >
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <FormInput
                id="email"
                placeholder="Email"
                type="email"
                value={props.fields["email"]}
                onChange={props.onChangeField}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Password</Label>
              <FormInput
                id="password"
                placeholder="Password"
                type="password"
                value={props.fields["password"]}
                onChange={props.onChangeField}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Company Name</Label>
              <FormInput
                id="companyname"
                placeholder="Company Name"
                type="text"
                value={props.fields["companyname"]}
                onChange={props.onChangeField}
              />
            </FormGroup>
            <div className="mt-4">
              <FormGroup>
                <Button className="rounded-button px-5 btn-y-primary-outline y-bg-primary">
                  Register
                </Button>
                <Button
                  className="rounded-button px-5 ml-2 btn-y-primary-outline"
                  outline
                >
                  Login
                </Button>
              </FormGroup>
            </div>
          </Form>
          <Typo variant="span" className="font-weight-bold" wrapperClass="pt-3">
            Or you can join with
          </Typo>
          <div className="y-social-icon d-flex mt-3">
            <Ico name="facebook" className="y-fb-icon" type="fa" size={16} />
            <Ico name="google" className="y-goo-icon" type="fa" size={16} />
            <Ico name="linkedin" className="y-lin-icon" type="fa" size={16} />
          </div>
        </Col>
      </AuthLayout>
    </div>
  );
}

export default withFormControl(Employer);
