import React from "react";
import { Container, Row } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Team() {
  return (
    <>
      <section id="team" className="team_wrapper">
        <Container className="container">
          <Row className="row">
            <div className="col-sm-12 section-title text-center mb-5">
              <h6>What I can do for you</h6>
              <h3>Our Special Staff</h3>
            </div>
          </Row>
          <Row className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-0 rounded-3">
                <img
                  src="images/team1.webp"
                  alt="team"
                  className="img-fluid rounded-3"
                />
                <div className="team-info">
                  <h5>Shirley Gibson</h5>
                  <p>Manager</p>
                  <ul className="social-network">
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-0 rounded-3">
                <img
                  src="images/team2.webp"
                  alt="team"
                  className="img-fluid rounded-3"
                />
                <div className="team-info">
                  <h5>Ronald Long</h5>
                  <p>Chief Reception officer</p>
                  <ul className="social-network">
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-0 rounded-3">
                <img
                  src="images/team3.webp"
                  alt="team"
                  className="img-fluid rounded-3"
                />
                <div className="team-info">
                  <h5>Ashley Sanchez</h5>
                  <p>Master Chef</p>
                  <ul className="social-network">
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card p-0 rounded-3">
                <img
                  src="images/team4.webp"
                  alt="team"
                  className="img-fluid rounded-3"
                />
                <div className="team-info">
                  <h5>Jessica Watson</h5>
                  <p>HouseKeeping</p>
                  <ul className="social-network">
                    <li>
                      <a href="#">
                        <FaFacebook />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}
