import { InputText } from "elements/Form";
import React from "react";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;
  return (
    <div className="container" style={{ marginBottom: 30 }}>
      <div className="row justify-content=center align-items-center">
        <div
          className="col-12 col-lg-6 py-5"
          style={{ paddingLeft: 60, paddingRight: 60 }}
        >
          <div className="card border-0">
            <figure className="img-wrapper" style={{ height: 270 }}>
              <img
                className="img-cover"
                src={ItemDetails.imageUrls[0].url}
                alt={ItemDetails.name}
              />
            </figure>
            <div className="row align-items-center">
              <div className="col">
                <div className="meta-wrapper">
                  <h5 className="text-primary">{ItemDetails.name}</h5>
                  <span className="text-gray-500">
                    {ItemDetails.city}, {ItemDetails.country}
                  </span>
                </div>
              </div>
              <div className="col-auto">
                <span className="text-primary">
                  ${+checkout.duration * ItemDetails.price} USD
                  <span className="text-gray-500"> per </span>
                  {checkout.duration} {ItemDetails.unit}
                  {+checkout.duration > 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-12 col-lg-6 mt-3 mt-lg-0 py-lg-5"
          style={{ paddingLeft: 60, paddingRight: 60 }}
        >
          <label htmlFor="firstName">First Name</label>
          <InputText
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={props.onChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <InputText
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={props.onChange}
          />
          <label htmlFor="email">Email Address</label>
          <InputText
            id="email"
            name="email"
            type="email"
            value={data.email}
            onChange={props.onChange}
          />
          <label htmlFor="phone">Phone Number</label>
          <InputText
            id="phone"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={props.onChange}
          />
        </div>
      </div>
    </div>
  );
}
