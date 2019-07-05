import React from "react";
import {
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Progress,
  Col,
  Row
} from "reactstrap";

import MainLayout from "../../components/layout/layouts/mainlayout/MainLayout";

import { Ico, Typo } from "../../components";

import "./Profile.css";
import ProfileDataCard from "./components/ProfileDataCard";
export default function Profile() {
  return (
    <div className="Profile">
      <MainLayout hideFooter>
        <div className="y-profile-body">
          <aside>
            <div className="d-flex h-100">
              <div className="d-flex flex-column align-items-center y-menu-control-strip py-2">
                <div className="d-flex flex-column flex-grow-1">
                  <Ico
                    name="user"
                    className="y-text-primary"
                    type="feather"
                    size={24}
                  />
                  <Ico name="zap" type="feather" size={24} />
                  <Ico name="bell" type="feather" size={24} />
                  <Ico name="file" type="feather" size={24} />
                  <Ico name="settings" type="feather" size={24} />
                </div>
                <Ico name="power" type="feather" size={24} />
              </div>
              <div className="y-user-profile-intro w-100 pt-5">
                <div className="y-profile-photo mx-auto">
                  <img src="https://picsum.photos/200/300" alt="" />
                </div>
                <Typo
                  variant="h5"
                  className="font-weight-bold"
                  wrapperClass="text-center mt-3"
                >
                  OLayemii Garuba
                </Typo>
                <Typo variant="h6" wrapperClass="text-center">
                  Lagos, Nigeria
                </Typo>
                <Typo
                  variant="h6"
                  className="font-weight-bold"
                  wrapperClass="text-center mt-3"
                >
                  55% Complete
                </Typo>
                <Progress className="mt-2" value={55} />

                <Typo variant="normal" wrapperClass="mt-3 text-justify">
                  Consectetur aliquip do sint laboris nulla non eiusmod mollit
                  sint adipisicing pariatur. Consectetur aliquip do sint laboris
                  nulla non eiusmod mollit sint adipisicing pariatur.
                </Typo>

                <div className="y-work-school mt-3">
                  <Typo variant="normal">
                    <Ico name="university" type="ionics" size={24} /> Adekunle
                    Ajasin University
                  </Typo>
                  <Typo variant="normal" wrapperClass="mt-1">
                    <Ico name="iosBriefcase" type="ionics" size={22} /> Algorism
                    Tech Limited
                  </Typo>
                </div>
              </div>
            </div>
          </aside>
          <main>
            <div className="y-main-body">
              <div className="y-job-find-status d-flex align-items-center">
                <Ico
                  name="ic_info_outline"
                  type="md"
                  size={26}
                  className="y-text-secondary"
                />

                <div className="dflex ml-4 flex-grow-1 flex-columns">
                  <Typo variant="h5">Open For Jobs</Typo>
                  <Typo variant="normal">
                    You are currently open to receive job offers
                  </Typo>
                </div>

                <Button className="rounded-button px-4 py-1 btn-y-danger">
                  Turn Off
                </Button>
              </div>
              <section className="mt-4 y-user-details">
                <div className="dgrid grid-2">
                  <div className="y-first-cards">
                    <Card>
                      <CardBody>
                        <div className="mb-4">
                          <CardTitle className="my-1">
                            <Typo variant="h5" className="font-weight-bold">
                              Career Summary
                            </Typo>
                          </CardTitle>
                          <CardSubtitle>
                            <Typo variant="normal">
                              Add a little summary about yourself
                            </Typo>
                          </CardSubtitle>
                        </div>
                        <span className="font-weight-light">
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam.
                        </span>
                      </CardBody>
                      <div className="d-flex justify-content-end">
                        <Button className="y-btn-link pr-0 pt-3">UPDATE</Button>
                      </div>
                    </Card>
                    <Card className="mt-4">
                      <CardBody>
                        <div className="mb-4">
                          <CardTitle className="my-1">
                            <Typo variant="h5" className="font-weight-bold">
                              Work Experience
                            </Typo>
                          </CardTitle>
                          <CardSubtitle>
                            <Typo variant="normal">
                              Previous and current job experiences
                            </Typo>
                          </CardSubtitle>
                        </div>
                        <ProfileDataCard
                          title="Software Engineer at VirtuallyTope"
                          subtitle="Benin | December 2017 - April 2019"
                          foot="IT/  Technology"
                        />
                      </CardBody>
                      <div className="d-flex justify-content-end">
                        <Button className="y-btn-link pr-0 pt-3">UPDATE</Button>
                      </div>
                    </Card>
                    <Card className="mt-4">
                      <CardBody>
                        <div className="mb-4">
                          <CardTitle className="my-1">
                            <Typo variant="h5" className="font-weight-bold">
                              Professional Skills
                            </Typo>
                          </CardTitle>
                          <CardSubtitle>
                            <Typo variant="normal">Skills and Proficiency</Typo>
                          </CardSubtitle>
                        </div>
                        <Row className=" y-proficiencometer mb-3 align-items-center">
                          <Col md="3">
                            <Typo variant="normal">PHP</Typo>
                          </Col>
                          <Col md="7" className="flex-grow-1">
                            <Progress value="70" />
                          </Col>
                          <Col md="2" className="text-right">
                            <Typo variant="normal">70%</Typo>
                          </Col>
                        </Row>
                        <Row className=" y-proficiencometer mb-3 align-items-center">
                          <Col md="3">
                            <Typo variant="normal">Javascript</Typo>
                          </Col>
                          <Col md="7" className="flex-grow-1">
                            <Progress value="20" />
                          </Col>
                          <Col md="2" className="text-right">
                            <Typo variant="normal">20%</Typo>
                          </Col>
                        </Row>
                        <Row className=" y-proficiencometer mb-3 align-items-center">
                          <Col md="3">
                            <Typo variant="normal">Python</Typo>
                          </Col>
                          <Col md="7" className="flex-grow-1">
                            <Progress value="50" />
                          </Col>
                          <Col md="2" className="text-right">
                            <Typo variant="normal">50%</Typo>
                          </Col>
                        </Row>
                        <Row className=" y-proficiencometer mb-3 align-items-center">
                          <Col md="3">
                            <Typo variant="normal">Adobe XD</Typo>
                          </Col>
                          <Col md="7" className="flex-grow-1">
                            <Progress value="50" />
                          </Col>
                          <Col md="2" className="text-right">
                            <Typo variant="normal">50%</Typo>
                          </Col>
                        </Row>
                        <Row className=" y-proficiencometer mb-3 align-items-center">
                          <Col md="3">
                            <Typo variant="normal">C++</Typo>
                          </Col>
                          <Col md="7" className="flex-grow-1">
                            <Progress value="80" />
                          </Col>
                          <Col md="2" className="text-right">
                            <Typo variant="normal">80%</Typo>
                          </Col>
                        </Row>
                      </CardBody>
                      <div className="d-flex justify-content-end">
                        <Button className="y-btn-link pr-0 pt-3">UPDATE</Button>
                      </div>
                    </Card>
                  </div>
                  <div className="y-second-cards">
                    <div className="y-education-card">
                      <Card>
                        <CardBody>
                          <div className="pb-3 y-bottom-border">
                            <CardTitle className="my-1">
                              <Typo variant="h5" className="font-weight-bold">
                                Education
                              </Typo>
                            </CardTitle>
                            <CardSubtitle>
                              <Typo variant="normal">
                                Add your educational qualifications
                              </Typo>
                            </CardSubtitle>
                          </div>
                          <ProfileDataCard
                            title="Software Engineer at Algorism Limited"
                            subtitle="Lagos | April 2019 - PRESENT"
                            foot="IT/  Technology"
                          />
                          <ProfileDataCard
                            title="Software Engineer at VirtuallyTope"
                            subtitle="Benin | December 2017 - April 2019"
                            foot="IT/  Technology"
                          />
                          <ProfileDataCard
                            title="Software Engineer at VirtuallyTope"
                            subtitle="Benin | December 2017 - April 2019"
                            foot="IT/  Technology"
                          />
                        </CardBody>
                        <div className="d-flex justify-content-end">
                          <Button className="y-btn-link pr-0 pt-3">
                            UPDATE
                          </Button>
                        </div>
                      </Card>
                      <Card className="mt-4">
                        <CardBody>
                          <div className="pb-3 y-bottom-border">
                            <CardTitle className="my-1">
                              <Typo variant="h5" className="font-weight-bold">
                                Education
                              </Typo>
                            </CardTitle>
                            <CardSubtitle>
                              <Typo variant="normal">
                                Add your educational qualifications
                              </Typo>
                            </CardSubtitle>
                          </div>
                          <ProfileDataCard
                            title="Software Engineer at Algorism Limited"
                            subtitle="Lagos | April 2019 - PRESENT"
                            foot="IT/  Technology"
                          />
                          <ProfileDataCard
                            title="Software Engineer at VirtuallyTope"
                            subtitle="Benin | December 2017 - April 2019"
                            foot="IT/  Technology"
                          />
                          <ProfileDataCard
                            title="Software Engineer at VirtuallyTope"
                            subtitle="Benin | December 2017 - April 2019"
                            foot="IT/  Technology"
                          />
                        </CardBody>
                        <div className="d-flex justify-content-end">
                          <Button className="y-btn-link pr-0 pt-3">
                            UPDATE
                          </Button>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>
              <div className="y-download-resume mt-3">
                <div className="y-job-find-status d-flex align-items-center">
                  <Ico
                    name="ic_get_app"
                    type="md"
                    size={26}
                    className="y-text-primary"
                  />

                  <div className="dflex ml-4 flex-grow-1 flex-columns">
                    <Typo variant="h5">Download your resume</Typo>
                    <Typo variant="normal">
                      Download a copy of your resume to your device
                    </Typo>
                  </div>

                  <Button className="rounded-button px-4 py-1 btn-y-primary btn-y-primary-outline">
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </MainLayout>
    </div>
  );
}
