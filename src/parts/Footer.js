import Button from "elements/Button";
import React from "react";
import IconText from "./IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <IconText />
            <p className="brand-tagline">
              We kaboom your holiday instantly and memorable
            </p>
          </div>
          <div className="col-6 col-lg-auto mr-0 mr-lg-5">
            <h6 className="mt-2">For Beginer</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-auto mr-0 mr-lg-5">
            <h6 className="mt-2">Explore Use</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/carear">
                  Our Carear
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-auto mt-2 mt-lg-0">
            <h6 className="mt-2">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support.Staycation@gmail.com"
                >
                  support.Staycation@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+622185174617">
                  0822-8517-4617
                </Button>
              </li>
              <li className="list-group-item">
                <span>Banjarmasin - Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2022 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
