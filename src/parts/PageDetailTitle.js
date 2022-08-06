import Breadcrumb from "elements/Breadcrumb";
import React from "react";

export default function PageDetailTitle({ data, breadcrumb }) {
  return (
    <section className="container">
      <div
        className="row align-item-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="col-12 col-lg">
          <Breadcrumb data={breadcrumb} />
        </div>
        <div className="col-12 col-lg-auto text-center">
          <h1 className="h2 text-primary">{data.name}</h1>
          <span className="text-gray-400">
            {data.city}, {data.country}
          </span>
        </div>
        <div className="col-lg d-none d-lg-block"></div>
      </div>
    </section>
  );
}
