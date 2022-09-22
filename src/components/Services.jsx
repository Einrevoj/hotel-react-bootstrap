import React from "react";
import { useState } from "react";
import { Container, Row, Tab, Nav, Col } from "react-bootstrap";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Services() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div id="services" className="services_wrapper">
      <Container>
        <Row>
          <div className="col-sm-12 section-title text-center mb-5">
            <h6>We Are Here For You</h6>
            <h3>Our Awesome Services</h3>
          </div>
        </Row>
        <Tab.Container defaultActiveKey="first">
          <Row className="service-item-wrap align-items-center">
            <Col className="col-lg-7 p-lg-0">
              <Tab.Content className="tab-content">
                <Tab.Pane eventKey="first">
                  <img src="images/service1.webp" alt="service1" />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img src="images/service2.webp" alt="service2" />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img src="images/service3.webp" alt="service3" />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img src="images/service6.webp" alt="service4" />
                </Tab.Pane>
              </Tab.Content>
            </Col>
            <Col className="col-lg-5 position-relative">
              <Nav className="service-menu-area">
                <Nav.Item>
                  <Nav.Link eventKey="first" className="a">
                    <span
                      className="service-icon"
                      style={{ marginLeft: "0.5625rem" }}
                    >
                      <img src="images/service-icon1.webp" alt="spaicon" />
                    </span>
                    <h5 className="px-4">Spa, Beauty & Health</h5>
                    <p>
                      <span className="px-2" style={{ color: " #caa169" }}>
                        Spa and Beauty
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second" className="a">
                    <span
                      className="service-icon"
                      style={{ marginLeft: "-2.9375rem" }}
                    >
                      <img src="images/service-icon2.webp" alt="restoicon" />
                    </span>
                    <h5 className="px-4">Restaurant</h5>
                    <p>
                      <span className="px-2" style={{ color: " #caa169" }}>
                        Restaurant
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" className="a">
                    <span
                      className="service-icon"
                      style={{ marginLeft: "-6.375rem" }}
                    >
                      <img src="images/service-icon3.webp" alt="swimmingicon" />
                    </span>
                    <h5>Swimming Pool</h5>
                    <p>
                      <span className="-px-2" style={{ color: " #caa169" }}>
                        Swimming Pool
                      </span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth" className="a">
                    <span
                      className="service-icon"
                      style={{ marginLeft: "-8.8125rem" }}
                    >
                      <img
                        src="images/service-icon4.webp"
                        alt="conferenceicon"
                      />
                    </span>
                    <h5 style={{ marginLeft: "-2.8125rem" }}>
                      Conference Room
                    </h5>
                    <p style={{ marginLeft: "-2.8125rem" }}>
                      <span style={{ color: " #caa169" }}>Conference Room</span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      <div className="counter mt-5">
        <Container>
          <Row className="text-center">
            <Col className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h1 className="text-white">
                  {counterOn && (
                    <CountUp start={0} end={1287} duration={2} delay={0} />
                  )}
                  <span id="count1"></span>+
                </h1>
                <p className="text-white">Happy Clients</p>
              </ScrollTrigger>
            </Col>
            <Col className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h1 className="text-white">
                  {counterOn && (
                    <CountUp start={0} end={5786} duration={2} delay={0} />
                  )}
                  <span id="count2"></span>+
                </h1>
                <p className="text-white">New Friendships</p>
              </ScrollTrigger>
            </Col>
            <Col className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h1 className="text-white">
                  {counterOn && (
                    <CountUp start={0} end={1440} duration={2} delay={0} />
                  )}
                  <span id="count3"></span>+
                </h1>
                <p className="text-white">Five Star Ratings</p>
              </ScrollTrigger>
            </Col>
            <Col className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h1 className="text-white">
                  {counterOn && (
                    <CountUp start={0} end={7110} duration={2} delay={0} />
                  )}
                  <span id="count4"></span>+
                </h1>
                <p className="text-white">Served Breakfast</p>
              </ScrollTrigger>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
