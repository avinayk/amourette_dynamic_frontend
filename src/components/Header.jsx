import React from "react";
import logo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container-lg">
        <div className="row gy-3 align-items-center">
          <div className="col-md-6">
            <a href="#" className="toplogo d-inline-block fulw">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end">
              <div className="d-flex gap-4 align-items-center">
                <a href="#" className="topbtn loginbtn">
                  Log in
                </a>
                <a href="#" className="topbtn registerbtn">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
