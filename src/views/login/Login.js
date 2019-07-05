import React from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import * as Yup from "yup";

import { Typo, Ico, AuthLayout, FormInput } from "../../components";

import "./Login.css";
import { withFormik } from "formik";

function Login(props) {
  let {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched
  } = props;

  const content = () => (
    <Col xs="12" className="align-self-center">
      <Typo variant="span" className="font-weight-bold grey-text">
        BEGIN YOUR CAREER LOREM IPSUM
      </Typo>

      <Typo variant="h1" className="mt-2 no-letter-spacing">
        Login to your account
      </Typo>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <FormInput
            id="email"
            placeholder="Email"
            type="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyUp={() => console.log(props.values)}
            required
          />
          <div className="y-error-feedback">
            {errors.email && touched.email && (
              <span className="y-form-error">{errors.email}</span>
            )}
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Password</Label>
          <FormInput
            id="password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            name="password"
            value={values.password}
          />
          <div className="y-error-feedback">
            {errors.password && touched.password && (
              <span className="y-form-error">{errors.password}</span>
            )}
          </div>
        </FormGroup>
        <FormGroup>
          <Button
            className="rounded-button px-4 mr-2 btn-y-primary-outline"
            type="submit"
            outline
          >
            Login
          </Button>
          <Button className="rounded-button px-4 btn-y-primary-outline y-bg-primary">
            Register
          </Button>
        </FormGroup>
        <FormGroup check>
          <div className="d-flex justify-content-between py-4">
            <Label check>
              <Input type="checkbox" /> Remember Me
            </Label>
            <Button className="y-btn-link my-0 py-0">Forgot Password?</Button>
          </div>
        </FormGroup>
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
  );
  return (
    <div className="Login">
      {/* <NavBar /> */}
      <AuthLayout>{content()}</AuthLayout>
    </div>
  );
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email field is required")
    .trim(),
  password: Yup.string()
    .min(8, "Password should contain atleast 8 characters")
    .required("Password field is required")
});

const formikPropsToValues = () => ({
  email: "",
  password: ""
});

const handleSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
};

export default withFormik({
  mapPropsToValues: formikPropsToValues,
  validationSchema: LoginSchema,
  handleSubmit
})(Login);
