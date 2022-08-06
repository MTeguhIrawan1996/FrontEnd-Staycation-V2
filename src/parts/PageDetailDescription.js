import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4 className="text-primary">About The Place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.length === 0
          ? "Tidak ada Feature"
          : data.features.map((feature, index) => {
              return (
                <div
                  key={`feature-${index}`}
                  className="col-4 col-lg-3 text-center"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width="38"
                    className="d-block mb-2 mr-auto ml-auto"
                    src={feature.imageUrl}
                    alt={feature.name}
                  />{" "}
                  <span>{feature.qty} </span>
                  <span className="text-gray-500 font-weight-light">
                    {feature.name}
                  </span>
                </div>
              );
            })}
      </div>
    </main>
  );
}
