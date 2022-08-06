import React from "react";

export default function Activity(props) {
  return (
    <section className="container">
      <h4 className="mb-3 text-primary" data-aos="fade-up" data-aos-delay="100">
        Treasure to Choose
      </h4>
      <div className="container-grid sm">
        {props.data.length === 0 ? (
          <div
            className="item column-12 column-sm-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            There is no propert at this activities....
          </div>
        ) : (
          props.data.map((activity, index) => {
            return (
              <div
                key={`activity-${index}`}
                className="item column-3 column-sm-6"
              >
                <div
                  className="card border-0"
                  data-aos="fade-up"
                  data-aos-delay={200 * (index + 1)}
                >
                  <figure className="img-wrapper">
                    <img
                      src={activity.imageUrl}
                      alt={activity.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <h5 className="text-gray-900">{activity.name}</h5>
                    <span className="text-gray-500">{activity.type}</span>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
