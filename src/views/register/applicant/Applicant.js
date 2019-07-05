import React from "react";
import { Col, Form, FormGroup, Label, Button } from "reactstrap";
import * as Yup from "yup";

import { Typo, Ico, AuthLayout, FormInput } from "../../../components";

import "./Applicant.css";
import { withFormik } from "formik";

function Applicant(props) {
  let {
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    values,
    touched
  } = props;
  return (
    <div className="Applicant auth">
      <AuthLayout>
        <Col xs="12" className="align-self-center">
          <Typo variant="h1" className="mt-2 no-letter-spacing">
            Join our wide job network
          </Typo>
          <Typo variant="h6" className="y-subtitle-register">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod.
          </Typo>
          <Form className="mt-4" onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <FormInput
                id="email"
                name="email"
                placeholder="Email Address"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
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
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="y-error-feedback">
                {errors.password && touched.password && (
                  <span className="y-form-error">{errors.password}</span>
                )}
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Phone Number</Label>
              <FormInput
                id="phoneno"
                placeholder="Phone Number"
                type="text"
                value={values.phoneno}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="y-error-feedback">
                {errors.phoneno && touched.phoneno && (
                  <span className="y-form-error">{errors.phoneno}</span>
                )}
              </div>
            </FormGroup>
            <FormGroup>
              <div className="mt-4">
                <Button
                  type="submit"
                  className="rounded-button px-5  btn-y-primary-outline y-bg-primary"
                >
                  Register
                </Button>
                <Button
                  className="rounded-button px-5   ml-2 btn-y-primary-outline"
                  outline
                >
                  Login
                </Button>
              </div>
            </FormGroup>
          </Form>
          <Typo
            variant="h6"
            className="font-weight-bold y-subtitle-register"
            wrapperClass="pt-3"
          >
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
const ApplicantSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email field is required")
    .trim(),
  password: Yup.string()
    .min(8, "Password should contain atleast 8 characters")
    .required("Password field is required"),
  phoneno: Yup.number("Mobile number must be a number value").required(
    "Mobile number field is required"
  )
});

const formikPropsToValues = () => ({
  email: "",
  password: "",
  phoneno: ""
});

const handleSubmit = (values, { setSubmitting }) => {
  console.log(values);
  setSubmitting(false);
};

export default withFormik({
  mapPropsToValues: formikPropsToValues,
  validationSchema: ApplicantSchema,
  handleSubmit
})(Applicant);
