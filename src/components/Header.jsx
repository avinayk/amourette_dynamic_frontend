import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="container-lg">
        <div className="row gy-3 align-items-center">
          <div className="col-md-6">
            <Link to="/" className="toplogo d-inline-block fulw">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center justify-content-md-end">
              <div className="d-flex gap-4 align-items-center">
                <Link to="/login" className="topbtn loginbtn">
                  Log in
                </Link>
                <Link to="/register" className="topbtn registerbtn">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
