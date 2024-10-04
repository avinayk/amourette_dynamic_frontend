import React from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="d-block">
        <div className="ftblock py-5">
          <div className="container-lg">
            <div className="row gy-4">
              <div className="col-md-3">
                <div className="d-flex flex-column gap-4 ftlogoblock">
                  <h2>AMOURETTE.NO</h2>
                  <h6>
                    Ullamco quis esse veniam dolore aliquip eiusmod culpa.
                    Veniam nostrud irure sunt magna irure mollit velit veniam
                    nulla.
                  </h6>
                </div>
              </div>
              <div className="col-md-3 offset-md-3">
                <div className="d-flex flex-column gap-3 ftblock ps-3 ps-sm-5">
                  <h3>About</h3>
                  <div className="d-flex flex-column gap-2 ftlink">
                    <Link to="/membership">Membership</Link>
                    <Link to="/">Help and support</Link>
                    <Link to="/">Contact us</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-flex flex-column gap-3 ftblock  ps-3 ps-sm-5">
                  <h3>Resources</h3>
                  <div className="d-flex flex-column gap-2 ftlink">
                    <Link to="/">Security</Link>
                    <Link to="/">privacy</Link>
                    <Link to="/">Terms and conditions</Link>
                  </div>
                </div>
              </div>
              <div className="col-12">
              <div className="d-block ftlogoblock">
                  <p className="copyrighttext">
                    &copy; Copyright 2024, all rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
