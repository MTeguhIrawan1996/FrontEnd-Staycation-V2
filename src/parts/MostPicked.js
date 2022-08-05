import React from "react";
import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3 text-primary" data-aos="fade-up" data-aos-delay="100">
        Most Picked
      </h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpicked-${index}`}
              className={`item column-4 ${
                index === 0
                  ? " row-2 row-sm-2 column-sm-12"
                  : " row-1 column-sm-6"
              }`}
              data-aos="fade-up"
              data-aos-delay={200 * (index + 1)}
            >
              <div className="card card-featured">
                <div className="tag">
                  ${item.price}{" "}
                  <span className="font-weight-light">Per {item.unit}</span>
                </div>
                <figure className="img-wrapper">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="img-cover"
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    className="stretched-link d-block text-white"
                    href={`/properties/${item._id}`}
                  >
                    <h5>{item.name}</h5>
                  </Button>
                  <span>
                    {item.city},{item.country}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
