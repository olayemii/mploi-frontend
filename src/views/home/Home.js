import React, { Component } from "react";
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Input,
  Row,
  Col
} from "reactstrap";

import { Typo, Ico } from "../../components";

import cloudBg from "../../assets/svg/cloudbg.svg";
import hero from "../../assets/svg/hero.svg";
import person from "../../assets/svg/person.svg";
import "./Home.css";
import MainLayout from "../../components/layout/layouts/mainlayout/MainLayout";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Home">
        <MainLayout>
          <div
            className="y-home-hero d-flex flex-column justify-content-center"
            style={{ backgroundImage: `url(${cloudBg})` }}
          >
            <div className="container-fluid">
              <section className="d-flex y-hero">
                <div className="y-hero-text-section d-flex align-items-center">
                  <Row>
                    <Col xs="12" md="5" className="align-self-center">
                      <div className="y-hero-text">
                        <Typo
                          variant="h1"
                          className="font-weight-bold text-heading"
                        >
                          Browse And Apply For Jobs
                        </Typo>
                        <Typo variant="h6" className="mt-3">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat.
                        </Typo>
                        <div className="mt-5 mt-sm-3">
                          <Button
                            className="px-5 py-2 rounded-button btn-y-primary-outline"
                            outline
                          >
                            Get Started
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col xs="12" md="7">
                      <div className="y-hero-image text-center">
                        <img src={hero} alt="Hero" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </section>
            </div>
            {/* End of hero section */}
          </div>
          <section className="y-subhero ">
            <Ico
              name="arrowDownCircle"
              className="cursor-pointer y-hidden-sm-down"
              type="feather"
              size={32}
            />
          </section>
          <section className="y-second-vp y-padding-section">
            <Row>
              <Col xs="12">
                <div className="container-fluid">
                  <Typo variant="h5" wrapperClass="text-center mt-3">
                    WHAT WE DO
                  </Typo>
                  <Typo
                    variant="h4"
                    wrapperClass="text-center mt-5"
                    className="y-sub-text"
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr sed
                    diam nonumy.
                  </Typo>
                </div>
              </Col>
            </Row>

            <div className="mt-5 container-fluid">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <Card>
                    <Ico type="feather" name="box" size={64} />
                    <CardBody>
                      <CardTitle>
                        <Typo variant="span" className="font-weight-bold">
                          Card title
                        </Typo>
                      </CardTitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button className="y-btn-link">
                        LEARN MORE &rsaquo;
                      </Button>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-sm-12 col-md-4">
                  <Card>
                    <Ico type="feather" name="box" size={64} />
                    <CardBody>
                      <CardTitle>
                        <Typo variant="span" className="font-weight-bold">
                          Card title
                        </Typo>
                      </CardTitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button className="y-btn-link grey-text">
                        LEARN MORE &rsaquo;
                      </Button>
                    </CardBody>
                  </Card>
                </div>
                <div className="col-sm-12 col-md-4">
                  <Card>
                    <Ico type="feather" name="box" size={64} />

                    <CardBody>
                      <CardTitle>
                        <Typo variant="span" className="font-weight-bold">
                          Card title
                        </Typo>
                      </CardTitle>
                      <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </CardText>
                      <Button className="y-btn-link">
                        LEARN MORE &rsaquo;
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </section>
          <section className="y-third-vp y-padding-section">
            <div className="container-fluid">
              <Row>
                <Col xs="12" md="6">
                  <div className="y-sub-text">
                    <Typo variant="h1">
                      Lorem ipsum dolor sitamet,consetetur.
                    </Typo>
                    <Typo variant="h6" className="mt-3 text-justify">
                      lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. at vero eos et
                      accusam et justo duo dolores et ea rebum. stet clita kasd
                      gubergren, no sea takimata sanctus est lorem ipsum dolor
                      sit amet. lorem ipsum dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam erat, sed diam
                      voluptua. at vero eos et accusam et justo duo dolores et
                      ea rebum. stet clita kasd gubergren, no sea takimata
                      sanctus est lorem ipsum dolor sit amet. lorem ipsum dolor
                      sit amet, consetetur sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et dolore magna.
                    </Typo>
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <div className="sub-img">
                    <img src={person} alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </section>
          <section className="y-fourth-vp y-padding-section">
            <div className="container-fluid">
              <Typo
                variant="h3"
                wrapperClass="text-center mt-3 y-new-jobs-count"
              >
                More than 16,054 jobs newly posted
              </Typo>
              <div className="mt-5 mt-sm-3">
                <div className="row y-slider-row">
                  <div className="col-sm-12 col-md-4 my-3 mt-sm-3">
                    <Card>
                      <CardBody>
                        <div className="my-2">
                          <CardTitle>
                            <Typo
                              variant="span"
                              className="font-weight-bold"
                              wrapperClass="py-2"
                            >
                              Senior Accounting Manager
                            </Typo>
                          </CardTitle>
                          <CardSubtitle className="font-weight-bold grey-text">
                            Lagos, Nigeria
                          </CardSubtitle>
                        </div>
                        <CardText className="py-2">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content. Some quick
                          example text to build on the card
                        </CardText>
                        <Button className="y-btn-link mx-0 px-0">
                          I'm Intersted
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-sm-12 col-md-4 my-3 mt-sm-3">
                    <Card>
                      <CardBody>
                        <div className="my-2">
                          <CardTitle>
                            <Typo
                              variant="span"
                              className="font-weight-bold"
                              wrapperClass="py-2"
                            >
                              Senior Accounting Manager
                            </Typo>
                          </CardTitle>
                          <CardSubtitle className="font-weight-bold grey-text">
                            Lagos, Nigeria
                          </CardSubtitle>
                        </div>
                        <CardText className="py-2">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content. Some quick
                          example text to build on the card
                        </CardText>
                        <Button className="y-btn-link mx-0 px-0">
                          I'm Intersted
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="col-sm-12 col-md-4 my-3 mt-sm-3">
                    <Card>
                      <CardBody>
                        <div className="my-2">
                          <CardTitle>
                            <Typo
                              variant="span"
                              className="font-weight-bold"
                              wrapperClass="py-2"
                            >
                              Senior Accounting Manager
                            </Typo>
                          </CardTitle>
                          <CardSubtitle className="font-weight-bold grey-text">
                            Lagos, Nigeria
                          </CardSubtitle>
                        </div>
                        <CardText className="py-2">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content. Some quick
                          example text to build on the card
                        </CardText>
                        <Button className="y-btn-link mx-0 px-0">
                          I'm Intersted
                        </Button>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="navigation y-hidden-sm-down mt-5 d-flex justify-content-center">
              <div className="mx-2">
                <Ico name="iosArrowThinLeft" type="ionics" size={32} />
              </div>
              <div className="mx-2">
                <Ico name="iosArrowThinRight" type="ionics" size={32} />
              </div>
            </div> */}
          </section>
          <section className="y-newsl y-padding-section">
            <div className="container-fluid">
              <Row>
                <Col xs="12" md="5">
                  <div className="y-sub-text ">
                    <Typo variant="h1">Newsletter</Typo>
                    <Typo variant="h6" className="mt-3 text-justify">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.
                    </Typo>
                  </div>
                </Col>
                <Col xs="12" md="7" className="align-self-center">
                  <div className="y-newsl-form">
                    <div className="form-icon">
                      <div className="form-ic">
                        <Ico name="iosArrowThinRight" type="ionics" size={32} />
                      </div>
                      <Input
                        type="text"
                        placeholder="Enter your email address . . ."
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </MainLayout>
      </div>
    );
  }
}
