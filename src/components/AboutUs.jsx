import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      <section id="aboutUs" className="about-wrapper">
        <Container>
          <Row className="row flex-lg-row flex-column-reverse">
            <Col className="col-lg-6 text-center text-lg-start">
              <h3>
                Welcome to{" "}
                <span>
                  {" "}
                  Hotel <br className="d-none d-lg-block" />
                  the haven
                </span>
                of your weekend
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                sint reiciendis explicabo quidem eum assumenda vel corrupti!
                Praesentium, ab doloremque eius hic quidem voluptatem sequi
                pariatur voluptate magnam! Animi ad molestias ea architecto,
                impedit non? Incidunt, porro excepturi. Quaerat, cum
                exercitationem molestiae totam ipsum tempore. Incidunt, libero
                neque? Autem, delectus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium nemo quod ut incidunt cum.
              </p>
              <Link to="/" className="main-btn mt-4">
                Explore
              </Link>
            </Col>
            <Col className="col-lg-6 mb-4 mb-lg-0 ps-lg-4 text-center">
              <img
                src="images/about-img.svg"
                alt="about"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
