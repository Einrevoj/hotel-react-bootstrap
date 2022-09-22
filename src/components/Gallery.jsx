import React from "react";

export default function Gallery() {
  return (
    <section className="gallery_wrapper" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 section-title text-center mb-5">
            <h6>Best Pictures Of Our Hotel</h6>
            <h3>Our Gallery</h3>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-lg-3 col-md-6 gallery-item">
            <img
              src="images/1.webp"
              alt="gallery1"
              className="img-fluid w-100"
            />
            <div className="gallery-item-content"></div>
          </div>
          <div className="col-lg-3 col-md-6 gallery-item">
            <img
              src="images/2.webp"
              alt="gallery2"
              className="img-fluid w-100"
            />
            <div className="gallery-item-content"></div>
          </div>
          <div className="col-lg-3 col-md-6 gallery-item">
            <img
              src="images/3.webp"
              alt="gallery3"
              className="img-fluid w-100"
            />
            <div className="gallery-item-content"></div>
          </div>
          <div className="col-lg-3 col-md-6 gallery-item">
            <img
              src="images/4.webp"
              alt="gallery4"
              className="img-fluid w-100"
            />
            <div className="gallery-item-content"></div>
          </div>
          <div className=" col-md-6 gallery-item">
            <img
              src="images/5.webp"
              alt="gallery5"
              className="img-fluid w-100"
            />
            <div className="gallery-item-content"></div>
          </div>
          <div className=" col-md-6 gallery-item">
            <img
              src="images/6.webp"
              alt="gallery6"
              className="img-fluid w-100"
            />
            <div className="gallery-item-content"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
