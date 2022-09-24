import React from "react";
import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    // console.log(category);
    return (
      <section className="container" key={`mostpicked-${index1}`}>
        <h4
          className="mb-3 text-primary"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {category.name}
        </h4>
        <div className="container-grid">
          {category.itemId.length === 0 ? (
            <div
              className="item column-12 column-sm-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              There is no propert at this category....
            </div>
          ) : (
            category.itemId.map((item, index2) => {
              return (
                <div
                  className="item column-3 row-1 column-sm-6 row-sm-1"
                  key={`category-${index1}-item-${index2}`}
                >
                  <div
                    className="card border-0"
                    data-aos="fade-up"
                    data-aos-delay={300 * index2}
                  >
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={`${process.env.REACT_APP_HOST}${item.imageId[0].imageUrl}`}
                        alt={item.title}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="streched-link d-block text-gray-800"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.title}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
