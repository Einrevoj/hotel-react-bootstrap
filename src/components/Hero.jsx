import React from "react";
import { Carousel } from "react-bootstrap";

export default function Hero() {
  return (
    <section id="#home">
      <Carousel fade className="banner-wrapper p-0">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/slider1.webp"
            alt="First slide"
          />
          <Carousel.Caption
            class="carousel-caption d-flex flex-column justify-content-center h-100"
            style={{ top: 0 }}
          >
            <h1 className="caption1">WELCOME TO HOTEL DEL LUNA</h1>
            <p className="caption2">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/slider2.webp"
            alt="First slide"
          />
          <Carousel.Caption
            className="carousel-caption d-flex flex-column justify-content-center h-100"
            style={{ top: 0 }}
          >
            <h1 className="caption1">WELCOME TO HOTEL DEL LUNA</h1>
            <p className="caption2">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container booking-area">
        <form className="row">
          <div className="col-lg mb-3 mb-lg-0">
            <input type="date" className="form-control" placeholder="Date" />
          </div>
          <div className="col-lg mb-3 mb-lg-0">
            <input type="date" className="form-control" placeholder="Date" />
          </div>
          <div className="col-lg mb-3 mb-lg-0">
            <select className="form-select">
              <option selected>Adults</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col-lg mb-3 mb-lg-0">
            <select className="form-select">
              <option selected>Children</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col-lg mb-3 mb-lg-0">
            <button type="submit" className="main-btn rounded-2 px-lg-3">
              Check Availability
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
