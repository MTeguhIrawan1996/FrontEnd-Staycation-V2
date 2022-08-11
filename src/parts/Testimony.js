import { TestimonialFrame } from "assets";
import Button from "elements/Button";
import Star from "elements/Star";
import React from "react";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-auto d-none d-lg-block" style={{ marginRight: 60 }}>
          <div
            className="testimonial-hero"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
              <img
                src={TestimonialFrame}
                alt="Testimonial frame"
                className="position-absolute"
                style={{ margin: "-30px 0 0 -30px" }}
              />
            </div>
          </div>
        </div>
        <div className="col" data-aos="fade-up" data-aos-delay="300">
          <h4 className="text-primary" style={{ marginBottom: 40 }}>
            {data.name}
          </h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5
            className="h3 font-weight-light my-3"
            style={{ lineHeight: "120%" }}
          >
            {data.content}
          </h5>
          <span className="text-gray-500">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div>
            <Button
              type="link"
              href={`/testimonial/${data._id}`}
              className="btn px-lg-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
            >
              Show Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
