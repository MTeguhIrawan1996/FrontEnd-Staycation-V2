import React from "react";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${
                index > 0
                  ? "column-5 column-sm-6 row-1 row-sm-1"
                  : "column-7 column-sm-12 row-2 row-sm-2"
              }`}
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
            >
              <div className="card border-0 card-featured">
                <figure className="img-wrapper">
                  <img className="img-cover" src={item.url} alt={item._id} />
                </figure>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
